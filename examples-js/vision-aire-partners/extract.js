(function () {
    const jobs = [];
    let counter = 0, limit = 0, html = '';

    do {
        $.ajax({
            url: 'https://public-rest33.bullhornstaffing.com/rest-services/17EG1/search/JobOrder?start=' + counter + '&query=(isOpen:1)%20AND%20(isDeleted:0)&fields=id,title,publishedCategory(id,name),address(city,state,countryName),employmentType,dateLastPublished,publicDescription,isOpen,isPublic,isDeleted,publishedZip,salary,salaryUnit&count=30&sort=-dateLastPublished&showTotalMatched=true',
            type: 'GET',
            dataType: "json",
            async: false,
            success: (res) => {
                for (let job of res.data) {
                    html = cleanHTML(job.publicDescription);

                    let div = document.createElement('div');
                    div.innerHTML = html;

                    jobs.push({
                        title: job.title.trim(),
                        url: `https://visionairepartners.com/wp-content/plugins/bullhorn-oscp/#/jobs/${job.id}`,
                        reqid: job.id,
                        location: `${job.address.city}, ${job.address.state}`,
                        type: job.employmentType.trim(),
                        temp: 1,
                        html: html,
                        jobdesc: cleanHTML(div.textContent.trim())
                    });
                }

                limit = res.total;
                counter+= 30;
            },
            error: function(err) {
                msg(err)
            }
        });
    } while(counter < limit);

    return { jobs: jobs };
})();