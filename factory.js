(function () {
  const out = {};
  const jobs = [];
  let json;

  const partnerID = '25103';
  const siteID = '5019';
  const domain = window.location.origin;
  const companyName = window.location.pathname.split('/')[1];

  if (!pass_it.cont) {
      out.pass_it = {
          cont: 1,
          limit: 0,
          total: 0,
      };
  } else {
      out.pass_it = pass_it;
  }

  const data = {
      partnerId: partnerID,
      siteId: siteID,
      keyword: '',
      location: '',
      keywordCustomSolrFields: 'JobTitle,FORMTEXT4,FORMTEXT6,FORMTEXT7',
      locationCustomSolrFields: 'FORMTEXT5,FORMTEXT6',
      linkId: '0',
      Latitude: 0,
      Longitude: 0,
      facetfilterfields: { Facet: [] },
      powersearchoptions: {
          PowerSearchOption: [
              { VerityZone: 'AutoReq', Type: 'text', Value: null },
              { VerityZone: 'JobTitle', Type: 'text', Value: null },
              { VerityZone: 'FORMTEXT6', Type: 'single-select', OptionCodes: [] },
              { VerityZone: 'FORMTEXT7', Type: 'single-select', OptionCodes: [] },
              { VerityZone: 'FORMTEXT4', Type: 'radio', OptionCodes: [] },
              { VerityZone: 'FORMTEXT3', Type: 'radio', OptionCodes: [] },
              { VerityZone: 'Location', Type: 'select', OptionCodes: [] },
              { VerityZone: 'LastUpdated', Type: 'date', Value: null },
          ],
      },
      SortType: 'score',
      pageNumber: out.pass_it.cont,
  };

  $.ajax({
      url: `${domain}/${companyName}/Search/Ajax/ProcessSortAndShowMoreJobs`,
      headers: {
          'accept': 'application/json, text/plain, */*',
          'content-type': 'application/json;charset=UTF-8',
      },
      type: 'POST',
      dataType: 'json',
      data: JSON.stringify(data),
      async: false,
      success: result => {
          json = result.Jobs.Job;
          out.pass_it.limit = result.JobsCount;
          out.pass_it.total += json.length;

          for (let x in json) {
              const job = {};
              const elem = json[x];

              const fullLoc = [],
                  sourceLoc = [],
                  fullSourceLoc = [];
              let street;

              job.url = elem.Link;

              for (let key in elem.Questions) {
                  if (elem.Questions[key].QuestionName.trim() === 'jobtitle') {
                      job.title = elem.Questions[key].Value;
                  }

                  if (elem.Questions[key].QuestionName.trim() === 'reqid') {
                      job.reqid = elem.Questions[key].Value;
                  }

                  if (elem.Questions[key].QuestionName.trim() === 'formtext25') {
                      job.source_empname = elem.Questions[key].Value;
                  }

                  if (elem.Questions[key].QuestionName.trim() === 'formtext1') {
                      job.source_jobtype = elem.Questions[key].Value;
                  }

                  if (elem.Questions[key].QuestionName.trim() === 'formtext21') {
                      job.source_salary = elem.Questions[key].Value.split('PayRate -').pop().trim();
                  }

                  if (elem.Questions[key].QuestionName.trim() === 'lastupdated') {
                      let datePosted = elem.Questions[key].Value;
                      job.dateposted_raw = new Date(datePosted).toLocaleDateString();
                  }
              }

              job.location = 'Falls Church, VA, US';

              job.temp = 'Jun-2022';

              jobs.push(job);
          }
      },
      error: error => msg(error),
  });

  out.jobs = jobs;
  return out;
})();