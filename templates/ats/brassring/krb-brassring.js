(() => {
    const jobs = [], partnerId = 30003, siteId = 5083;
    let cont = 0, limit = 0, i = 0, strTotal = '';

    // functions
    const stringToHTML = (str) => new DOMParser().parseFromString(str, 'text/html').body;

    const data = {
        partnerId: partnerId,
        siteId: siteId,
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
    const data_desc = {
        configMode: '',
        jobSiteId: siteId,
        jobid: null,
        partnerId: partnerId,
        siteId: siteId,
        turnOffHttps: false
    };

    do {
        data.pageNumber = cont;

        $.ajax({
            url: 'https://krb-sjobs.brassring.com/TgNewUI/Search/Ajax/ProcessSortAndShowMoreJobs',
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

                if (i === 0) {
                    strTotal = `${res.JobsCount / list.length}`.split('.');
                    limit = strTotal.length > 1 ? (parseInt(strTotal.shift()) + 1) : parseInt(strTotal.shift());
                    i = 1;
                }

                for (let job of list) {
                    let locations = [];
                    let jobInfo = { url: job.Link.trim(), temp: 1 };

                    for (let question of job.Questions) {
                        if (question.QuestionName === 'reqid') jobInfo.reqid = question.Value.trim();
                    }

                    data_desc.jobid = jobInfo.reqid;

                    $.ajax({
                        url: 'https://krb-sjobs.brassring.com/TgNewUI/Search/Ajax/JobDetails',
                        headers: {
                            "accept": "application/json, text/plain, */*",
                            "content-type": "application/json;charset=UTF-8",
                            "x-newrelic-id": "UgAFU1ZaGwIBUlRVAQgDVQ=="
                        },
                        type: 'POST',
                        dataType: 'json',
                        data: JSON.stringify(data_desc),
                        async: false,
                        success: res_desc => {
                            for (let desc of res_desc.ServiceResponse.Jobdetails.JobDetailQuestions) {
                                if (desc.VerityZone === 'lastupdated') jobInfo.dateposted_raw = new Date(desc.AnswerValue.trim()).toLocaleDateString('en-US');
                                if (desc.VerityZone === 'dateclosed') jobInfo.dateclosed_raw = new Date(desc.AnswerValue.trim()).toLocaleDateString('en-US');
                                if (['formtext41', 'formtext42'].includes(desc.VerityZone)) locations.push(desc.AnswerValue.trim());
                                if (desc.VerityZone === 'formtext49') jobInfo.experience_required = desc.AnswerValue.trim();
                                if (desc.VerityZone === 'formtext43') jobInfo.title = desc.AnswerValue.trim();
                                if (desc.VerityZone === 'formtext38') {
                                    jobInfo.html = desc.AnswerValue.trim();
                                    jobInfo.jobdesc = stringToHTML(jobInfo.html).textContent.trim();
                                }
                            }
                        },
                        error: err_desc => msg(err_desc)
                    });

                    jobInfo.source_location = locations.join(', ');
                    jobInfo.location = jobInfo.source_location;

                    jobs.push(jobInfo);
                }

                cont++;
            },
            error: err => msg(err)
        });
    } while (cont < limit);

    return { jobs: jobs };
})()