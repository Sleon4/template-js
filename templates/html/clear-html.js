const clearHTML = (html) => {
    for (let elem of html.querySelectorAll('p, span, li')) {
        if (elem.textContent.search(/@|http|www./ig) != -1) elem.remove();
    }

    const remove_selectors = ['a', 'script', 'i', 'img', 'style', 'button', 'figure', 'noscript', 'svg', 'form', 'input', 'iframe', 'link'];
    for (let selector of remove_selectors) {
        for (let elem of html.querySelectorAll(selector)) {
            elem.remove();
        }
    }

    return html;
};