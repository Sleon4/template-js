// EXTRACT
(function() {
    var out = {};
     var html_jobs = document.querySelectorAll("div.view-content.col-sm-9 > div.views-row");
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
    var next_page_selector = "li.next a";
    var clickable_elem = document.querySelector(next_page_selector);

    if (typeof pass_it == "undefined") pass_it = {};
    if (!pass_it["urls"]) {
        out["pass_it"] = {
            "urls": [
              "https://emealjobs.nttdata.com/en/offers-morocco",
              "https://emealjobs.nttdata.com/es/ofertas-espana"
            ]
        };
    } else {
        out["pass_it"] = pass_it;
    }

    //stop condition
    if (!clickable_elem) {
        if (out["pass_it"]["urls"].length > 0) {
          msg("Cambio de URL");
          var url = out["pass_it"].urls.shift();
          //msg(url);
          window.location.href = url;
          out["has_next_page"] = true;
        }
        else {
          msg("Fin de Paginación");
          out["has_next_page"] = false;
        }
    } else {
        msg("Cambio de Página");
        //go to next page
        clickable_elem.click();
        out["has_next_page"] = true;
    }
    
  	// out.waitFor = "tbody > tr";  // COLOCAR EL SELECTOR A ESPERAR
  	out.wait = true;
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