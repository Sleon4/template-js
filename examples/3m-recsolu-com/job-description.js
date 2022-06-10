(function () {
    //May-2021
    var out = {};
    var job = {};
    var selector = "section.job-details__description";
    var full_html = document.querySelector(selector);
    //var job = pass_it["job"];
    /*  // VALIDAR UN SELECTOR
    var jobtype = document.querySelector('selectorDelJobtype');
    if(jobtype !== null){
     job.source_jobtype = jobtype.textContent.trim();
    }
    */
    //--------------------------JOB-INFO ------------------------------------//
    //job.location       = document.querySelector('').textContent.trim();
    //job.source_jobtype = document.querySelector('').textContent.trim();
    //let datePosted     = document.querySelector('').textContent.trim();
    //job.dateposted_raw = getDateFormat(datePosted,"/",1,0,2);
    //---------------------------------------------------------------------//
    /*if(cleanHTML(full_html.textContent).trim().length < 200){
      job.flag_active =  0;
      job.html        = "";
      job.jobdesc     = "";
    }else{*/
    // To Remove selectors
    for (const a of full_html.querySelectorAll(
        "a, img, script, style, button"
    )) {
        if (a) {
            a.remove();
        }
    }
    /*
    for (const a of full_html.querySelectorAll('tr')) {
        if (a.textContent.search(//)>-1){
              //job.location = a.textContent.trim();
              //job.source_jobtype = a.querySelector('').textContent.trim();
              //a.remove();
        }
    }
     */
    job.html = full_html.innerHTML.trim();
    //job.html = removeTextBefore(job.html, "", false);
    //job.html = removeTextBefore(job.html, "", false);
    //job.html = job.html.split("").shift();
    //job.html = job.html.split("").shift();
    //job.html = job.html.split("").shift();
    //job.html = job.html.split("").shift();
    //job.html = job.html.replace("","");
    //job.html = job.html.replace("","");
    job.html = cleanHTML(job.html);
    var tmp = document.createElement("div");
    tmp.innerHTML = job.html;
    job.jobdesc = tmp.textContent.trim();
    job.jobdesc = cleanHTML(job.jobdesc);
    //}
    out["job"] = job;
    return out;
})();

function removeTextBefore(html, text, flag) {
    var newHtml = html;
    if (newHtml.indexOf(text) > -1) {
        newHtml = newHtml.split(text).pop();
        if (!flag) {
            newHtml = text + " " + newHtml;
        }
    }
    return newHtml;
}

function getDateFormat(dateRaw, cut, dayPosition, monthPosition, yearPosition) {
    dateRaw = dateRaw.replace(/\,/g, "");
    if (dateRaw.indexOf(".") > -1) {
        var periods = dateRaw.match(/\./g).length;
        if (periods > 1) {
            dateRaw = dateRaw.replace(/\./g, "").trim();
        }
    }
    let day = dateRaw.split(cut)[dayPosition].trim(),
        month = dateRaw.split(cut)[monthPosition].trim(),
        year = dateRaw.split(cut)[yearPosition].trim();
    day = day.replace(/rd|st|th/i, "").trim();
    if (day < 10 && day.length < 2) {
        day = "0" + day;
    }
    if (year.length == 2) {
        year = "20" + year;
    }
    if (dateRaw.search(/[a-z]/gi) > -1) {
        //English, Dutch and French
        if (month.search(/jan/i) > -1) {
            month = "01";
        }
        if (month.search(/feb|fév/i) > -1) {
            month = "02";
        }
        if (month.search(/mar|maar/i) > -1) {
            month = "03";
        }
        if (month.search(/apr|avr/i) > -1) {
            month = "04";
        }
        if (month.search(/may|mai|mei/i) > -1) {
            month = "05";
        }
        if (month.search(/jun|juin/i) > -1) {
            month = "06";
        }
        if (month.search(/jul|juil/i) > -1) {
            month = "07";
        }
        if (month.search(/aug|août/i) > -1) {
            month = "08";
        }
        if (month.search(/sep/i) > -1) {
            month = "09";
        }
        if (month.search(/oct|okt/i) > -1) {
            month = "10";
        }
        if (month.search(/nov/i) > -1) {
            month = "11";
        }
        if (month.search(/dec|déc/i) > -1) {
            month = "12";
        }
    }
    var datum = month + "/" + day + "/" + year;
    return datum;
}