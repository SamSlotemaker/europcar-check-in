/**
 * Returns a car.
 * @param {string} user - Userobject containing reservations
 * @param {string} carID - The id of the car reservation
 */

export function findCar(user, carID) {
    return user.reservations.find(car => car.id === carID)
}