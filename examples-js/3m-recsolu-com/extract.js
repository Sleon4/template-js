(function() {
    const list = document.querySelectorAll("ul.no-bullet > div.js-search-results-container > li.search-results__item");
    const jobs = [];
    let url = "", location = "";

    for (let job of list) {
        if (typeof job === 'function') continue;
        if (typeof job === 'number') continue;
        location = job.querySelector('div.search-results__jobinfo > div :nth-child(1)').textContent.trim();

        jobs.push({
            title: job.querySelector('div.search-results__jobinfo > a').textContent.trim(),
            reqid: job.querySelector('div.search-results__jobinfo > div :nth-child(3)').textContent.trim(),
            url: job.querySelector('div.search-results__jobinfo > a').href.trim(),
            location: location,
            source_location: location,
            temp: 1
        });
    }

    return { jobs: jobs };
})();