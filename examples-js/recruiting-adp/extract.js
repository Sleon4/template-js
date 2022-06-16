(function () {
    const jobs = [];
    let counter = 1, limit = 0;

    do {
        const data = {
            filters: [
                { name: "country", label: "Country" },
                { name: "state", label: "State/Province" },
                { name: "city", label: "Town/City" },
                { name: "zzreqWorkatHome", label: "Option to Work Remote" },
                { name: "payGroupCode", label: "Job Function" },
                { name: "zzreqJobType", label: "Job Type" },
                { name: "typeOfFulltime", label: "Schedule" },
            ],
            results: {
                pageTitle: "Search Results",
                zeroResultsMessage:
                    "We're sorry but we have no job openings at this time that match your search criteria. Please try another search.",
                searchFailureMessage:
                    "Oops! Something went wrong.  Search has encountered a problem. Try searching again",
                resultsFoundLabel: "results found",
                bookmarkText: "Bookmark This",
                pageSize: "100",
                sortOrder: "00001000",
                shareText: "Share",
                fields: [
                    { name: "ptitle", label: "Published Job Title" },
                    { name: "location", label: "Location" },
                ],
            },
            pagefilter: { page: counter },
            rl: "enUS",
        };

        $.ajax({
            url: "https://recruiting.adp.com/srccar/public/rest/1/115407/search/",
            type: "POST",
            dataType: "json",
            async: false,
            data: JSON.stringify(data),
            headers: {
                "accept": "application/json, text/plain, */*",
                "accept-language": "es-419,es;q=0.9,en-US;q=0.8,en;q=0.7",
                "content-type": "application/json;charset=UTF-8",
                "sec-ch-ua": '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": '"Windows"',
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
            },
            success: (res) => {
                for (let job of res.jobs) {
                    jobs.push({
                        title: job.ptitle.trim(),
                        reqid: job.id.trim(),
                        url: job.url.trim(),
                        location: job.location.trim(),
                        jobdesc: job.description.trim(),
                        temp: 1
                    });
                }

                limit = res.pages;
                counter++;
            },
            error: (err) => msg(err),
        });
    } while (counter < limit);

    return { jobs: jobs };
})();