function detectChrome () {
    if (navigator.userAgent.indexOf('Chrome') > -1 || navigator.userAgent.indexOf('CriOS') > -1) {
        return true;
    }
    return false;
}