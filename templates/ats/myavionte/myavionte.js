(function() { // Sleon
    // const jobSiteID = document.querySelector('iframe').src.split('jobs/').pop().slice(0, -2).trim();
    const jobSiteID = window.location.href.split('jobs/').pop().slice(0, -2).trim();
    const jobs = [];

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

    // HTTP
    $.ajax({
        url: `https://hire.myavionte.com/sonar/v2/jobBoard/${jobSiteID}`,
        type: 'GET',
        dataType: "json",
        async: false,
        headers: {
            "accept": "application/json, text/plain, */*"
        },
        success: res => {
            let dataJob = null, id = '', html = '', location = '';

            Object.entries(res.jobPosts).forEach(([index, job]) => {
                id = index.trim();
                location = job.location.trim();

                dataJob = {
                    title: job.jobTitle.trim(),
                    reqid: id,
                    url: `https://www.cypresshcm.com/jobs-openings-new/?rpid=${id}`,
                    source_location: location,
                    dateposted_raw: new Date(job.postDateUtc.trim()).toLocaleDateString('en-US'),
                    temp: 1
                };

                if (location === 'Remote') {
                    dataJob.location = 'Walnut Creek, California';
                } else {
                    dataJob.location = location.search(/Remote/ig) != -1 ? location.split(',').pop().trim() : location;
                }

                if (dataJob.location === 'CA') dataJob.location = `${dataJob.location}, US`;

                $.ajax({
                    url: `https://hire.myavionte.com/sonar/v2/jobBoard/jobPost/${id}/description`,
                    type: 'GET',
                    dataType: "json",
                    async: false,
                    headers: {
                        "accept": "application/json, text/plain, */*",
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

    return { jobs: jobs };
})();