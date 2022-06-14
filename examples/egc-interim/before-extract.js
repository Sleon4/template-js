(function() {
    const out = {};
    const container = document.querySelectorAll('div.container div#offre.row');

    if (["undefined", undefined].includes(typeof pass_it)) pass_it = {};
    out.pass_it = !pass_it.cont ? { cont: 0, totalJobs: 0, jobs: [] } : pass_it;

    if (out.pass_it.totalJobs === 0) {
        const jobs = [];
        let location = "";

        for (let job of container) {
            location = job.querySelector('div#offre-bottom > div:nth-child(1) > span').textContent.trim();

            jobs.push({
                title: job.querySelector('h3').textContent.trim(),
                source_location: location,
                type: job.querySelector('div#offre-bottom > div:nth-child(2) > span').textContent.trim(),
                location: location,
                temp: 1
            });
        }

        out.pass_it.jobs = jobs;
        out.pass_it.totalJobs = jobs.length;
    }

    container[out.pass_it.cont].querySelector('div#offre-bottom > div:nth-child(3) > button').click();
    out.waitFor = 'div.container > div#Description';

    return out;
})();