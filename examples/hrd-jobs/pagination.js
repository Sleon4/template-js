(function () {
    let out = {};
    let click_elem = document.querySelector('a[id*="next"][aria-disabled="false"]');

    if (click_elem) {
        click_elem.click();
        out.has_next_page = true;
    } else {
        out.has_next_page = false;
    }

    out.waitFor = 'tr.ftlcopy.ftlrow';
    return out;
})();