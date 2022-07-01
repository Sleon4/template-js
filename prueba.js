(function() {
  var out = {};
  var jobs = [];
    out["pass_it"] = pass_it;
  if (out["pass_it"]["salir"]){
    var job = {};
    job.title = 'holaa'+out["pass_it"].avancePag;
    jobs.push(job);
  }else{

  if (document.querySelector(out["pass_it"]["selectorDescription"])){
    var job = {};
    job.title = out["pass_it"]["title"]//document.querySelector("").textContent.replace(/\[.*?\]/g, '').trim();
    job.location = out["pass_it"]["location"];//document.querySelector("").textContent.trim();
    job.dateposted_raw = out["pass_it"].dateposted_raw
    if (typeof out["pass_it"].reqid!="undefined" )
    job.reqid = out["pass_it"].reqid
    else
     job.reqid = document.querySelector("div.job-url.ng-hide>a").href.split("rpid=").pop()
    job.source_salary = out["pass_it"].source_salary
    job.url = document.querySelector("div.job-url.ng-hide>a").href//.getAttribute("data-url")//.href.trim();//window.location.href;

    //removeSelectorContainsText("CALL OR TEXT\\:div", document)
    //removeSelectorContainsText("CALL OR TEXT\\:div", document)
    removeSelector('script' , document)
    job.html = document.querySelector(out["pass_it"]["selectorDescription"]).innerHTML.trim();
   		job.html = removeTextBefore(job.html, "Requirements and Qualifications:", false);
      job.html = removeTextBefore(job.html, "Loading...", true);
      job.html = removeTextBefore(job.html, "Essential Duties & Responsibilities", false);
      //job.html = removeTextBefore(job.html, "Who We Are", false);
	  job.html = removeTextBefore(job.html, "finalize your application!",true)
      job.html = removeTextAfter(job.html, "A.S.G. STAFFING",true)
      job.html = removeTextAfter(job.html, "(please call/txt to schedule", true);
      job.html = removeTextAfter(job.html, "Call or Text Us", true);
      job.html        = cleanHTML(job.html);
      job.jobdesc     = job.html.replace(/&nbsp;/g," ").replace(/\<(.*?)\>/g, ""); // clean tags
      job.jobdesc     = cleanHTML(job.jobdesc);

  job.temp = 1;

  jobs.push(job);
     if(document.querySelector("div.job-actions-back > button"))
       document.querySelector("div.job-actions-back > button").click()

  }
  }

  out["jobs"] = jobs;
  return out;


})();
 function removeTextBefore(html, text, flag) {
      var newHtml = html;
      if (newHtml.indexOf(text) > -1) {
        newHtml = newHtml.split(text).pop();
        if (!flag) {
          newHtml = "<h3>" + text + "</h3>" + newHtml;
        }
      }
      return newHtml;
    }
    function removeTextAfter(html, text, flag) {
      var newHtml = html;
      if (newHtml.indexOf(text) > -1) {
        newHtml = newHtml.split(text).shift();
        if (!flag) {
          newHtml = newHtml + "<p>" + text + "</p>";
        }
      }
      return newHtml;
    }
  function removeSelector(selectorDom, elements){
  selectorDom.split(',').forEach(selector=>{elements.querySelectorAll(selector).forEach(function(elem){elem.remove()})})
}
function removeSelectorContainsText(textSelector, elements){
  let selectors = textSelector.split(',');
  selectors.forEach(function(selector){
  let text = selector.split('\\:').shift(); let itemselec = selector.split('\\:').pop();
    elements.querySelectorAll(itemselec).forEach(function(elem){RegExp(text).test(elem.innerText)?elem.remove():null})})
}


/*(function () {
    const out = {};
    const jobs = [];

    out['pass_it'] = pass_it;

    if (out['pass_it'].goOut) {
        const job = { title: 'Finish' };
        jobs.push(job);
    } else {
        if (document.querySelector(out['pass_it'].selectorDesc)) {
            const job = {};
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

            job.title = out['pass_it'].title;
            job.url = window.location.href;
            job.reqid = out['pass_it'].reqid;
            job.location = out['pass_it'].location;
            job.source_salary = out['pass_it'].source_salary;
          	job.dateposted_raw = new Date(out['pass_it'].dateposted_raw).toLocaleDateString();

            job.temp = 'Dic-2021';

            const full_html = document.querySelector(out['pass_it'].selectorDesc);

          	const searching = document.querySelectorAll('span');
      		searching.forEach(item => {
        		if (item.textContent.search(/Pay Rates/g) > -1) {
                	job.source_salary = item.textContent.replace('Pay Rates', '').trim().split(' ').shift();
            	}
        	});

            // remove something from the jobdatata
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

            job.html = removeTextBefore(job.html, 'Position Summary:', true);
            job.html = removeTextAfter(job.html, 'ASG is an Equal Opportunity Employer.', true);
          	job.html = job.html.replace('Loading...', '').trim();

            if (job.jobdesc.length < 250) {
                job.html = '';
                job.jobdesc = '';
            }

            jobs.push(job);
        } else {
            msg('Algo pasa con la descripcion');
        }
    }

    out['jobs'] = jobs;
    out.waitFor = out['pass_it'].selectorJobs;

    if (out['pass_it'].try >= 3) {
        const ghost = { title: 'Boo job!' };
        //out['pass_it'].try = 0;
        jobs.push(ghost);
    }

    return out;
})();

function removeTextBefore(html, text, flag) {
    let keyWord;
    let newHtml = html;

    if (newHtml.indexOf(text) > -1) keyWord = text;
    if (newHtml.indexOf(text) > -1) newHtml = newHtml.split(text).pop();
    if (!flag) if (keyWord) newHtml = '<h3>' + keyWord + '</h3>' + newHtml;
    return newHtml;
}

function removeTextAfter(html, text, flag) {
    let newHtml = html;
    if (newHtml.indexOf(text) > -1) newHtml = newHtml.split(text).shift();
    if (!flag) newHtml = newHtml + '<p>' + text + '</p>';
    return newHtml;
}*/