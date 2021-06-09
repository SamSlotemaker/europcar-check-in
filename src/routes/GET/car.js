import { findUser } from '../../modules/login.js'
import { findCar } from '../../modules/cars.js'
import { calculateDay, getDateDifference, calculateTime } from '../../modules/date.js'
import QRCode from 'qrcode';
import request from 'request'

const API_ID = '486c476c-5f07-452e-bbd5-dfc42c0f7d1f'
const API_KEY = 'f2f2518c-7a93-4b24-95c9-6b4de6a3f374'

/**
 * gets user and his reservations from the session cookie and renders the overview page
 * @param {object} req - req object
 * @param {object} res - response object
 */
export function carOverviewPage(req, res) {
    let user = findUser(req.session.userID)

    let reservations = user.reservations;

    //sort array on closet date first
    let sortedReservations = [...reservations].sort((a, b) => {
        return new Date(a.startRent) - new Date(b.startRent);
    })

    let pickupTimes = sortedReservations.map(car => {
        return calculateDay(car.startRent) + ' ' + calculateTime(car.startRent)
    })
    let returnTimes = sortedReservations.map(car => {
        return calculateDay(car.endRent) + ' ' + calculateTime(car.endRent)
    })

    let dateDifferences = sortedReservations.map(car => {
        return getDateDifference(car.startRent)
    })

    res.render('cars.ejs', { title: 'login', reservations: sortedReservations, user, pickupTimes, returnTimes, dateDifferences })
}

/**
 * gets users and selected car from the cookie and url parameter and then renders detail page
 * @param {string} req - req object
 * @param {string} res - response object
 */
export function carDetailpage(req, res) {
    let user = findUser(req.session.userID)
    let car = findCar(user, req.params.car)

    let pickupTime = calculateDay(car.startRent) + ' ' + calculateTime(car.startRent)
    let returnTime = calculateDay(car.endRent) + ' ' + calculateTime(car.endRent)
    let isCheckedIn = car.checkedIn;

    QRCode.toDataURL('/scanned?id=' + req.params.car)
        .then(url => {
            //create an image for users to save
            if (car.checkedIn) {
                const data = {
                    html: `   <section class="qr_code_card">
                    <header>
                        <h2>${car.car} ${car.model}</h2>
                        <ul class="detail__car_info">
                            <li>${pickupTime}</li>
                            <li>${returnTime}</li>
                        </ul>
                    </header>
                    <img src="${url}" alt="" class="qr_code">
            </section>`,
                    css: `
                    .qr_code_card {
                        font-family: 'Roboto';
                        padding: 1em;
                        border-radius: 2em;
                        background-color: #ffe907;
                        width: 400px;
                        margin: auto;
                        min-height: 30em;
                        margin-bottom: 3em;
                    }
                    .qr_code_card h2 {
                        text-align: center;
                    }
                    .qr_code_card .detail__car_info {
                        justify-content: center;
                        margin-bottom: 1em;
                    }
                    .qr_code {
                        width: 80%;
                        border-radius: 1em;
                        max-width: 300px;
                        display: block;
                        margin: auto;
                    }
                    `,
                    google_fonts: "Roboto"
                }

                // request.post({ url: 'https://hcti.io/v1/image', form: data })
                //     .auth(API_ID, API_KEY)
                //     .on('data', function (data) {
                //         console.log(JSON.parse(data))
                //     })
            }

            res.render('detail.ejs', { title: car.car, car, qr: url, user, checkedIn: isCheckedIn, pickupTime, returnTime })
        })
        .catch(err => {
            console.error(err)
        })

}