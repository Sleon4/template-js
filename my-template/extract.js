(function() {
    const list = document.querySelectorAll("table.contentlist > tbody > tr.ftlcopy.ftlrow");
    const jobs = [];
    let data = null, id = "", location = "", btnMore = null;

    for (let job of list) {
        if (typeof job === 'function') continue;
        if (typeof job === 'number') continue;
        id = job.querySelector('span[id*="requisitionListInterface.reqContestNumberValue"]').textContent.trim();
        btnMore = job.querySelector('a[id*="requisitionListInterface.reqMoreLocationAction.row"]');

        // objeto con información cargada
        data = {
            title: job.querySelector("span.titlelink > a").textContent.trim(),
            reqid: id,
            url: (`https://hdr.taleo.net/careersection/jobdetail.ftl?job=${id}&lang=en`).trim(),
            dateposted_raw: new Date(job.querySelector("span[id*='requisitionListInterface.reqPostingDate.row']").textContent.trim()).toLocaleDateString('en-US'),
            source_jobtype: job.querySelector('span[id*="requisitionListInterface.reqSchedule.row"]').textContent.trim(),
            source_location: job.querySelector('span[id*="requisitionListInterface.reqBasicLocation.row"]').textContent.trim(),
            temp: 1
        };

        // validamos si existe el boton 'more...', Validacion hecha para realizar el formato correcto de 'location'
        if (btnMore) {
            location = job.querySelector('span[id*="requisitionListInterface.reqBasicLocation"]')
                .textContent
                .trim()
                .replace('/United States|United Stated/', 'US') + ', ' +
                    btnMore.getAttribute('title').split('locations:').pop().trim();
        } else {
            location = job.querySelector('span[id*="requisitionListInterface.reqBasicLocation"]')
                .textContent
                .trim()
                .replace(/United States|United Stated/g, 'US')
        }

        // Validacion para verificar si hay mas de una 'location'
        if (location.includes(',')) {
            location.split(',').forEach((loc, index) => {
                jobs.push(data.location = loc.trim().split('-').reverse().join(', '));
            });
        } else {
            jobs.push(data.location = location.split('-').reverse().join(', '));
        }
    }

    return { jobs: jobs };
})();