(function() {
    const list = document.querySelectorAll("div#hb-blog-posts > article.type-post");
    const jobs = [];

    for (let job of list) {
        if (['function', 'number'].includes(typeof job)) continue;

        jobs.push({
            title: job.querySelector('h2.title > a').textContent.trim(),
            url: job.querySelector('h2.title > a').href.trim(),
            temp: 1
        });
    }

    return { jobs: jobs };
})();