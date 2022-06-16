(function() {
    const list = document.querySelectorAll("table.job-listing > tbody > tr.clickable-row");
    const jobs = [];

    for (let job of list) {
        if (['function', 'number'].includes(typeof job)) continue;

        jobs.push({
            title: job.querySelector('td:nth-child(2)').textContent.trim(),
            url: `https://www.hi.org${job.getAttribute('data-href').trim()}`,
            location: job.querySelector('td:nth-child(3)').textContent.trim(),
            temp: 1
        });
    }

    return { jobs: jobs };
})();