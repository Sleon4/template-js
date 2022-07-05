const calculateYears = (date, year) => {
    date.setMonth(date.getMonth() + (year * 12));
    return date;
};

let date = parseInt(
    'posted 3 years ago'.replace(/[a-zA-Z]/gm, '').trim()
);

console.log(`Años obtenidos: ${date}`);

console.log(
    `Fecha posteada hace ${date} años: ` +
    calculateYears(new Date, -Math.abs(date)).toLocaleDateString('en-US')
);