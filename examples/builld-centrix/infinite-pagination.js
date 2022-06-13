(function() {
    const out = { wait: true };
    const selector = document.querySelector('a.load-more-posts');
    out.has_next_page = false;

    if (selector.querySelector('span.load-more-text').textContent.trim() != 'No More Posts') {
        selector.click();
        out.has_next_page = true;
    }

    return out;
})();