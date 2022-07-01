const calculateDates = (date, cont) => {
    date.setDate(date.getDate() + cont);
    return date;
}

msg(
    calculateDates(
        new Date(), -Math.abs(24)
    ).toLocaleDateString('en-US')
);