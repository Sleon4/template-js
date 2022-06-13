(function() {
    const out = { wait: true };
    const selector = document.querySelector('div.tile-more-results-container:not([style="display:none;"]) > button');
    out.has_next_page = false;

    if (document.querySelector('div.tile-more-results-container').getAttribute("style") === null) {
        selector.click();
        out.has_next_page = true;
    }

    return out;
})();