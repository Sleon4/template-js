//EXTRACT
(function() {
    var out = {};
     var html_jobs = document.querySelectorAll("ul#listing > li.lister__item");
     var jobs = [];
 
     for(var x in html_jobs) {
         if(typeof html_jobs[x] =="function") continue;
         if(typeof html_jobs[x] =="number") continue;
       var job = {};
       var elem = html_jobs[x];
     
       job.title = elem.querySelector("div.lister__details > h3 a span").textContent.trim();
       job.url = elem.querySelector("div.lister__details > h3 a").href.trim();
       
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
(function() {
   var out = {};
   var next_page_selector = 'a[title="Next page"]'; //selector to identify the next button

   var clickable_elem = document.querySelector(next_page_selector);
   if (typeof pass_it == "undefined") pass_it = {};
   if (!pass_it["cont"]) {
       out["pass_it"] = {
           "cont": 2
       };
   } else {
       out["pass_it"] = pass_it;
   }
 
   //stop condition
   if (!clickable_elem) {
       //last page
       out["has_next_page"] = false;
   } else {
       //go to next page
       window.location.href = "https://www.wmjobs.co.uk/employer/1303/solihull-metropolitan-borough-council/" + out["pass_it"].cont;
       out["pass_it"].cont++;
       out["has_next_page"] = true;
   }
 
   // out.waitFor = ".views-row";
     out.wait = true;
   return out;
})();

// ----------------------------------------------------------------------------------------------------------------------

// BEFORE EXTRACT
(function() {
     var out = {};
     out.waitFor = "ul#listing>li.lister__item";
     //out.wait = true;
     //out.pic = true;
     //out.html = true;
     return out;
})();