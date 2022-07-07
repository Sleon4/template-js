const httpHtml = (url) => {
    let response = "";
    const xhr = new XMLHttpRequest();

    xhr.open("GET", url, false);
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) response = xhr.responseText;
    };
    xhr.send();

    return response;
};