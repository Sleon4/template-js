(function() {
    const out = { waitFor: 'div#dvJD' };
    const container = document.querySelectorAll('table.table> tbody > tr');
    const selector = 'div[class="col-xs-12 col-sm-8 border-right"]';

    if (["undefined", undefined].includes(typeof pass_it)) pass_it = {};
    out.pass_it = !pass_it.cont ? { cont: 0, totalJobs: 0, jobs: [] } : pass_it;

    if (out.pass_it.totalJobs === 0) {
        const jobs = [];

        for (let job of container) {
            jobs.push({
                title: job.querySelector('h4').textContent.trim(),
                reqid: job.querySelector(`${selector} > h5:nth-child(2) > span:nth-child(3)`).textContent.trim(),
                experience_required: job.querySelector(`${selector} > h5:nth-child(3) > span:nth-child(3)`).textContent.trim(),
                source_location: job.querySelector('li.location > span').textContent.trim(),
                temp: 1
            });
        }

        out.pass_it.jobs = jobs;
        out.pass_it.totalJobs = container.length;
    }

    container[out.pass_it.cont].querySelector(`${selector} > a`).click();
    return out;
})();