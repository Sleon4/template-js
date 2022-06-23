(function () {
    const jobs = [];
    let counter = 1, limit = 0, csrf = "", form = null;

    do {
        csrf = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

        form = new FormData();
        form.append('_token', csrf);
        form.append('keywords', '');
        form.append('location', '');
        form.append('latitude', '');
        form.append('longitude', '');
        form.append('unit', 'km');
        form.append('industry', '');
        form.append('functional_expertises', '');
        form.append('job_type', '');
        form.append('radius', '');
        form.append('currency', '');
        form.append('salary_type', '');
        form.append('pay_interval', '');
        form.append('maximum_salary', '');
        form.append('minimum_salary', '');
        form.append('page', counter);

        $.ajax({
            url: "https://vacancies.acuityconsultants.jobs/ajax/search-jobs",
            type: "POST",
            dataType: "json",
            contentType: false,
    	    processData: false,
            data: JSON.stringify(form),
            success: (res) => {
                for (let job of res.items) {
                    jobs.push({
                        title: job.job_title.trim(),
                        reqid: job.id,
                        url: `https://vacancies.acuityconsultants.jobs/job/${job.id}`,
                        location: job.location.address.trim(),
                        temp: 1
                    });
                }

                limit = Math.round(res.total / res.items.length);
                counter++;
            },
            error: (err) => msg(err),
        });
    } while (counter < limit);

    return { jobs: jobs };
})();