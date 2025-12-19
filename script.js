// URL PARAMETERS

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const dateFormat = urlParams.get("dateFormat") || 'ddd DD MMM yyyy HH:mm:ss';

const locale = urlParams.get('locale');
if (locale === 'en') {
    moment.locale('en');
} else {
    moment.locale('uk');
}

// FUNCTIONS

function setTime()
{
    document.getElementById("timeLabel").innerHTML = moment().format(dateFormat);
}

setTime();
setInterval(setTime, 1000);
