
/**
 * returns true or false, depending if the page was skipped to
 * @param {string} query - query, true or false
 */
export function checkSkipped(query) {
    if (query == 'true') {
        return true
    } else {
        return false;
    }
}

/**
 * returns true if all steps are completed
 * @param {object} car - car object
 */
export function checkCompleteCheckedIn(car) {
    //create an array with all verification statuses
    let allDriversCompleted = checkAllDriversCompleted(car)
    if (allDriversCompleted && car.depositPayed && car.infoConfirmed) {
        return true
    }
    return false
}

export function checkAllDriversCompleted(car) {
    return !car.drivers.map(driver => {
        return [driver.documentValidated, driver.personValidated]
    }).flat().includes(false)
}