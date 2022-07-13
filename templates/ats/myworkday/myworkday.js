(() => {
    const jobs = [];
    const code = 'SalesCareers';
    const referer = `https://mattressfirm.wd1.myworkdayjobs.com/en-US/${code}`;
    const url = `https://mattressfirm.wd1.myworkdayjobs.com/wday/cxs/mattressfirm/${code}/jobs`;
    const url_desc = `https://mattressfirm.wd1.myworkdayjobs.com/wday/cxs/mattressfirm/${code}`;
    let cont = 0, limit = 0, i = 0, offset = 0, strTotal = '';

    // functions
    const stringToHTML = (str) => new DOMParser().parseFromString(str, 'text/html').body;
    const calculateDays = (date, cont) => {
        date.setDate(date.getDate() + cont);
        return date;
    };
    const calculateMonths = (date, month) => {
        date.setMonth(date.getMonth() + month);
        return date;
    };
    const calculateYears = (date, year) => {
        date.setMonth(date.getMonth() + (year * 12));
        return date;
    };

    do {
        let data = "{\"appliedFacets\":{},\"limit\":20,\"offset\":" + offset + ",\"searchText\":\"\"}";

        $.ajax({
            url: url,
            type: 'POST',
            dataType: 'json',
            data: data,
            async: false,
            headers: {
                "accept": "application/json",
                "accept-language": "en-US",
                "content-type": "application/json",
                "sec-ch-ua": "\".Not/A)Brand\";v=\"99\", \"Google Chrome\";v=\"103\", \"Chromium\";v=\"103\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"Windows\"",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "referrer": referer,
            },
            success: res => {
                const list = res.jobPostings;

                if (i === 0) {
                    i = 1;
                    strTotal = `${res.total / list.length}`.split('.');
                    limit = strTotal.length > 1 ? (parseInt(strTotal.shift()) + 1) : parseInt(strTotal.shift());
                }

                for (let job of list) {
                    const locations = [];
                    const job_info = {
                        title: job.title,
                        reqid: job.bulletFields.pop(),
                        url: referer + job.externalPath,
                        source_location: job.locationsText,
                        temp: 1
                    };

                    // calculate dates
                    let date = job.postedOn.toLowerCase().trim();
                    let num = date.replace(/[a-zA-Z]/gm, '').trim();

                    if (num === '') {
                        job_info.dateposted_raw = new Date().toLocaleDateString('en-US');
                    } else {
                        if (new RegExp(/days|day/gm).test(date)) {
                            job_info.dateposted_raw = calculateDays(
                                new Date(), -Math.abs(parseInt(num))
                            ).toLocaleDateString('en-US');
                        }

                        if (new RegExp(/months|month/gm).test(date)) {
                            job_info.dateposted_raw = calculateMonths(
                                new Date(), -Math.abs(parseInt(num))
                            ).toLocaleDateString('en-US');
                        }

                        if (new RegExp(/years|year/gm).test(date)) {
                            job_info.dateposted_raw = calculateYears(
                                new Date(), -Math.abs(parseInt(num))
                            ).toLocaleDateString('en-US');
                        }
                    }

                    $.ajax({
                        url: url_desc + job.externalPath,
                        type: 'GET',
                        dataType: 'json',
                        async: false,
                        success: resDesc => {
                            job_info.html = resDesc.jobPostingInfo.jobDescription;
                            job_info.jobdesc = stringToHTML(job_info.html).textContent.trim();

                            locations.push(resDesc.jobPostingInfo.location);
                            if (resDesc.jobPostingInfo.additionalLocations) {
                                locations.push(...resDesc.jobPostingInfo.additionalLocations);
                            }
                        },
                        error: errDesc => msg(errDesc)
                    });

                    locations.forEach(loc => jobs.push({ ...job_info, location: loc }));
                }
            },
            error: err => msg(err)
        });

        offset+= 20;
        cont++;
    } while (cont < limit);

    return { jobs: jobs };
})();