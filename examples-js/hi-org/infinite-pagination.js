(function() {
    const out = { wait: true };
    const selector = document.querySelector('button#show_more_jobs_btn:not([style="display:none;"])');
    out.has_next_page = false;

    if ([null, '', undefined].includes(selector.style.display)) {
        selector.click();
        out.has_next_page = true;
    }

    return out;
})();