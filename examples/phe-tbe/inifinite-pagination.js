(function() {
    const out = { wait: true };
    let count = document.querySelectorAll('div.oracletaleocwsv2-accordion-head-info').length;
    document.querySelector("html").scrollBy(0, document.querySelector("html").scrollHeight);

    out.pass_it = !pass_it.cont ? { cont: 0 } : pass_it;
    out.has_next_page = out.pass_it.cont === count ? false : true;
    out.pass_it.cont = count;

    return out;
})();