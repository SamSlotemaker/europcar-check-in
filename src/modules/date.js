
/**
 * return formatted time as in hours:minutes
 * @param {object} date - JS date object - newDate()
 */
export function calculateTime(date) {
    return date.getHours() + ':' + date.getMinutes();
}

/**
 * returns formatted date as in day-month
 * @param {object} date - JS date object - newDate()
 */
export function calculateDay(date) {
    return date.getDate() + '-' + (date.getMonth() + 1)
}