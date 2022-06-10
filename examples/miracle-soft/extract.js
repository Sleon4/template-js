(function() {
    const list = document.querySelectorAll("div#dynamicDiv.ipost.scrollbar-vt.scrollbar > div.hover-div");
    const jobs = [];
    let url = "", location = "", title = "", id = "", new_title;

    for (let job of list) {
        if (typeof job === 'function') continue;
        if (typeof job === 'number') continue;
        new_title = job.querySelector('div.entry-title > h3 > a').textContent.trim().split('-');
        id = new_title.pop().trim();
        title = new_title.shift().trim();
        location = job.querySelector('span.badge-info.location-bdge').textContent.trim();

        jobs.push({
            title: title,
            reqid: id,
            url: job.querySelector('div.entry-title > h3 > a').href.trim(),
            location: location,
            source_location: location,
            experience_required: job.querySelector('p.badge.bdgepadyar').textContent.trim(),
            temp: 1
        });
    }

    return { jobs: jobs };
})();