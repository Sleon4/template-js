const calculateDays = (date, cont) => {
    date.setDate(date.getDate() + cont);
    return date;
};