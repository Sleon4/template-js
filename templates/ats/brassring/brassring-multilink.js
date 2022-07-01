(() => {
    const jobs = [];
    let cont = 0, limit = 0, strTotal = '';

    // functions
    const stringToHTML = (str) => new DOMParser().parseFromString(str, 'text/html').body;

    const links = [
        { partnerId: 25385, siteId: 5186, locations: ['formtext6'] },
        { partnerId: 25385, siteId: 5417, locations: ['formtext40'] },
        { partnerId: 25385, siteId: 5520, locations: ['formtext80'] },
        { partnerId: 25385, siteId: 5526, locations: ['formtext7'] }
    ];

    const data = {
        partnerId: 0,
        siteId: 0,
        keyword: '',
        location: '',
        keywordCustomSolrFields: 'JobTitle,FORMTEXT4,FORMTEXT6,FORMTEXT7',
        locationCustomSolrFields: 'FORMTEXT5,FORMTEXT6',
        linkId: '0',
        Latitude: 0,
        Longitude: 0,
        facetfilterfields: {
            Facet: []
        },
        powersearchoptions: {
            PowerSearchOption: [{
                VerityZone: 'AutoReq',
                Type: 'text',
                Value: null
            },
            {
                VerityZone: 'JobTitle',
                Type: 'text',
                Value: null
            },
            {
                VerityZone: 'FORMTEXT6',
                Type: 'single-select',
                OptionCodes: []
            },
            {
                VerityZone: 'FORMTEXT7',
                Type: 'single-select',
                OptionCodes: []
            },
            {
                VerityZone: 'FORMTEXT4',
                Type: 'radio',
                OptionCodes: []
            },
            {
                VerityZone: 'FORMTEXT3',
                Type: 'radio',
                OptionCodes: []
            },
            {
                VerityZone: 'Location',
                Type: 'select',
                OptionCodes: []
            },
            {
                VerityZone: 'LastUpdated',
                Type: 'date',
                Value: null
            },
            ],
        },
        SortType: 'score',
        pageNumber: cont,
    };

    for (let link of links) {
        data.partnerId = link.partnerId;
        data.siteId = link.siteId;

        do {
            data.pageNumber = cont;

            $.ajax({
                url: 'https://sjobs.brassring.com/TgNewUI/Search/Ajax/ProcessSortAndShowMoreJobs',
                headers: {
                    "accept": "application/json, text/plain, */*",
                    "content-type": "application/json;charset=UTF-8"
                },
                type: 'POST',
                dataType: 'json',
                data: JSON.stringify(data),
                async: false,
                success: res => {
                    let list = res.Jobs.Job;

                    for (let job of list) {
                        let locations = [];
                        let jobInfo = { url: job.Link.trim(), temp: 1 };

                        for (let question of job.Questions) {
                            if (question.QuestionName === 'jobtitle') jobInfo.title = question.Value.trim();
                            if (question.QuestionName === 'reqid') jobInfo.reqid = question.Value.trim();
                            if (question.QuestionName === 'formtext1') jobInfo.source_jobtype = question.Value.trim();
                            if (question.QuestionName === 'lastupdated') jobInfo.dateposted_raw = new Date(question.Value.trim()).toLocaleDateString('en-US');
                            if (link.locations.includes(question.QuestionName)) locations.push(question.Value.trim());
                            if (question.QuestionName === 'jobdescription') {
                                jobInfo.html = question.Value.trim();
                                jobInfo.jobdesc = stringToHTML(jobInfo.html).textContent.trim();
                            }
                        }

                        jobInfo.source_location = locations.join(', ');
                        jobInfo.location = jobInfo.source_location;
                        jobs.push(jobInfo);
                    }

                    strTotal = `${res.JobsCount / list.length}`.split('.');
                    limit = strTotal.length > 1 ? (parseInt(strTotal.shift()) + 1) : parseInt(strTotal.shift());
                    cont++;
                },
                error: err => msg(err)
            });
        } while (cont < limit);

        cont = 0;
        limit = 0;
        strTotal = '';
    }

    return { jobs: jobs };
})();