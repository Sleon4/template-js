(function () {
    var out = {
        pass_it: pass_it,
        has_next_page: false
    };

    if (out.pass_it.cont < (out.pass_it.totalJobs - 1)) {
        out.pass_it.cont++;
        out.has_next_page = true;
    }

    return out;
})();