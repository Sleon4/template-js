const formatDate = (dateAll) => {
    if (typeof dateAll === 'string') dateAll = [dateAll];

    return dateAll.map(date => {
        //date = date.replace(/lunedì|martedì|mercoledì|giovedì|venerdì|sabato|domenica/gm, '').trim();

        date = date.replace(/janvier|février|mars|avril|peut|juin/igm, (dt) => {
            return {
                'janvier': 'January',
                'février': 'February',
                'mars': 'March',
                'avril': 'April',
                'peut': 'May',
                'juin': 'June'
            }[dt];
        }).trim();

        date = date.replace(/juillet|août|septembre|octobre|novembre|décembre/igm, (dt) => {
            return {
                'juillet': 'July',
                'août': 'August',
                'septembre': 'September',
                'octobre': 'October',
                'novembre': 'November',
                'décembre': 'December'
            }[dt];
        }).trim();

        return new Date(date).toLocaleDateString('en-US');
    });
};