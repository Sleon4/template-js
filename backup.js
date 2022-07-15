(function() {
    var jobs = [];
    var out = {};
    var json;
    var totalPages;

    if (!pass_it["cont"]) {
        out["pass_it"] = {
            "cont": 0,
            "jobs": 0,
            "totalPages": totalPages
        };
    } else {
        out["pass_it"] = pass_it;
    }

    // var data = "pr=" + out["pass_it"].cont + "&in_iframe=1&schemaId=&o=";

    $.ajax({
        url: 'https://careers-pennymac.icims.com/jobs/search',
        headers: {
            "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "accept-language": "en-US,en-GB;q=0.9,en;q=0.8,es-ES;q=0.7,es;q=0.6",
            "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"101\", \"Google Chrome\";v=\"101\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-fetch-dest": "iframe",
            "sec-fetch-mode": "navigate",
            "sec-fetch-site": "same-origin",
            "sec-fetch-user": "?1",
            "upgrade-insecure-requests": "1"
        },
        type: 'GET',
        data: "pr=" + out["pass_it"].cont + "&in_iframe=1&schemaId=&o=",
        async: false,
        success: function(result) {
            msg("Success!");
            json = result;
            var js_string = json;
            var htmlObject = document.createElement("div");
            htmlObject.innerHTML = js_string
            var html_jobs = htmlObject.querySelectorAll('div.row');
            totalPages = Number(htmlObject.querySelector('h2.iCIMS_SubHeader.iCIMS_SubHeader_Jobs').innerText.split(" of ").pop().trim());

            for (var x in html_jobs) {
                if (typeof html_jobs[x] == "function") continue;
                if (typeof html_jobs[x] == "number") continue;
                var job = {};
                var elem = html_jobs[x];

                if (elem.querySelector("div.title") !== null) {
                    const tracker = '&mode=job&iis=Neuvoo';
                    job.title = elem.querySelector("div.title h2").textContent.trim();
                    job.url = elem.querySelector("div.title a").href.trim().concat(tracker);
                    job.temp = "May-2022";

                    var info = elem.querySelector('div[role="list"]');
                    for (const a of info.querySelectorAll('dl')) {
                        if (a.textContent.indexOf('Position Type') > -1) {
                            job.source_jobtype = a.querySelector('dd.iCIMS_JobHeaderData').textContent.trim();
                        }
                        if (a.textContent.indexOf('Requisition ID') > -1) {
                            job.reqid = a.querySelector('dd.iCIMS_JobHeaderData').textContent.trim();
                        }
                        if (a.textContent.indexOf('Years of Experience') > -1) {
                            job.experience_required = a.querySelector('dd.iCIMS_JobHeaderData').textContent.trim();
                        }

                    }

                    var full_html = getDescription(job.url);
                    var div = document.createElement("div");
                    div.innerHTML = full_html
                    var desc = div;
                    var jobdata = div.querySelector("div.iCIMS_JobContent");
                    for (const a of jobdata.querySelectorAll('div.iCIMS_JobOptions, div[id="jobSocialOptions"], div.iCIMS_PageFooter, div.iCIMS_Logo, div#popupOverlay, div.iCIMS_JobOptions, div.iCIMS_JobsTable, a, button, script')) { // Borra todos los que encuentre
                        if (a) {
                            a.remove();
                        }
                    }

                    job.html = jobdata.innerHTML.trim();
                    job.html = job.html.split("Need help finding the right job?").shift();
                    job.html = cleanHTML(job.html);
                    var tmp = document.createElement('div');
                    tmp.innerHTML = job.html;
                    job.jobdesc = tmp.textContent.trim();
                    job.jobdesc = cleanHTML(job.jobdesc);

                    job.location = elem.querySelector('div.col-xs-6.header.left span:not(.sr-only.field-label)').innerText.trim();
                    job.source_location = job.location = elem.querySelector('div.col-xs-6.header.left span:not(.sr-only.field-label)').innerText.trim();

                    let multilocation = "|";
                    if (job.location.indexOf("|") > -1) {
                        var locs = job.location.split('|');
                        for (var w in locs) {
                            var jobw = {
                                ...job
                            };
                            jobw.location = locs[w];
                            jobw.location = jobw.location.trim().split('-').reverse().join(", ");

                            jobs.push(jobw);
                        }
                    } else {
                        job.location = job.location.trim().split('-').reverse().join(", ");
                        jobs.push(job);

                    }
                }
            }

            out["pass_it"].cont++;
            //msg(out["pass_it"].cont);
        },
        error: function(error) {
            msg(error);
        }
    });

    out["jobs"] = jobs;
    out["pass_it"]["jobs"] += jobs.length;
    out["pass_it"]["totalPages"] = totalPages;

    return out;
})();

function getDescription(url) {
    var xhrrequest = new XMLHttpRequest();
    xhrrequest.open("GET", url, false); //URL del ajax que trae la información del job
    var response = "";
    xhrrequest.onreadystatechange = function() {
        if (xhrrequest.readyState == 4 && xhrrequest.status == 200) {
            //console.log(xhrrequest.responseText);
            response = xhrrequest.responseText;
        }
    };
    xhrrequest.send();
    return response;
}

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



/*(function() {
  var out = {};
  var iframeDocument = document.querySelector("#icims_content_iframe").contentWindow.document;
  var html_jobs = iframeDocument.querySelectorAll("div.row");
  var jobs = [];for(var x = 1; x < html_jobs.length; x++){ //
    if(typeof html_jobs[x] =="function") continue;
    if(typeof html_jobs[x] =="number") continue;
    var job = {};
    var elem = html_jobs[x];
    job.title = elem.querySelector("div.col-xs-12.title > a > h2").textContent.replace('- Remote','').trim();
    job.url = elem.querySelector("div.col-xs-12.title > a").href.trim() + "?mode=job&iis=Neuvoo";
    job.source_location = elem.querySelector("div.col-xs-6.header.left > span:nth-child(2)").textContent;
    job.location = job.source_location.replace('...','Westlake Village, California').trim();
    job.reqid = elem.querySelector("div.col-xs-12.additionalFields > div > dl:nth-child(1) > dd > span").textContent.trim();
    job.source_jobtype = elem.querySelector("div.col-xs-12.additionalFields > div > dl:nth-child(2) > dd > span").textContent.trim();
    //job.dateposted_raw = elem.querySelector("div.col-xs-6.header.right > span:nth-child(2)").title.split(" ").shift();
    //job.logo = elem.querySelector("").getAttribute("src").trim();
    //job.source_apply_email = elem.querySelector("").textContent.trim();
    //job.source_empname = elem.querySelector("").textContent.trim();
    //job.source_jobtype = elem.querySelector("").textContent.trim();
    //job.source_salary = elem.querySelector("").textContent.trim();
    job.temp = 0120202;
    if(job.location.indexOf("|")!=-1){
      var locs = job.location.split("|");
      for(var y in locs){
        var jobx = {};
        jobx.title = job.title;
        jobx.url = job.url;
        jobx.location = locs[y].split("-").reverse().join(", ").replace('...','Westlake Village, California').trim();
        if(jobx.location == ''){
          jobx.location = 'Westlake Village, California';
        }
        jobx.reqid = job.reqid;
        jobx.dateposted_raw = job.dateposted_raw;
        jobx.temp = job.temp;
        jobs.push(jobx);
      }
    }else{
      job.location = job.location.split("-").reverse().join(", ").replace('Remote,','').replace('IL, US','Illinois, US').replace('NV, US','Nevada, US').replace('NV , US','Nevada, US').replace('...','Westlake Village, California');

      jobs.push(job);
    }
  }

  out["jobs"]= jobs;
  return out;
})();

*/