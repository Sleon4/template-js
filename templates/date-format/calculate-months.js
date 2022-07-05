const calculateMonths = (date, month) => {
    date.setMonth(date.getMonth() + month);
    return date;
};