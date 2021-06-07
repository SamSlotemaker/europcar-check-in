const monthNames = ["januari", "februari", "maart", "april", "mei", "juni",
    "juli", "augustus", "september", "oktober", "november", "december"
];

/**
 * return formatted time as in hours:minutes
 * @param {object} date - JS date object - newDate()
 */
export function calculateTime(date) {
    const minutes = ((date.getMinutes() == 0) ? '00' : date.getMinutes())
    return date.getHours() + ':' + minutes;
}

/**
 * returns formatted date as in day-month
 * @param {object} date - JS date object - newDate()
 */
export function calculateDay(date) {
    const month = monthNames[date.getMonth()]
    return date.getDate() + ' ' + month
}


/**
 * returns day difference from current date to given date
 * @param {object} date - JS date object - newDate()
 */
export function getDateDifference(date) {
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays
}