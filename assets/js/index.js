function indexonload(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const linkvid = urlParams.get('code');
    location.replace(linkvid+".html");
}