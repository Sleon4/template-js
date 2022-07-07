(function() {
    var out = {};
    var html_jobs = document.querySelectorAll("ul.jobList.ng-scope > li");
    var jobs = [];

    for(var x in html_jobs){
      if(typeof html_jobs[x] =="function") continue;
      if(typeof html_jobs[x] =="number") continue;

      var job  = {};
      var elem = html_jobs[x];

      job.title    = elem.querySelector("a[id^=Job]").textContent.trim();
      //if(job.title.indexOf(" - ")>-1){job.title = job.title.split(" - ").shift().trim();}
      //if(job.title.indexOf(":")>-1){job.title = job.title.split(":").shift().trim();}
      job.url      = elem.querySelector("a[id^=Job]").href.trim();
      job.location = "Carlisle, PA, US";
      job.source_location = "";

      //if(job.title.indexOf("Hazleton")>-1){job.location = "Hazleton, PA, US";}
      //if(job.title.indexOf("Reading")>-1){job.location = "Reading, PA, US";}
      //if(job.title.indexOf("Allentown")>-1){job.location = "Allentown, PA, US";}
      //if(job.title.indexOf("Hazleton")>-1){job.location = "Hazleton, PA, US";}

      var title = elem.querySelector("a[id^=Job]").textContent.trim();
      if(title.indexOf(" - ")>-1){
          job.source_location = title;
          job.location = title.split(" - ").pop().trim();
      }
      job.location = job.location.replace(/State|Greater|Area/gmi,"").trim();
      //if(title.indexOf(":")>-1){job.location = title.split(":").pop().trim();}
     /* if(title.indexOf("(")>-1 && title.indexOf(")")>-1){
        job.location = job.location.split("(").pop().split(")").shift().trim();
      }*/
      //job.title = job.title.replace('Full-Time','').trim();

     /* job.location = job.location.replace("Areas","");
      job.location = job.location.replace("Harrisonburg","Harrisonburg, VA");
      job.location = job.location.replace("Culpeper","Culpeper, VA");
      if(job.location.indexOf("&")==-1 && job.location.indexOf(" and ")==-1 &&
         job.location.indexOf("/")>-1  && job.location.indexOf(",")>-1){
        var country = job.location.split(",").pop().trim();
        job.location = job.location.replace(/[/]/g, ", " + country + "/");
      }
      job.location = job.location.replace(/ and |&/g,"/");
      if(job.location.indexOf("/")==-1 && job.location.indexOf(",")>-1){
        var numberOfCommas = job.location.match(/\,/g).length;
        if(numberOfCommas > 2){
          job.location = job.location.replace(/\,/g,"/");
        }
      }
      if(job.location.indexOf("AL") > 1) { job.location =  job.location.replace("AL","Alabama, US"); };
      if(job.location.indexOf("AK") > 1) { job.location =  job.location.replace("AK","Alaska, US"); };
      if(job.location.indexOf("AZ") > 1) { job.location =  job.location.replace("AZ","Arizona, US"); };
      if(job.location.indexOf("AR") > 1) { job.location =  job.location.replace("AR","Arkansas, US"); };
      if(job.location.indexOf("CA") > 1) { job.location =  job.location.replace("CA","California, US"); };
      if(job.location.indexOf("CO") > 1) { job.location =  job.location.replace("CO","Colorado, US"); };
      if(job.location.indexOf("CT") > 1) { job.location =  job.location.replace("CT","Connecticut, US");};
      if(job.location.indexOf("DE") > 1) { job.location =  job.location.replace("DE","Delaware, US"); };
      if(job.location.indexOf("FL") > 1) { job.location =  job.location.replace("FL","Florida, US"); };
      if(job.location.indexOf("GA") > 1) { job.location =  job.location.replace("GA","Georgia, US"); };
      if(job.location.indexOf("HI") > 1) { job.location =  job.location.replace("HI","Hawaii, US"); };
      if(job.location.indexOf("ID") > 1) { job.location =  job.location.replace("ID","Idaho, US"); };
      if(job.location.indexOf("IL") > 1) { job.location =  job.location.replace("IL","llinois, US"); };
      if(job.location.indexOf("IN") > 1) { job.location =  job.location.replace("IN","Indiana, US"); };
      if(job.location.indexOf("IA") > 1) { job.location =  job.location.replace("IA","Iowa, US"); };
      if(job.location.indexOf("KS") > 1) { job.location =  job.location.replace("KS","Kansas, US"); };
      if(job.location.indexOf("KY") > 1) { job.location =  job.location.replace("KY","Kentucky, US"); };
      if(job.location.indexOf("LA") > 1) { job.location =  job.location.replace("LA","Louisiana, US"); };
      if(job.location.indexOf("ME") > 1) { job.location =  job.location.replace("ME","Maine, US"); };
      if(job.location.indexOf("MD") > 1) { job.location =  job.location.replace("MD","Maryland, US"); };
      if(job.location.indexOf("MA") > 1) { job.location =  job.location.replace("MA","Massachusetts, US"); };
      if(job.location.indexOf("MI") > 1) { job.location =  job.location.replace("MI","Míchigan, US");};
      if(job.location.indexOf("MN") > 1) { job.location =  job.location.replace("MN","Minnesota"); };
      if(job.location.indexOf("MS") > 1) { job.location =  job.location.replace("MN","Mississippi, US"); };
      if(job.location.indexOf("MO") > 1) { job.location =  job.location.replace("MO","Missouri, US"); };
      if(job.location.indexOf("MT") > 1) { job.location =  job.location.replace("MT","Montana, US"); };
      if(job.location.indexOf("NE") > 1) { job.location =  job.location.replace("NE","Nebraska, US"); };
      if(job.location.indexOf("NV") > 1) { job.location =  job.location.replace("NV","Nevada, US"); }
      if(job.location.indexOf("NH") > 1) { job.location =  job.location.replace("NH","New Hampshire, US"); };
      if(job.location.indexOf("NJ") > 1) { job.location =  job.location.replace("NJ","New Jersey, US"); };
      if(job.location.indexOf("NM") > 1) { job.location =  job.location.replace("NM","New Mexico, US"); };
      if(job.location.indexOf("NY") > 1) { job.location =  job.location.replace("NY","New York, US"); };
      if(job.location.indexOf("NC") > 1) { job.location =  job.location.replace("NC","North Carolina, US"); };
      if(job.location.indexOf("ND") > 1) { job.location =  job.location.replace("ND","North Dakota, US"); };
      if(job.location.indexOf("OH") > 1) { job.location =  job.location.replace("OH","Ohio, US");};
      if(job.location.indexOf("OK") > 1) { job.location =  job.location.replace("OK","Oklahoma, US");};
      if(job.location.indexOf("OR") > 1) { job.location =  job.location.replace("OR","Oregon, US"); };
      if(job.location.indexOf("PA") > 1) { job.location =  job.location.replace("PA","Pennsylvania, US"); };
      if(job.location.indexOf("RI") > 1) { job.location =  job.location.replace("RI","Rhode Island, US"); };
      if(job.location.indexOf("SC") > 1) { job.location =  job.location.replace("SC","South Carolina, US"); };
      if(job.location.indexOf("SD") > 1) { job.location =  job.location.replace("SD","South Dakota, US"); };
      if(job.location.indexOf("TN") > 1) { job.location =  job.location.replace("TN","Tennessee, US"); };
      if(job.location.indexOf("TX") > 1) { job.location =  job.location.replace("TX","Texas, US"); };
      if(job.location.indexOf("UT") > 1) { job.location =  job.location.replace("UT","Utah, US"); };
      if(job.location.indexOf("VT") > 1) { job.location =  job.location.replace("VT","Vermont, US"); };
      if(job.location.indexOf("VA") > 1) { job.location =  job.location.replace("VA","Virginia, US"); };
      if(job.location.indexOf("WA") > 1) { job.location =  job.location.replace("WA","Washington, US");};
      if(job.location.indexOf("WV") > 1) { job.location =  job.location.replace("WV","West Virginia, US"); };
      if(job.location.indexOf("WI") > 1) { job.location =  job.location.replace("WI","Wisconsin, US"); };
      if(job.location.indexOf("WY") > 1) { job.location =  job.location.replace("WY","Wyoming, US"); }  ;
      if(job.location.indexOf("Profitability") > 1) { job.location =  job.location.replace("Pennsylvania","Pennsylvania, US"); }  ;*/

      var datePosted = elem.querySelector("p.jobProperty.position1").textContent.trim();
      job.dateposted_raw = getDateFormat(datePosted,"-",1,0,2);
      //job.source_jobtype = elem.querySelector("").textContent.trim();
      //job.source_salary  = elem.querySelector("").textContent.trim();
      //job.source_empname     = elem.querySelector("").textContent.trim();
      //job.logo               = elem.querySelector("").getAttribute("src").trim();
      //job.source_apply_email = elem.querySelector("").textContent.trim();

     /* job.location = job.location.replace("US, US","US");
      job.location = job.location.replace("PA","Pennsylvania").replace("Locations","");
      if(job.url.indexOf("246056")> -1){job.location = "Pottstown, Pennsylvania";}
      if(job.url.indexOf("246060")> -1){job.location = "Willow Grove, Pennsylvania";}
      if(job.url.indexOf("246062")> -1){job.location = "Coopersburg, Pennsylvania";}
      if(job.url.indexOf("245778")> -1){job.location = "Carlisle, Pennsylvania";}
      if(job.url.indexOf("239108")> -1){job.location = "Reading, Pennsylvania";}*/
      //if(job.url.indexOf("")> -1){job.location = "";}
      //if(job.url.indexOf("")> -1){job.location = "";}
      //if(job.url.indexOf("")> -1){job.location = "";}
      //if(job.url.indexOf("")> -1){job.location = "";}
      job.reqid    = elem.querySelector('div.liner.lightBorder > div:nth-child(5) > p').textContent.trim();
      job.temp = "[04/27/2022]";

      //job.location = job.location.replace(/US,/g,"US/").trim();

      /*if(job.location.indexOf("/")>-1) {
        var aux = job.location.split("/");
        for(i in aux){ var job = {};


                      job.title    = elem.querySelector("a[id^=Job]").textContent.trim();
                      job.title = job.title.replace('Full-Time','').trim();
                      if(job.title.indexOf(" - ")>-1){job.title = job.title.split(" - ").shift().trim();}
                      if(job.title.indexOf(":")>-1){job.title = job.title.split(":").shift().trim();}
                      job.url      = elem.querySelector("a[id^=Job]").href.trim();
                      job.location = aux[i];
                      job.location = job.location.replace("US, US","US");
                      job.location = job.location.replace("PA","Pennsylvania");
                      if(job.location.indexOf("Profitability") > 1) { job.location =  job.location.replace("Pennsylvania","Pennsylvania, US"); }  ;
                      job.dateposted_raw = elem.querySelector("p.jobProperty.position1").textContent.trim();

                      job.temp = "2020";

                      if(job.title.length > 0 && job.location.length > 0){
                        jobs.push(job);
                      }

                     }



      }else{*/
      job.location.split('/').forEach(tmploc=>{
          jobx = {...job};
          jobx.location = tmploc.trim();
          jobs.push(jobx);
      });

      //}


    }

    out["jobs"] = jobs;
    return out;
  })();


  function getDateFormat(dateRaw, cut, dayPosition, monthPosition, yearPosition) {
         dateRaw = dateRaw.replace(/\,/g,"").replace(/st|th|nd|rd/gi,'').trim();

          let day   =  dateRaw.split(cut)[dayPosition].trim(),
              month =  dateRaw.split(cut)[monthPosition].trim(),
              year  = dateRaw.split(cut)[yearPosition].trim();

            if (day < 10 && day.length < 2) {day = "0" + day;}

            if(dateRaw.search(/[a-z]/gi)>-1){
              if(month.search(/jan/i)>-1){month = "01";}
              if(month.search(/feb|fév/i)>-1){month = "02";}
              if(month.search(/mar/i)>-1){month = "03";}
              if(month.search(/apr|avr/i)>-1){month = "04";}
              if(month.search(/may|mai/i)>-1){month = "05";}
              if(month.search(/jun|juin/i)>-1){month = "06";}
              if(month.search(/jul|juil/i)>-1){month = "07";}
              if(month.search(/aug|août/i)>-1){month = "08";}
              if(month.search(/sep/i)>-1){month = "09";}
              if(month.search(/oct/i)>-1){month = "10";}
              if(month.search(/nov/i)>-1){month = "11";}
              if(month.search(/dec/i)>-1){month = "12";}
            }
     var datum = month +"/"+  day +"/"+ year;

         return datum;
    }