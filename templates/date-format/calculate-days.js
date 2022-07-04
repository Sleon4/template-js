const calculateDates = (date, cont) => {
    date.setDate(date.getDate() + cont);
    return date;
}

console.log(
    calculateDates(
        new Date(), -Math.abs(10)
    ).toLocaleDateString('en-US')
);