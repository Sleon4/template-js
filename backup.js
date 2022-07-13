// (() => {
//     const jobs = [];
//     let cont = 1, limit = 0, i = 0;

//     // functions
//     const stringToHTML = (str) => new DOMParser().parseFromString(str, 'text/html').body;
//     const getURL = (url) => new URLSearchParams(url.split('?').pop());
//     const pushData = (job) => {
//         let location = job.querySelector('div.job_listing-about > div.job_listing-location > a.google_map_link').textContent.trim();

//         jobs.push({
//             title: job.getAttribute('data-title').trim(),
//             url: job.getAttribute('data-href').trim(),
//             reqid: getURL(job.getAttribute('data-href').trim()).get('p'),
//             source_location: location,
//             location: location,
//             temp: 1
//         });
//     };

//     const data = {
//         lang: '',
//         search_keywords: '',
//         search_location: '',
//         search_categories: [],
//         filter_job_type: ['cdd', 'cdi', 'interim', ''],
//         per_page: 10,
//         orderby: 'featured',
//         order: 'DESC',
//         page: cont,
//         show_pagination: false,
//         form_data: 'search_keywords=&search_region=0&search_categories%5B%5D=&filter_job_type%5B%5D=cdd&filter_job_type%5B%5D=cdi&filter_job_type%5B%5D=interim&filter_job_type%5B%5D=',
//     };

//     do {
//         data.page = cont;

//         $.ajax({
//             url: 'https://www.3ssante.com/jm-ajax/get_listings/',
//             type: 'POST',
//             dataType: 'json',
//             data: JSON.stringify(data),
//             async: false,
//             headers: {
//                 "accept": "*/*",
//                 "accept-language": "en,es-419;q=0.9,es;q=0.8,en-US;q=0.7",
//                 "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
//                 "sec-ch-ua": "\".Not/A)Brand\";v=\"99\", \"Google Chrome\";v=\"103\", \"Chromium\";v=\"103\"",
//                 "sec-ch-ua-mobile": "?0",
//                 "sec-ch-ua-platform": "\"Windows\"",
//                 "sec-fetch-dest": "empty",
//                 "sec-fetch-mode": "cors",
//                 "sec-fetch-site": "same-origin",
//                 "x-requested-with": "XMLHttpRequest"
//             },
//             success: res => {
//                 if (i === 0) {
//                     i = 1;
//                     // limit = res.max_num_pages;
//                     limit = 1
//                 }

//                 stringToHTML(res.html).querySelectorAll('li.job_listing').forEach(job => pushData(job));
//             },
//             error: err => msg(err)
//         });

//         msg(cont);

//         cont++;
//     } while(cont <= limit);

//     return { jobs: jobs };
// })();

/// ----------------------------------------------------------------------------------------------------------------------------------------

// extract
(function () {
    const out = {};
    const jobs = [];
    let json;

    if (!pass_it.count && !pass_it.urls) {
        out.pass_it = {
            urls: [
                'https://danaher.wd1.myworkdayjobs.com/es/BeckmanCoulterDiagnosticsJobs', // Beckman Coulter
                'https://danaher.wd1.myworkdayjobs.com/es/CytivaJobsPP', // Cytiva
                'https://danaher.wd1.myworkdayjobs.com/es/SCIEXJobs', // SCIEX
                'https://danaher.wd1.myworkdayjobs.com/en-US/OTTHydroMetJobs', // Aquatic Informatics
                'https://danaher.wd1.myworkdayjobs.com/en-US/DanaherCorporateJobs', // Laetus GmbH
                'https://danaher.wd1.myworkdayjobs.com/en-US/RadiometerJobs', // Radiometer
                'https://danaher.wd1.myworkdayjobs.com/en-US/CepheidJobs', // Cepheid
                'https://danaher.wd1.myworkdayjobs.com/en-US/LeicaBiosystemsJobs', // Leica Biosystems
                'https://danaher.wd1.myworkdayjobs.com/en-US/PallJobs', // Pall
                'https://danaher.wd1.myworkdayjobs.com/en-US/IDTJobs', // Integrated DNA Technologies (IDT)
                'https://danaher.wd1.myworkdayjobs.com/en-US/McCrometerJobs', // McCrometer
                'https://danaher.wd1.myworkdayjobs.com/en-US/HachJobs', // Hach
                'https://danaher.wd1.myworkdayjobs.com/en-US/VideojetJobs', // Videojet
                'https://danaher.wd1.myworkdayjobs.com/en-US/EskoJobs', // Esko
                'https://danaher.wd1.myworkdayjobs.com/en-US/BeckmanCoulterLifeSciencesJobs', // Beckman Coulter Life Sciences
                'https://danaher.wd1.myworkdayjobs.com/en-US/MolecularDevicesJobs', // Molecular Devices
                'https://danaher.wd1.myworkdayjobs.com/en-US/TrojanJobs', // Trojan Technologies
                'https://danaher.wd1.myworkdayjobs.com/en-US/X-RiteJobs', // X-rite Pantone
                'https://danaher.wd1.myworkdayjobs.com/en-US/PhenomenexJobs', // Phenomenex
                'https://danaher.wd1.myworkdayjobs.com/en-US/LeicaMicrosystemsJobs', // Leica Microsystems
                'https://danaher.wd1.myworkdayjobs.com/en-US/ChemTreatJobs', // ChemTreat
                'https://danaher.wd1.myworkdayjobs.com/en-US/AldevronJobs', // Aldevron
                'https://danaher.wd1.myworkdayjobs.com/en-US/MammotomeJobs', // Mammotome
                'https://danaher.wd1.myworkdayjobs.com/en-US/HemoCueJobs', // HemoCue
                'https://danaher.wd1.myworkdayjobs.com/en-US/IDBSJobs', // IDBS
                'https://danaher.wd1.myworkdayjobs.com/en-US/LINXJobs', // LINX
            ],
            urlPaths: [
                'BeckmanCoulterDiagnosticsJobs' ,
                'CytivaJobsPP',
                'SCIEXJobs',
                'OTTHydroMetJobs',
                'DanaherCorporateJobs',
                'RadiometerJobs',
                'CepheidJobs',
                'LeicaBiosystemsJobs',
                'PallJobs',
                'IDTJobs',
                'McCrometerJobs',
                'HachJobs',
                'VideojetJobs',
                'EskoJobs',
                'BeckmanCoulterLifeSciencesJobs',
                'MolecularDevicesJobs',
                'TrojanJobs',
                'X-RiteJobs',
                'PhenomenexJobs',
                'LeicaMicrosystemsJobs',
                'ChemTreatJobs',
                'AldevronJobs',
                'MammotomeJobs',
                'HemoCueJobs',
                'IDBSJobs',
                'LINXJobs'
            ],
            currentUrl: 0,
            count: 0,
            limit: 0,
            total: 0,
            try: 0,
        };
    } else {
        out.pass_it = pass_it;
    }

    let feedType = '';
    feedType = out.pass_it.urlPaths[out.pass_it.currentUrl];

    let urlRequest = `${window.location.origin}/wday/cxs/` +
        `${window.location.host.split('.').shift()}/${feedType}/jobs`;

    // msg(urlRequest)

    const data = {
        limit: 20,
        offset: out.pass_it.count,
        searchText: '',
        appliedFacets: {},
    };

    $.ajax({
        url: urlRequest,
        headers: {
            'accept': 'application/json',
            'content-type': 'application/json',
        },
        type: 'POST',
        data: JSON.stringify(data),
        dataType: 'json',
        async: false,
        success: result => {
            json = result.jobPostings;
            if (out.pass_it.count === 0) out.pass_it.limit = result.total;
            out.pass_it.total += json.length;

            for (let x in json) {
                const job = {};
                const elem = json[x];

                job.title = elem.title;

                job.url = `${window.location.origin}/en-US/${feedType}${elem.externalPath}`;
                job.reqid = elem.bulletFields[0];
                job.source_location = elem.locationsText;
                job.location = elem.locationsText;

                if (!job.location) job.location = 'Washington, District of Columbia';

                if (elem.postedOn) job.dateposted_raw = dateAgo(elem.postedOn, ' ', 1, 2);

                job.temp = 17778;

                if (job.location.indexOf('Locations') > -1) {
                    const jobx = { ...job };
                    const urlJsonGet =
                        `${window.location.origin}/wday/cxs/` +
                        `${window.location.host.split('.').shift()}/${feedType}${
                            elem.externalPath
                        }`;

                    const json_desc = JSON.parse(getDescription(urlJsonGet));
                    const loc = json_desc.jobPostingInfo.additionalLocations;

                    loc.push(json_desc.jobPostingInfo.location);

                    jobx.source_location = [...loc].map(item => item).join('; ');

                    for (let i in loc) {
                        jobx.location = loc[i].split('-').reverse().join(', ');
                        if (jobx.location.includes('Remote')) jobx.location = 'Washington, District of Columbia';

                        jobs.push(jobx);
                    }
                } else {
                    job.location = job.location.split('-').reverse().join(', ');
                    if (job.location.includes('Remote')) job.location = 'Washington, District of Columbia';
                    jobs.push(job);
                }
            }
            msg(`\x1B[32m Current page: ${out.pass_it.count} | Limit: ${out.pass_it.limit}`);

            out.pass_it.try++;

            if (out.pass_it.try >= 3) {
                const ghostJob = { title: 'Repeat!' };
                jobs.push(ghostJob);
            }

            msg(`\x1B[35m Try: ${out.pass_it.try}`);
        },
        error: error => msg(error),
    });

    out.jobs = jobs;
    return out;
})();

function dateAgo(text, cut, value, word) {
    let dayWeekMonthYear;
    let numberDWMY = parseInt(text.trim().split(cut)[value], 10);

    if (typeof text.split(cut)[word] !== 'undefined') {
        dayWeekMonthYear = text.split(cut)[word].toUpperCase();
    } else {
        dayWeekMonthYear = text.split(cut)[text.split(cut).length - 1].toUpperCase();
    }

    let date_Now = new Date();
    let nDays = 0;

    if (dayWeekMonthYear.search(/TODAY|HOUR|HOURS/g) > -1) nDays = 0;
    if (dayWeekMonthYear.includes('YESTERDAY')) nDays = 1;
    if (dayWeekMonthYear.includes('DAYS')) nDays = numberDWMY;
    if (dayWeekMonthYear.includes('WEEK')) nDays = numberDWMY * 7;
    if (dayWeekMonthYear.includes('MONTH')) nDays = numberDWMY * 30;
    if (dayWeekMonthYear.includes('YEAR')) nDays = numberDWMY * 365;

    let dateJob = date_Now.getDate() - nDays;
    let get_date = date_Now.setDate(dateJob);
    let datePosted = new Date(get_date);
    let dd = datePosted.getDate();
    let mm = datePosted.getMonth() + 1;
    let yyyy = datePosted.getFullYear().toString();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;
    dateJob = mm + '/' + dd + '/' + yyyy;
    return dateJob;
}

function getDescription(url) {
    let res = '';
    let req = new XMLHttpRequest();

    req.open('GET', url, false);
    req.onreadystatechange = () => {
        if (req.readyState === 4 && req.status === 200)
        res = req.responseText;
    };
    req.send();
    return res;
}

// pagination
(function () {
    const out = {};
    out.pass_it = pass_it;
    out.pass_it.count += 20;

    if (out.pass_it.total > out.pass_it.limit || out.pass_it.try >= 3) {
        out.pass_it.currentUrl++;
        out.pass_it.count = 0;
        out.pass_it.total = 0;

        if (out.pass_it.currentUrl < out.pass_it.urls.length) {
            msg(`\x1B[32m New URL!!!`);
            window.location.href = out.pass_it.urls[out.pass_it.currentUrl];
            out.has_next_page = true;
            out.pass_it.try = 0;
        } else {
            out.has_next_page = false;
        }
    } else {
        out.has_next_page = true;
        out.pass_it.try = 0;
    }

    return out;
})();

// before jobdescription
(function() {
	const out = {};
  	out.waitFor = '[data-automation-id="jobPostingDescription"]';
    return out;
})();

// jobdescription
(function () {
	const out = {};
	const job = {};
	const selector = '[data-automation-id="jobPostingDescription"]';
	const remove_selectors = [
		'a',
		'img',
		'video',
		'button',
		'input',
		'style',
		'javascript',
		'script',
	];

	if (typeof cleanHTML === 'undefined') cleanHTML = x => x;
	if (typeof msg === 'undefined') msg = console.log;

	const selector_type =
		'[data-automation-id="job-posting-details"] [data-automation-id="time"]';
	if (document.querySelector(selector_type)) {
		job.source_jobtype = document.querySelector(selector_type)
			.textContent.replace('time type', '').trim();
	}

	const full_html = document.querySelector(selector);
	// Remove something from the jobdatata
	if (remove_selectors.length > 0) {
		remove_selectors.forEach(elem => {
			if (full_html.querySelector(elem)) {
				let items = full_html.querySelectorAll(elem);
				for (const selector of items) selector.remove();
			}
		});
	}

	job.html = full_html.innerHTML.trim();
	job.html = cleanHTML(job.html);

	let temp = document.createElement('div');
	temp.innerHTML = job.html;

	job.jobdesc = temp.textContent.trim();
	job.jobdesc = cleanHTML(job.jobdesc);

	const clean_strings = [];

	if (clean_strings.length > 0) {
		clean_strings.forEach(elem => {
			job.html = job.html.replace(elem, '');
		});
	}

	job.html = removeTextBefore(job.html, "Job Summary:", true);
	job.html = removeTextBefore(job.html, "What You Can Expect:", true);
	job.html = removeTextBefore(job.html, "About this role", true);
	job.html = removeTextBefore(job.html, "Role description", true);
	job.html = job.html.split("Danaher Corporation and all Danaher Companies are equal opportunity").shift();
	job.html = removeTextAfter(job.html, 'EQUAL OPPORTUNITY EMPLOYER', true);
	job.html = removeTextAfter(job.html, 'Equal Opportunity Employer', true);
	job.html = job.html.split("Danaher Corporation and all Danaher Companies are committed to equal").shift();
	job.html = job.html.split("Want to know more").shift();
	job.html = job.html.replace("Sr. Informatics Technical Specialist", "");
	job.html = removeTextAfter(job.html, 'Learn more about', true);
	job.html = removeTextAfter(job.html, 'Danaher Profile', true);
	job.html = removeTextAfter(job.html, 'Danaher is committed to a diverse and inclusive culture', true);
	job.html = removeTextAfter(job.html, 'Time Type:', true);

	out.job = job;
	return out;
})();

function removeTextBefore(html, text, flag) {
	let keyWord;
	let newHtml = html;

	if (newHtml.indexOf(text) > -1) keyWord = text;
	if (newHtml.indexOf(text) > -1) newHtml = newHtml.split(text).pop();
	if (!flag)
		if (keyWord) newHtml = '<h3>' + keyWord + '</h3>' + newHtml;
	return newHtml;
}

function removeTextAfter(html, text, flag) {
	let newHtml = html;
	if (newHtml.indexOf(text) > -1) newHtml = newHtml.split(text).shift();
	if (!flag) newHtml = newHtml + '<p>' + text + '</p>';
	return newHtml;
}