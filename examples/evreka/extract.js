(function() {
    const getDescription = (url) => {
        try {
            const xmlh = new XMLHttpRequest();
            xmlh.open('GET', url, false);

            let res = null;
            xmlh.onreadystatechange = () => {
                res = xmlh.readyState === 4 && xmlh.status === 200 ? xmlh.responseText : null;
            };
            xmlh.send(null);

            return res;
        } catch(ex) {
            return false;
        }
    };

  	const list = document.querySelectorAll("div.loadmore_list_container > a.evreka-crew-jobs-item");
  	const jobs = [];
  	let location = "";

  	for (let job of list) {
  	    if (['function', 'number'].includes(typeof job)) continue;
  	    let elem = document.createElement('div');
  	    elem.innerHTML = getDescription(job.href.trim());
  	    location = elem.querySelector('h3.position-title.heading > span.subheading').textContent.split('/').pop().trim();

  	    jobs.push({
  	        title: job.querySelector('span:nth-child(1)').textContent.trim(),
  	        reqid: '',
  	        url: job.href.trim(),
  	        location: location,
  	        source_location: location,
  	        temp: 1
  	    });
  	}

  	return { jobs: jobs };
})();