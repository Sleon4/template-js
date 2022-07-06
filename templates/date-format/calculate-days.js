const calculateDates = (date, cont) => {
    date.setDate(date.getDate() + cont);
    return date;
};