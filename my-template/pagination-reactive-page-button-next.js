(function () {
    let out = {
        waitFor: 'tr.ftlcopy.ftlrow'
    };

    let click_elem = document.querySelector('a[id*="Next"][aria-disabled="false"]');

    if (click_elem) {
        click_elem.click();
        out.has_next_page = true;
    } else {
        out.has_next_page = false;
    }

    return out;
})();