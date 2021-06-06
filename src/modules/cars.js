/**
 * Returns a car.
 * @param {object} user - Userobject containing reservations
 * @param {string} carID - The id of the car reservation
 */
export function findCar(user, carID) {
    return user.reservations.find(car => car.id === carID)
}

export function findDriverNumber(driver, driverArray) {
    let driverNumber;
    driverArray.forEach((driverIndex, index) => {
        if (driverIndex.info.name == driver.info.name) {
            driverNumber = index;
        }
    })
    return driverNumber + 1
}