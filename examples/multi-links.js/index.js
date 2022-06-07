//EXTRACT
(function() {
    var out = {};
     var html_jobs = document.querySelectorAll("section#block-system-main div.views-row");
     var jobs = [];
 
     for(var x in html_jobs) {
         if(typeof html_jobs[x] =="function") continue;
         if(typeof html_jobs[x] =="number") continue;
       var job = {};
       var elem = html_jobs[x];
     
       job.title = elem.querySelector("a").textContent.trim();
       job.url = elem.querySelector("a").href.trim();
       
         //job.location = elem.querySelector("").textContent.trim();
       //job.dateposted_raw = elem.querySelector("").textContent.trim();
       //job.logo = elem.querySelector("").getAttribute("src").trim();
       //job.source_apply_email = elem.querySelector("").textContent.trim();
       //job.source_empname = elem.querySelector("").textContent.trim();
       //job.source_jobtype = elem.querySelector("").textContent.trim();
       //job.source_salary = elem.querySelector("").textContent.trim();
          job.temp = 1;
       jobs.push(job);
     } 
 
   out["jobs"]= jobs;
     return out;
})();

// ----------------------------------------------------------------------------------------------------------------------

// PAGINATION
(function () {
    var out = {};
    if (typeof pass_it == "undefined") pass_it = {};
    if (!pass_it["urls"]) {
        out["pass_it"] = {
            "urls": ["https://emealjobs.nttdata.com/en/offers-morocco","https://emealjobs.nttdata.com/es/ofertas-espana"]                //Colocar las urls
        };
    } else {
        out["pass_it"] = pass_it;
    }
    if (out["pass_it"]["urls"].length > 0) {
        var url = out["pass_it"].urls.shift();
        //msg(url);
        window.location.href = url;
        out["has_next_page"] = true;
    } else {
        out["has_next_page"] = false;
    }
    out.wait = true;  // COLOCAR EL SELECTOR A ESPERAR
    return out;
})();

// ----------------------------------------------------------------------------------------------------------------------

// BEFORE EXTRACT
(function() {
    var out = {};
    // out.waitFor = "ul#listing>li.lister__item";
    //out.wait = true;
    //out.pic = true;
    //out.html = true;
    return out;
})();