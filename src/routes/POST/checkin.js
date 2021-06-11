import { findUser } from '../../modules/login.js'
import { findCar } from '../../modules/cars.js'
import { checkSkipped, checkCompleteCheckedIn } from '../../modules/checkin.js'

/**
 * handles the car checkin and then renders the checked in detail page
 * @param {object} req - req object
 * @param {object} res - response object
 */
export function startCheckin(req, res) {
    let user = findUser(req.session.userID)
    let car = findCar(user, req.query.car)

    car.checkinStarted = true;

    res.redirect(`/cars/checkin/?car=${car.id}`)
}
/**
 * handles the car checkin and then renders the checked in detail page
 * @param {object} req - req object
 * @param {object} res - response object
 */
export function checkInfo(req, res) {
    let user = findUser(req.session.userID)
    let car = findCar(user, req.query.car)

    res.redirect(`/cars/checkin/checkInfo2?car=${car.id}`)
}


export function checkInfo2(req, res) {
    let user = findUser(req.session.userID)
    let car = findCar(user, req.query.car)

    car.infoConfirmed = true;

    res.redirect(`/cars/checkin/verificationInfo?car=${car.id}`)
}



export function verifyDocument(req, res) {
    let user = findUser(req.session.userID)
    let car = findCar(user, req.query.car)

    let driverNumber = Number(req.query.driver)
    let driver = car.drivers[driverNumber - 1]

    driver.documentValidated = true;

    res.redirect(`/cars/checkin/driverDone?car=${car.id}&driver=${driverNumber}`)

}

export function pay(req, res) {
    let user = findUser(req.session.userID)
    let car = findCar(user, req.query.car)

    car.depositPayed = true;

    let skipped = checkSkipped(req.query.skipped)

    let status = { infoStatus: 'done', verifyStatus: 'done', paymentStatus: 'doing' }

    let openField = req.body.method

    let backUrl = `/cars/checkin/driverDone?car=${car.id}`

    res.render('checkin/deposit', { title: 'check-in', car, user, backUrl, status, skipped, payed: car.depositPayed, open: openField })
}

export function complete(req, res) {
    let user = findUser(req.session.userID)
    let car = findCar(user, req.query.car)
    car.checkedIn = true;

    car.allStepsComplete = checkCompleteCheckedIn(car)
    console.log(car)
    res.redirect(`/cars/`)
}