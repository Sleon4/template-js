(function() {
    const list = document.querySelectorAll("table#job-tile-list tr.job-tile");
    const jobs = [];
    let elem = null, id = "";

    for (let job of list) {
        if (['function', 'number'].includes(typeof job)) continue;
        elem = job.querySelector('td > div > div:nth-child(1)');
        id = elem.querySelector('div.section-field.location > div').textContent.trim();

        jobs.push({
            title: elem.querySelector('h2 > a').textContent.trim(),
            reqid: id.split(',').pop().trim(),
            url: elem.querySelector('h2 > a').href.trim(),
            location: elem.querySelector('div.section-field.location > div').textContent.trim(),
            temp: 1
        });
    }

    return { jobs: jobs };
})();