(function() { // Sleon
    const jobs = [];
    const links = [
        { buildIdEnc: '4vhaSRnkJak', jobBoardIdEnc: '5wn_gaIqkWM' },
        { buildIdEnc: '4vhaSRnkJak', jobBoardIdEnc: '0NCz0uq251I' },
        { buildIdEnc: '4vhaSRnkJak', jobBoardIdEnc: 'jAwPWLJWXRw' },
        { buildIdEnc: '4vhaSRnkJak', jobBoardIdEnc: 'bObqrAR3fuY' }
    ];

    // FUNCTIONS
    const stringToHTML = (str) => new DOMParser().parseFromString(str, 'text/html').body;
    const clearHTML = (html) => {
        for (let elem of html.querySelectorAll('p, span, li')) {
            if (elem.textContent.search(/@|http|www./ig) != -1) elem.remove();
        }

        const remove_selectors = ['a', 'script', 'i', 'img', 'style', 'button', 'figure', 'noscript', 'svg', 'form', 'input', 'iframe', 'link'];
        for (let selector of remove_selectors) {
            for (let elem of html.querySelectorAll(selector)) {
                elem.remove();
            }
        }

        return html;
    };

    for (let link of links) {
        $.ajax({
            url: `https://hire.myavionte.com/sonar/v2/jobBoard/${link.buildIdEnc}/${link.jobBoardIdEnc}/`,
            type: 'GET',
            dataType: "json",
            async: false,
            headers: {
                "accept": "application/json, text/plain",
                "accept-language": "en,es-419;q=0.9,es;q=0.8,en-US;q=0.7",
                "sec-ch-ua": "\".Not/A)Brand\";v=\"99\", \"Google Chrome\";v=\"103\", \"Chromium\";v=\"103\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"Windows\"",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-compas-careers-buildidenc": link.buildIdEnc,
                "x-compas-careers-jobboardidenc": link.jobBoardIdEnc
            },
            success: res => {
                let dataJob = null, id = '', html = '';

                Object.entries(res.jobPosts).forEach(([index, job]) => {
                    id = index.trim();

                    dataJob = {
                        title: job.jobTitle.trim(),
                        reqid: id,
                        url: `https://www.asgstaffing.com/tennessee-job-board?rpid=MSKb4JeCglI${id}`,
                        source_location: job.location.trim(),
                        location: job.location.trim(),
                        dateposted_raw: new Date(job.postDateUtc.trim()).toLocaleDateString('en-US'),
                        temp: 1
                    };

                    $.ajax({
                        url: `https://hire.myavionte.com/sonar/v2/jobBoard/jobPost/${id}/description`,
                        type: 'GET',
                        dataType: "json",
                        async: false,
                        headers: {
                            "accept": "application/json, text/plain, ",
                            "x-compas-careers-buildidenc": res.buildIdEnc,
                            "x-compas-careers-jobboardidenc": res.jobBoardIdEnc
                        },
                        success: resDesc => {
                            html = stringToHTML(resDesc.description);
                            dataJob.html = html;
                            dataJob.jobdesc = clearHTML(html).textContent.trim();
                        },
                        error: errDesc => msg(errDesc)
                    });

                    jobs.push(dataJob);
                });
            },
            error: err => msg(err)
        });
    }

    return {
        jobs: jobs
    };
})();