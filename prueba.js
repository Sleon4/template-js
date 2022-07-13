// https://www.talent.com/private/tools/content/scraper/spiderCodeTool.php?scanid=230248

// (() => {
//     const jobs = [];
//     let cont = 0, limit = 0, strTotal = "", i = 0;
//     const data = { "limit": 20, "offset": cont, "searchText": "", "appliedFacets": {} };

//     msg(
//         window.location.href
//         // window.location.origin + '/wday/cxs/' + window.location.host.split('.').shift() + window.location.pathname + '/jobs'
//     )

//     // $.ajax({
//     //     url: 'https://rb.wd5.myworkdayjobs.com/wday/cxs/rb/FRS/jobs',
//     //     headers: {
//     //         "accept": "application/json",
//     //         "accept-language": "en-US",
//     //         "content-type": "application/json",
//     //         "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"92\", \"Opera GX\";v=\"78\"",
//     //         "sec-ch-ua-mobile": "?0",
//     //         "sec-fetch-dest": "empty",
//     //         "sec-fetch-mode": "cors",
//     //         "sec-fetch-site": "same-origin"
//     //     },
//     //     type: 'POST',
//     //     dataType: 'json',
//     //     data: JSON.stringify(data),
//     //     async: false,
//     //     success: res => msg(res),
//     //     error: err => msg(err)
//     // });

//     return { jobs: jobs };
// });

// -------------------------------------------------------------------------------------------------------------------

(function() {
    var jobs = [];
    var out = {};
    out["pass_it"] = pass_it;
    var counter = 1;
    var limit = 0;
    var json;
    var jsonDesc;
    var data = {
        "limit": 20,
        "offset": out.pass_it.offSet,
        "searchText": "",
        "appliedFacets": {}
    };

    let all_url = window.location.origin + '/wday/cxs/' + window.location.host.split('.').shift() + window.location.pathname + '/jobs';

    msg(all_url)

    $.ajax({
        url: all_url,
        headers: {
            "accept": "application/json",
            "accept-language": "en-US",
            "content-type": "application/json",
            "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"92\", \"Opera GX\";v=\"78\"",
            "sec-ch-ua-mobile": "?0",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin"
        },
        type: 'POST',
        data: JSON.stringify(data),
        dataType: "json",
        async: false,
        success: function(result) {
            if (out.pass_it.offSet == 0) {
                out.pass_it.limit = result.total;
            }
            if (out.pass_it.offSet < 2000) {
                json = result.jobPostings;
                for (var elem of json) {
                    var job = {};
                    job.reqid = elem.bulletFields[0];
                    job.title = elem.title;
                    job.source_location = elem.bulletFields[1];
                    job.url = window.location.href + elem.externalPath;
                    //msg('Title: ' + job.title + '\nURL: ' + job.url);
                    if (elem.postedOn) {
                        job.dateposted_raw = elem.postedOn.replace('+', '');
                        job.dateposted_raw = dateAgo(job.dateposted_raw, " ", 1, 2);
                    }
                    job.temp = 96;
                    ///////////////////////////////

                    let url_desc = window.location.origin + '/wday/cxs/' + window.location.host.split('.').shift() + window.location.pathname + elem.externalPath;
                    $.ajax({
                        url: url_desc,
                        headers: {
                            "accept": "application/json",
                            "accept-language": "en-US",
                            "content-type": "application/x-www-form-urlencoded",
                            "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"92\", \"Opera GX\";v=\"78\"",
                            "sec-ch-ua-mobile": "?0",
                            "sec-fetch-dest": "empty",
                            "sec-fetch-mode": "cors",
                            "sec-fetch-site": "same-origin"
                        },
                        type: 'GET',
                        dataType: "json",
                        async: false,
                        success: function(result) {
                            jsonDesc = result.jobPostingInfo;
                            if (elem.postedOn) {
                                job.dateposted_raw = jsonDesc.postedOn.replace('+', '');
                                job.dateposted_raw = dateAgo(job.dateposted_raw, " ", 1, 2);
                            }
                            job.source_jobtype = jsonDesc.timeType;
                            var full_html = document.createElement("div");
                            full_html.innerHTML = jsonDesc.jobDescription;
                            if (full_html) {
                                for (const a of full_html.querySelectorAll('p, span, li')) {
                                    if (a.textContent.search(/@|http|www./ig) > -1) {
                                        a.remove();
                                    }
                                }
                                var remove_selectors = ['a', 'script', 'i', 'img', 'style', 'button', 'figure', 'noscript', 'svg', 'form', 'input', 'iframe', 'link'];
                                if (remove_selectors.length > 0) {
                                    remove_selectors.forEach(remove_selector => {
                                        for (const a of full_html.querySelectorAll(remove_selector)) {
                                            a.remove();
                                        }
                                    });
                                }
                                if (typeof cleanHTML == "undefined") cleanHTML = function(x) {
                                    return x
                                };
                                if (typeof msg == "undefined") msg = console.log;
                                job.html = full_html.innerHTML.trim();
                                //job.html = removeTextBefore(job.html, '', false);
                                //job.html = removeTextAfter(job.html, '', true);
                                job.html = cleanHTML(job.html);
                                var tmp = document.createElement('div');
                                tmp.innerHTML = job.html;
                                job.jobdesc = tmp.textContent.trim();
                                job.jobdesc = cleanHTML(job.jobdesc);

                            }
                            if (jsonDesc.additionalLocations) {
                                //var countReqId = 0;
                                var jobx = {};
                                jobx = {
                                    ...job
                                }
                                jobx.location = jsonDesc.jobRequisitionLocation.descriptor.trim();
                                jobs.push(jobx);
                                for (let auxLoc of jsonDesc.additionalLocations) {
                                    var jobx = {};
                                    jobx = {
                                        ...job
                                    }
                                    jobx.reqid = job.reqid;
                                    jobx.source_location = auxLoc.trim();
                                    jobx.location = auxLoc.split("-").pop().trim();
                                    jobs.push(jobx);
                                    //countReqId += 1;
                                }
                            } else {
                                job.source_location = jsonDesc.jobRequisitionLocation.descriptor.trim();
                                job.location = jsonDesc.jobRequisitionLocation.descriptor.split("-").pop().trim();
                                jobs.push(job);
                            }
                        },
                        error: function(error) {
                            msg(error);
                        }
                    });
                    ///////////////////////////////
                }
                counter = counter + 1;
            }
            /*else {
                     var job = {};
                     job.title = 'Ghost job, limit reached.';
                     jobs.push(job);
                     out.pass_it.offSet = out.pass_it.limit;
                   }*/
        },
        error: function(error) {
            msg(error);
        }
    });
    out["jobs"] = jobs;
    return out;
})();

function dateAgo(text, char_separator, position_value_DWMY, position_word_DWMY) {
    var numberDWMY = parseInt(text.trim().split(char_separator)[position_value_DWMY], 10); //obtengo el valor numerico del dia, sem, mes o año
    if (typeof text.split(char_separator)[position_word_DWMY] !== 'undefined') {
        var dayWeekMonthYear = text.split(char_separator)[position_word_DWMY]
    } else {
        var dayWeekMonthYear = text.split(char_separator)[text.split(char_separator).length - 1]
    };
    var date_Now = new Date(); //declaro un objeto tipo fecha
    var nDays = 0;
    if (dayWeekMonthYear.toUpperCase().search(/TODAY|NOW|HOUR/g) > -1) {
        nDays = 0;
    }
    if (dayWeekMonthYear.toUpperCase().indexOf('YESTERDAY') > -1) {
        nDays = 1;
    }
    if (dayWeekMonthYear.toUpperCase().indexOf('DAYS') > -1) {
        nDays = numberDWMY;
    }
    if (dayWeekMonthYear.toUpperCase().indexOf('WEEK') > -1) {
        nDays = numberDWMY * 7;
    }
    if (dayWeekMonthYear.toUpperCase().indexOf('MONTH') > -1) {
        nDays = numberDWMY * 30;
    }
    if (dayWeekMonthYear.toUpperCase().indexOf('YEAR') > -1) {
        nDays = numberDWMY * 365;
    }
    var dateJob = date_Now.getDate() - nDays; //resto dias de publicacion a la fecha actual
    var get_date = date_Now.setDate(dateJob); //obtengo la cantidad de mseg. desde 1 de Enero de 1970
    var datePosted = new Date(get_date); //obtengo la fecha de publicacion.
    //Obtengo dia mes y Año
    var dd = datePosted.getDate(); //devuelve el numero del dia del mes.
    var mm = datePosted.getMonth() + 1; //getMonth devuelve valores de 0 a 11, se suma uno para llevarlo de 1 a 12.
    var yyyy = datePosted.getFullYear().toString(); //devuelve el año.
    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    dateJob = mm + '/' + dd + '/' + yyyy;
    return dateJob;
}

function removeTextBefore(html, text, flag) {
    var newHtml = html;
    if (newHtml.search(text) > -1) {
        newHtml = newHtml.split(text).pop();
        if (!flag) {
            newHtml = "<h3>" + text + "</h3>" + newHtml;
        }
    }
    return newHtml;
}

function removeTextAfter(html, text, flag) {
    var newHtml = html;
    if (newHtml.search(text) > -1) {
        newHtml = newHtml.split(text).shift();
        if (!flag) {
            newHtml = newHtml + "<p>" + text + "</p>";
        }
    }
    return newHtml;
}