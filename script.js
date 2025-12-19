// URL PARAMETERS

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const dateFormat = urlParams.get("dateFormat") || 'ddd DD MMM yyyy HH:mm:ss';

moment.locale('uk');
const localeParam = urlParams.get('locale');
if (localeParam === 'en') {
    moment.locale('en');
}

// FUNCTIONS

function setTime()
{
    document.getElementById("timeLabel").innerHTML = moment().format(dateFormat);
}

setTime();
setInterval(setTime, 1000);
