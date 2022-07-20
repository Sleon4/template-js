(() => {
    const jobs = [];
    let cont = 0, limit = 0, i = 0, strTotal = '';

    $.ajax({
        url: ``,
        type: 'POST',
        dataType: 'json',
        // data: JSON.stringify(data),
        async: false,
        headers: {
            "accept": "application/json, text/plain, */*",
            "content-type": "application/json;charset=UTF-8"
        },
        success: res => {
            if (i === 0) {
                i = 1;
            }

            msg(res)
        },
        error: err => msg(err)
    });

    return { jobs: jobs };
})();