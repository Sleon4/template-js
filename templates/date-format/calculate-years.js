const calculateYears = (date, year) => {
    date.setMonth(date.getMonth() + (year * 12));
    return date;
};