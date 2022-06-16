(function() {
    const list = document.querySelectorAll("div.jobs-list.active div.jobs-list-content > article.list-entrie");
    const jobs = [];

    for (let job of list) {
        if (['function', 'number'].includes(typeof job)) continue;

        jobs.push({
            title: job.querySelector('div.entrie-left > h4').textContent.trim(),
            url: job.querySelector('a.icon-circle-more').href.trim(),
            location: job.getAttribute('data-locations').trim().toUpperCase(),
            source_jobtype: job.getAttribute('data-types').trim().toUpperCase(),
            temp: 1
        });
    }

    return { jobs: jobs };
})();