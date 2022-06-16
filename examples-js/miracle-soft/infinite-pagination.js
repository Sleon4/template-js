(function() {
	const out = { wait: true };
    let count = document.querySelectorAll('div#dynamicDiv.ipost.scrollbar-vt.scrollbar > div.hover-div').length;
    const selector_scroll = "div#dynamicDiv.ipost.scrollbar-vt.scrollbar";
    document.querySelector(selector_scroll).scrollBy(0, document.querySelector(selector_scroll).scrollHeight);

    out.pass_it = !pass_it.cont ? { cont: 0 } : pass_it;
    out.has_next_page = out.pass_it.cont === count ? false : true;
    out.pass_it.cont = count;

    return out;
})();