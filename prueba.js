//EXTRACT
(function () {
    var out = {};
    var jobs = [];

    // PASS_IT
    out.pass_it = pass_it;

    if (out.pass_it.exit) {
      var job = {};
      job.title = "job Ghost";
      jobs.push(job);
    } else {
      // SE EXTRAEN DATOS DEL TEMPLATE O DEL PASS_IT
      if (document.querySelector(out.pass_it.descriptionSelector)) {
        var job = {};
        job.title = out.pass_it.title;
        job.url = window.location.href;
        job.location = out.pass_it.location;
        job.source_location = out.pass_it.source_location;
        job.reqid = job.url.split("/").pop()

        // DESCRIPTION
        var full_html = document.querySelector(out.pass_it.descriptionSelector);

        if (typeof cleanHTML == "undefined")
          cleanHTML = function (x) {
            return x;
          };
        if (typeof msg == "undefined") msg = console.log;

        //-------------------------------------------------------------------------//

        for (const a of full_html.querySelectorAll("a, img, script, style, button")) {
          if (a) {
            a.remove();
          }
        }

        //***************************************************************************** */

        // REMOVER DESDE ALGUN TEXTO
        job.html = full_html.innerHTML.trim();
        job.html = job.html.replace(/(http|https|ftp|ftps)\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(\/\S*)?/g, "");
        job.html = job.html.replace(
          /(([\d\w]|%[a-fA-F\d]{2,2})+(:([\d\w]|%[a-fA-f\d]{2,2})+)?@)?([\d\w][-\d\w]{0,253}[\d\w]\.)+[\w]{2,4}(:[\d]+)?(\/([-+_~.\d\w]|%[a-fA-f\d]{2,2})*)*(\?(&?([-+_~.\d\w]|%[a-fA-f\d]{2,2})=?)*)?(#([-+_~.\d\w]|%[a-fA-f\d]{2,2})*)?/g,
          ""
        );

        /***************************BEFORE*******************************/
        job.html = removeTextBefore(job.html, "Position Overview:", false);

        /***************************AFTER*******************************/
        //job.html = removeTextAfter(job.html, "", true);

        job.html = cleanHTML(job.html);

        job.html = full_html.innerHTML.trim();
        job.jobdesc = full_html.textContent.trim();

        var newTemplate = document.createElement("div");
        newTemplate.innerHTML = job.html;

        job.jobdesc = newTemplate.textContent.trim();
        job.jobdesc = cleanHTML(job.jobdesc);

        job.temp = 1;
        jobs.push(job);
      }
    }

    out.jobs = jobs;
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

  //BEFORE EXTRACT
  (function () {
    var out = {};
    var jobsSelector = "div[class='jobs-list'] div[class='job-item job-items-3 clearfix']"; //SELECTOR DE LOS TRABAJOS
    var descriptionSelector = "div[class='job-description']"; //SELECTOR DE DESCRIPTION DE LOS JOBS

    // PASS_IT
    if (typeof pass_it == "undefined") {
      pass_it = {};
    }

    if (!pass_it.cont) {
      out.pass_it = {
        cont: 0,
        exit: false,
        jobsSelector: jobsSelector,
        descriptionSelector: descriptionSelector,
      };
    } else {
      out.pass_it = pass_it;
    }

    // JOBS A EXTRAER
    var element = document.querySelectorAll(jobsSelector)[out.pass_it.cont];

    // SE GUARDA INFORMACION DEL JO EN EL PASS_IT
    if (element) {
      var title = element.querySelector('span[ng-bind="::job.jobTitle"]');
      if (title) out.pass_it.title = title.textContent.trim();

      // LOCATION
      var source_location = element.querySelector('span[ng-bind*="job.location"]');
      if (source_location) {
        out.pass_it.source_location = source_location.textContent.trim();
        out.pass_it.location = out.pass_it.source_location;

        if(out.pass_it.location.search(/Remote/) > -1) out.pass_it.location = "Walnut Creek, California, US"
      }
      if(!out.pass_it.location) out.pass_it.location = "Walnut Creek, California, US"

      // SE DA CLICK EN EL JOB
      element.click();
      out.waitfor = descriptionSelector;
    } else {
      out.pass_it.exit = true;
    }

    return out;
  })();

  //PAGINATION
  (function () {
    var out = {};

    // PAGINACION
    var next_page_selector = "ul[class='paging-block'] li[class='paging-item paging-item-active'] + li a";
    var clickable_elem = document.querySelector(next_page_selector);

    out.pass_it = pass_it;
    out.pass_it.cont++;

    // CONDICION PARA PARAR PAGINACION
    if (out.pass_it.exit) {
      if (clickable_elem) {
        out.has_next_page = true;
        out.pass_it.cont = 0;
        out.pass_it.exit = false;
        clickable_elem.click()
      msg("\x1b[43mSIGUIENTE PAGINA\x1b[0m");
      } else {
      out.has_next_page = false;
      msg("\x1b[41mFIN DE PAGINACION\x1b[0m");
      }
    } else {
      out.has_next_page = true;
      document.querySelector("div[class='job-actions job-actions-top'] div[class='job-actions-back'] button").click(); // URL DEL JOBPAGE
      out.waitfor = out.pass_it.jobsSelector;
      msg("\x1b[43mSIGUIENTE TRABAJO\x1b[0m");
    }

    out.wait = true
    return out;
  })();