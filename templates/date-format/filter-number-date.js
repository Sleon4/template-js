const filterNumberDay = (date_new) => {
    if (new RegExp(/[0-9]/g).test(date_new)) {
        if (['01', '1', 01, 1].includes(date_new)) return 'January';
        if (['02', '2', 02, 2].includes(date_new)) return 'February';
        if (['03', '3', 03, 3].includes(date_new)) return 'March';
        if (['04', '4', 04, 4].includes(date_new)) return 'April';
        if (['05', '5', 05, 5].includes(date_new)) return 'May';
        if (['06', '6', 06, 6].includes(date_new)) return 'June';
        if (['07', '7', 07, 7].includes(date_new)) return 'July';
        if (['08', '8', 08, 8].includes(date_new)) return 'August';
        if (['09', '9', 09, 9].includes(date_new)) return 'September';
        if (['10', 10].includes(date_new)) return 'October';
        if (['11', 11].includes(date_new)) return 'November';
        if (['12', 12].includes(date_new)) return 'December';
    } else {
        return date_new;
    }
};