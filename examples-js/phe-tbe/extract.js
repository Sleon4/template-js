(function() {
    const list = document.querySelectorAll("div.jscroll-inner div.oracletaleocwsv2-accordion-expandable");
    const jobs = [];
    let data = null, id = "", url = "", location = "";

    for (let job of list) {
        if (typeof job === 'function') continue;
        if (typeof job === 'number') continue;
        url = job.querySelector('h4.oracletaleocwsv2-head-title > a').href.trim();
        location = job.querySelector('div.oracletaleocwsv2-accordion-head-info > div').textContent.trim();

        jobs.push({
            title: job.querySelector('h4.oracletaleocwsv2-head-title > a').textContent.trim(),
            reqid: new URLSearchParams(url.split('?').pop()).get('rid'),
            url: url,
            location: location,
            source_location: location,
            temp: 1
        });
    }

    return { jobs: jobs };
})();