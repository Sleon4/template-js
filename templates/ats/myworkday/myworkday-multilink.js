(() => {
    const links = [
        { code: 'BeckmanCoulterDiagnosticsJobs', url: 'https://danaher.wd1.myworkdayjobs.com/wday/cxs/danaher/BeckmanCoulterDiagnosticsJobs/jobs', referer: 'https://danaher.wd1.myworkdayjobs.com/es/BeckmanCoulterDiagnosticsJobs' },
        // { code: 'CytivaJobsPP', url: 'https://danaher.wd1.myworkdayjobs.com/wday/cxs/danaher/CytivaJobsPP/jobs', referer: 'https://danaher.wd1.myworkdayjobs.com/es/CytivaJobsPP' },
        // { code: 'SCIEXJobs', url: 'https://danaher.wd1.myworkdayjobs.com/wday/cxs/danaher/SCIEXJobs/jobs', referer: 'https://danaher.wd1.myworkdayjobs.com/es/SCIEXJobs' },
        // { code: 'OTTHydroMetJobs', url: 'https://danaher.wd1.myworkdayjobs.com/wday/cxs/danaher/OTTHydroMetJobs/jobs', referer: 'https://danaher.wd1.myworkdayjobs.com/en-US/OTTHydroMetJobs' },
        // { code: 'DanaherCorporateJobs', url: 'https://danaher.wd1.myworkdayjobs.com/wday/cxs/danaher/DanaherCorporateJobs/jobs', referer: 'https://danaher.wd1.myworkdayjobs.com/en-US/DanaherCorporateJobs' },
        // { code: 'RadiometerJobs', url: 'https://danaher.wd1.myworkdayjobs.com/wday/cxs/danaher/RadiometerJobs/jobs', referer: 'https://danaher.wd1.myworkdayjobs.com/en-US/RadiometerJobs' },
        // { code: 'CepheidJobs', url: 'https://danaher.wd1.myworkdayjobs.com/wday/cxs/danaher/CepheidJobs/jobs', referer: 'https://danaher.wd1.myworkdayjobs.com/en-US/CepheidJobs' },
        // { code: 'LeicaBiosystemsJobs', url: 'https://danaher.wd1.myworkdayjobs.com/wday/cxs/danaher/LeicaBiosystemsJobs/jobs', referer: 'https://danaher.wd1.myworkdayjobs.com/en-US/LeicaBiosystemsJobs' },
        // { code: 'PallJobs', url: 'https://danaher.wd1.myworkdayjobs.com/wday/cxs/danaher/PallJobs/jobs', referer: 'https://danaher.wd1.myworkdayjobs.com/en-US/PallJobs' },
        // { code: 'IDTJobs', url: 'https://danaher.wd1.myworkdayjobs.com/wday/cxs/danaher/IDTJobs/jobs', referer: 'https://danaher.wd1.myworkdayjobs.com/en-US/IDTJobs' },
        // { code: 'McCrometerJobs', url: 'https://danaher.wd1.myworkdayjobs.com/wday/cxs/danaher/McCrometerJobs/jobs', referer: 'https://danaher.wd1.myworkdayjobs.com/en-US/McCrometerJobs' },
        { code: 'HachJobs', url: 'https://danaher.wd1.myworkdayjobs.com/wday/cxs/danaher/HachJobs/jobs', referer: 'https://danaher.wd1.myworkdayjobs.com/en-US/HachJobs' },
        // { code: 'VideojetJobs', url: 'https://danaher.wd1.myworkdayjobs.com/wday/cxs/danaher/VideojetJobs/jobs', referer: 'https://danaher.wd1.myworkdayjobs.com/en-US/VideojetJobs' },
        // { code: 'EskoJobs', url: 'https://danaher.wd1.myworkdayjobs.com/wday/cxs/danaher/EskoJobs/jobs', referer: 'https://danaher.wd1.myworkdayjobs.com/en-US/EskoJobs' },
        { code: 'BeckmanCoulterLifeSciencesJobs', url: 'https://danaher.wd1.myworkdayjobs.com/wday/cxs/danaher/BeckmanCoulterLifeSciencesJobs/jobs', referer: 'https://danaher.wd1.myworkdayjobs.com/en-US/BeckmanCoulterLifeSciencesJobs' },
        // { code: 'MolecularDevicesJobs', url: 'https://danaher.wd1.myworkdayjobs.com/wday/cxs/danaher/MolecularDevicesJobs/jobs', referer: 'https://danaher.wd1.myworkdayjobs.com/en-US/MolecularDevicesJobs' },
        // { code: 'TrojanJobs', url: 'https://danaher.wd1.myworkdayjobs.com/wday/cxs/danaher/TrojanJobs/jobs', referer: 'https://danaher.wd1.myworkdayjobs.com/en-US/TrojanJobs' },
        // { code: 'X-RiteJobs', url: 'https://danaher.wd1.myworkdayjobs.com/wday/cxs/danaher/X-RiteJobs/jobs', referer: 'https://danaher.wd1.myworkdayjobs.com/en-US/X-RiteJobs' },
        // { code: 'PhenomenexJobs', url: 'https://danaher.wd1.myworkdayjobs.com/wday/cxs/danaher/PhenomenexJobs/jobs', referer: 'https://danaher.wd1.myworkdayjobs.com/en-US/PhenomenexJobs' },
        // { code: 'LeicaMicrosystemsJobs', url: 'https://danaher.wd1.myworkdayjobs.com/wday/cxs/danaher/LeicaMicrosystemsJobs/jobs', referer: 'https://danaher.wd1.myworkdayjobs.com/en-US/LeicaMicrosystemsJobs' },
        { code: 'ChemTreatJobs', url: 'https://danaher.wd1.myworkdayjobs.com/wday/cxs/danaher/ChemTreatJobs/jobs', referer: 'https://danaher.wd1.myworkdayjobs.com/en-US/ChemTreatJobs' },
        // { code: 'AldevronJobs', url: 'https://danaher.wd1.myworkdayjobs.com/wday/cxs/danaher/AldevronJobs/jobs', referer: 'https://danaher.wd1.myworkdayjobs.com/en-US/AldevronJobs' },
        // { code: 'MammotomeJobs', url: 'https://danaher.wd1.myworkdayjobs.com/wday/cxs/danaher/MammotomeJobs/jobs', referer: 'https://danaher.wd1.myworkdayjobs.com/en-US/MammotomeJobs' },
        { code: 'HemoCueJobs', url: 'https://danaher.wd1.myworkdayjobs.com/wday/cxs/danaher/HemoCueJobs/jobs', referer: 'https://danaher.wd1.myworkdayjobs.com/en-US/HemoCueJobs' },
        // { code: 'IDBSJobs', url: 'https://danaher.wd1.myworkdayjobs.com/wday/cxs/danaher/IDBSJobs/jobs', referer: 'https://danaher.wd1.myworkdayjobs.com/en-US/IDBSJobs' },
        // { code: 'LINXJobs', url: 'https://danaher.wd1.myworkdayjobs.com/wday/cxs/danaher/LINXJobs/jobs', referer: 'https://danaher.wd1.myworkdayjobs.com/en-US/LINXJobs' }
    ];
    const jobs = [];

    // functions
    const stringToHTML = (str) => new DOMParser().parseFromString(str, 'text/html').body;
    const calculateDays = (date, cont) => {
        date.setDate(date.getDate() + cont);
        return date;
    };
    const calculateMonths = (date, month) => {
        date.setMonth(date.getMonth() + month);
        return date;
    };
    const calculateYears = (date, year) => {
        date.setMonth(date.getMonth() + (year * 12));
        return date;
    };

    for (let link of links) {
        let cont = 0, limit = 0, i = 0, offset = 0, strTotal = '';

        do {
            let data = "{\"appliedFacets\":{},\"limit\":20,\"offset\":" + offset + ",\"searchText\":\"\"}";

            $.ajax({
                url: link.url,
                type: 'POST',
                dataType: 'json',
                data: data,
                async: false,
                headers: {
                    "accept": "application/json",
                    "accept-language": "en-US",
                    "content-type": "application/json",
                    "sec-ch-ua": "\".Not/A)Brand\";v=\"99\", \"Google Chrome\";v=\"103\", \"Chromium\";v=\"103\"",
                    "sec-ch-ua-mobile": "?0",
                    "sec-ch-ua-platform": "\"Windows\"",
                    "sec-fetch-dest": "empty",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-site": "same-origin",
                    "referrer": link.referer
                },
                success: res => {
                    const list = res.jobPostings;

                    if (i === 0) {
                        i = 1;
                        strTotal = `${res.total / list.length}`.split('.');
                        limit = strTotal.length > 1 ? (parseInt(strTotal.shift()) + 1) : parseInt(strTotal.shift());
                    }

                    for (let job of list) {
                        const locations = [];
                        const job_info = {
                            title: job.title,
                            reqid: job.bulletFields.pop(),
                            url: link.referer + job.externalPath,
                            source_location: job.locationsText,
                            temp: 1
                        };

                        // calculate dates
                        let date = job.postedOn.toLowerCase().trim();
                        let num = date.replace(/[a-zA-Z+]/gm, '').trim();

                        if (num === '') {
                            job_info.dateposted_raw = new Date().toLocaleDateString('en-US');
                        } else {
                            if (new RegExp(/days|day/gm).test(date)) {
                                job_info.dateposted_raw = calculateDays(
                                    new Date(), -Math.abs(parseInt(num))
                                ).toLocaleDateString('en-US');
                            }

                            if (new RegExp(/months|month/gm).test(date)) {
                                job_info.dateposted_raw = calculateMonths(
                                    new Date(), -Math.abs(parseInt(num))
                                ).toLocaleDateString('en-US');
                            }

                            if (new RegExp(/years|year/gm).test(date)) {
                                job_info.dateposted_raw = calculateYears(
                                    new Date(), -Math.abs(parseInt(num))
                                ).toLocaleDateString('en-US');
                            }
                        }

                        $.ajax({
                            url: `https://danaher.wd1.myworkdayjobs.com/wday/cxs/danaher/${link.code}${job.externalPath}`,
                            type: 'GET',
                            dataType: 'json',
                            async: false,
                            success: resDesc => {
                                job_info.html = resDesc.jobPostingInfo.jobDescription;
                                job_info.jobdesc = stringToHTML(job_info.html).textContent.trim();

                                locations.push(resDesc.jobPostingInfo.location);
                                if (resDesc.jobPostingInfo.additionalLocations) {
                                    locations.push(...resDesc.jobPostingInfo.additionalLocations);
                                }
                            },
                            error: errDesc => msg(errDesc)
                        });

                        locations.forEach(loc => {
                            jobs.push({
                                ...job_info,
                                location: loc.split('-').map(lc => lc.trim()).reverse().join(', ')
                            });
                        });
                    }
                },
                error: err => msg(err)
            });

            offset+= 20;
            cont++;
        } while(cont < limit);

        offset = 0;
        cont = 0;
        limit = 0;
        i = 0;
        strTotal = '';
    }

    return { jobs: jobs };
})();