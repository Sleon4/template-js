(function() {
    const out = { wait: true };

    const selector = document.querySelector('div.jobs-list.active > p.list-centered.grid > a:not([style="display:none;"])');
    out.has_next_page = false;

    if (selector) {
        selector.click();
        out.has_next_page = true;
    }

    return out;
})();