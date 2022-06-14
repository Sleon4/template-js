(function() {
    const jobs = [];
    const out = { pass_it: pass_it };
    let job = out.pass_it.jobs[out.pass_it.cont];
    const full_html = document.querySelector('div#dvJD> span');

    if (['undefined', undefined].includes(cleanHTML)) {
        cleanHTML = function(x) {
            return x;
        };
    }

    if (['undefined', undefined].includes(typeof msg)) msg = console.log;

    if (full_html) {
        job.url = window.location.href;

        for (let elem of full_html.querySelectorAll('p, span, li')) {
            if (elem.textContent.search(/@|http|www./ig) != -1) {
                elem.remove();
            }
        }

        const remove_selectors = ['a', 'script', 'i', 'img', 'style', 'button', 'figure', 'noscript', 'svg', 'form', 'input', 'iframe', 'link'];
        if (remove_selectors.length > 0) {
            remove_selectors.forEach((remove_selector) => {
                for (let selector of full_html.querySelectorAll(remove_selector)) {
                    selector.remove();
                }
            });
        }

        job.html = full_html.innerHTML.trim();
        job.html = cleanHTML(job.html);

        let div = document.createElement('div');
        div.innerHTML = job.html;
        job.jobdesc = cleanHTML(div.textContent.trim());
    }

    let newLocation = job.source_location.split(',');
    if (newLocation.length > 1) {
        let newJob = null;

        for (let loc of newLocation) {
            newJob = { ...job };
            newJob.location = loc.trim();
            jobs.push(newJob);
        }
    } else {
        job.location = job.source_location;
        jobs.push(job);
    }

    window.history.back();
    out.jobs = jobs;
    out.waitFor = 'table.table> tbody > tr';
    return out;
})();

function removeTextBefore(html, text, flag) {
    var newHtml = html;

    if (newHtml.search(text) > -1) {
        newHtml = newHtml.split(text).pop();

        if (!flag) {
            newHtml = "<h3>" + text + "</h3>" + newHtml;
        }
    }

    return newHtml;
}

function removeTextAfter(html, text, flag) {
    var newHtml = html;

    if (newHtml.search(text) > -1) {
        newHtml = newHtml.split(text).shift();

        if (!flag) {
            newHtml = newHtml + "<p>" + text + "</p>";
        }
    }

    return newHtml;
}