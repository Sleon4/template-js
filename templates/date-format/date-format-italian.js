const formatDate = (elem) => {
    dateAll = elem.textContent
        .trim()
        .split('scade')
        .map(date => date.trim())
        .map(date => date === 'nuovo' ? new Date().toLocaleDateString('en-US') : date)
        .join('-')
        .replace(/(\r\n\t|\n|\r|\t)/gm, '')
        .split('scaduto')
        .map(date => date.trim());

    dateAll = dateAll.length >= 2 ? [dateAll.join('-')].pop().split('-') : dateAll.pop().split('-');
    dateAll = dateAll.map(date => {
        date = date.replace(/lunedì|martedì|mercoledì|giovedì|venerdì|sabato|domenica/gm, '').trim();

        date = date.replace(/gennaio|febbraio|marzo|aprile|maggio|giugno/gm, (dt) => {
            return {
                'gennaio': 'January', 'febbraio': 'February', 'marzo': 'March',
                'aprile': 'April', 'maggio': 'May', 'giugno': 'June',
            }[dt];
        }).trim();

        date = date.replace(/luglio|agosto|settembre|ottobre|novembre|dicembre/gm, (dt) => {
            return {
                'luglio': 'July', 'agosto': 'August', 'settembre': 'September',
                'ottobre': 'October', 'novembre': 'November', 'dicembre': 'December'
            }[dt];
        }).trim();

        return new Date(date).toLocaleDateString('en-US');
    });

    return dateAll;
};