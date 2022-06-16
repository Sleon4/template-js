(function() {
    const out = { wait: true };
    let count = document.querySelectorAll('ul.no-bullet > div.js-search-results-container > li.search-results__item').length;
    document.querySelector("html").scrollBy(0, document.querySelector("html").scrollHeight);

    out.pass_it = !pass_it.cont ? { cont: 0 } : pass_it;
    out.has_next_page = out.pass_it.cont === count ? false : true;
    out.pass_it.cont = count;

    return out;
})();