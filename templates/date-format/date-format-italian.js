const formatDate = (dateAll) => {
    if (typeof dateAll === 'string') dateAll = [dateAll];

    return dateAll.map(date => {
        date = date.replace(/lunedì|martedì|mercoledì|giovedì|venerdì|sabato|domenica/gm, '').trim();

        date = date.replace(/gennaio|febbraio|marzo|aprile|maggio|giugno/gm, (dt) => {
            return {
                'gennaio': 'January',
                'febbraio': 'February',
                'marzo': 'March',
                'aprile': 'April',
                'maggio': 'May',
                'giugno': 'June',
            }[dt];
        }).trim();

        date = date.replace(/luglio|agosto|settembre|ottobre|novembre|dicembre/gm, (dt) => {
            return {
                'luglio': 'July',
                'agosto': 'August',
                'settembre': 'September',
                'ottobre': 'October',
                'novembre': 'November',
                'dicembre': 'December'
            }[dt];
        }).trim();

        return new Date(date).toLocaleDateString('en-US');
    });
};