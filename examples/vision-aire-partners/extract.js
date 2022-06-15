(function () {
    const jobs = [];
    let counter = 1, limit = 0, json = null;

    $.ajax({
        url: "https://public-rest33.bullhornstaffing.com/rest-services/17EG1/search/JobOrder?start=30&query=(isOpen:1)%20AND%20(isDeleted:0)&fields=id,title,publishedCategory(id,name),address(city,state,countryName),employmentType,dateLastPublished,publicDescription,isOpen,isPublic,isDeleted,publishedZip,salary,salaryUnit&count=30&sort=-dateLastPublished&showTotalMatched=true",
        type: "GET",
        dataType: "json",
        async: false,
        headers: {
            accept: "application/json, text/plain, */*",
            "accept-language": "es-419,es;q=0.9,en-US;q=0.8,en;q=0.7",
            "sec-ch-ua": '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"Windows"',
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "cross-site",
        },
        success: function (res) {
            for (let job of res.data) {
                jobs.push({
                    title: job.title.trim(),
                    reqid: job.id,
                    location: `${job.address.city}, ${job.address.state}`,
                    type: job.employmentType.trim(),
                    temp: 1,
                });
            }

            // counter = counter + 1;
        },
        error: (err) => {
            msg(err);
        }
    });

    // do {
    // } while(counter < limit);

    return { jobs: jobs };
})();
