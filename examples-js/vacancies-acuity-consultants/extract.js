fetch("https://vacancies.acuityconsultants.jobs/ajax/search-jobs", {
    headers: {
        accept: "application/json, text/javascript, */*; q=0.01",
        "accept-language": "es-419,es;q=0.9,en-US;q=0.8,en;q=0.7",
        "content-type":
            "multipart/form-data; boundary=----WebKitFormBoundaryBLAEpddPR6vfmGuw",
        "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "x-csrf-token": "gmRxSilAX78vFWXPe1DyPup9ZKQCVKCW2A0Ntrhh",
        "x-requested-with": "XMLHttpRequest",
    },
    referrer: "https://vacancies.acuityconsultants.jobs/",
    referrerPolicy: "strict-origin-when-cross-origin",
    body: '------WebKitFormBoundaryBLAEpddPR6vfmGuw\r\nContent-Disposition: form-data; name="_token"\r\n\r\ngmRxSilAX78vFWXPe1DyPup9ZKQCVKCW2A0Ntrhh\r\n' +
        '------WebKitFormBoundaryBLAEpddPR6vfmGuw\r\nContent-Disposition: form-data; name="keywords"\r\n\r\n\r\n' +
        '------WebKitFormBoundaryBLAEpddPR6vfmGuw\r\nContent-Disposition: form-data; name="location"\r\n\r\n\r\n' +
        '------WebKitFormBoundaryBLAEpddPR6vfmGuw\r\nContent-Disposition: form-data; name="latitude"\r\n\r\n\r\n' +
        '------WebKitFormBoundaryBLAEpddPR6vfmGuw\r\nContent-Disposition: form-data; name="longitude"\r\n\r\n\r\n' +
        '------WebKitFormBoundaryBLAEpddPR6vfmGuw\r\nContent-Disposition: form-data; name="unit"\r\n\r\nkm\r\n' +
        '------WebKitFormBoundaryBLAEpddPR6vfmGuw\r\nContent-Disposition: form-data; name="industry"\r\n\r\n\r\n' +
        '------WebKitFormBoundaryBLAEpddPR6vfmGuw\r\nContent-Disposition: form-data; name="functional_expertises"\r\n\r\n\r\n' +
        '------WebKitFormBoundaryBLAEpddPR6vfmGuw\r\nContent-Disposition: form-data; name="job_type"\r\n\r\n\r\n' +
        '------WebKitFormBoundaryBLAEpddPR6vfmGuw\r\nContent-Disposition: form-data; name="radius"\r\n\r\n\r\n' +
        '------WebKitFormBoundaryBLAEpddPR6vfmGuw\r\nContent-Disposition: form-data; name="currency"\r\n\r\n\r\n' +
        '------WebKitFormBoundaryBLAEpddPR6vfmGuw\r\nContent-Disposition: form-data; name="salary_type"\r\n\r\n\r\n' +
        '------WebKitFormBoundaryBLAEpddPR6vfmGuw\r\nContent-Disposition: form-data; name="pay_interval"\r\n\r\n\r\n' +
        '------WebKitFormBoundaryBLAEpddPR6vfmGuw\r\nContent-Disposition: form-data; name="maximum_salary"\r\n\r\n\r\n' +
        '------WebKitFormBoundaryBLAEpddPR6vfmGuw\r\nContent-Disposition: form-data; name="minimum_salary"\r\n\r\n\r\n' +
        '------WebKitFormBoundaryBLAEpddPR6vfmGuw\r\nContent-Disposition: form-data; name="page"\r\n\r\n2\r\n' +
        '------WebKitFormBoundaryBLAEpddPR6vfmGuw--\r\n',
    method: "POST",
    mode: "cors",
    credentials: "include",
});