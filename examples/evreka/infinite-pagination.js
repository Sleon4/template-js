(function() {
    const out = { wait: true };
    const selector = document.querySelector('div.load-more-button-wrap > a.primary-button');
    out.has_next_page = false;

    if (selector) {
        selector.click();
        out.has_next_page = true;
    }

    return out;
})();