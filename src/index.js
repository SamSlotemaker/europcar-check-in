import express from 'express'
import dotenv from 'dotenv'
import cookieSession from 'cookie-session'
import * as path from 'path';
import { findUser, userValidates, checkLogin } from './modules/login.js'
import { findCar } from './modules/cars.js'
import QRCode from 'qrcode';

const app = express()
const PORT = process.env.PORT || 3001
dotenv.config()

app.use(express.static(path.join(path.resolve(), 'public')))
app.use(express.urlencoded({ extended: true }))

app.use(cookieSession({
    name: 'session',
    keys: ['key1', 'key2'],
    isLoggedIn: false,
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
}));

app.set('view engine', 'ejs')
app.set('views', path.join(path.resolve(), 'src/views/pages'))

app.get('/', (req, res) => {
    res.render('login.ejs', { title: 'login', error: false })
})

app.post('/login', (req, res) => {
    const user = findUser(req.body.email)

    if (userValidates(user, req.body.password)) {
        req.session.isLoggedIn = true;
        req.session.userID = user.email;
        res.redirect('/cars')

    }
    else {
        res.render('login.ejs', { title: 'login', error: true })
    }
})

app.post('/logout', (req, res) => {
    req.session.isLoggedIn = false;
    res.redirect('/')

})

// CAR OVERVIEW
app.get('/cars', checkLogin, (req, res) => {
    let user = findUser(req.session.userID)
    let reservations = user.reservations;

    res.render('cars.ejs', { title: 'login', reservations })
})

// DETAIL PAGE
app.get('/cars/:car', checkLogin, (req, res) => {
    let user = findUser(req.session.userID)
    let car = findCar(user, req.params.car)

    QRCode.toDataURL('/scanned?id=' + req.params.car)
        .then(url => {
            res.render('detail.ejs', { title: car.car, car, qr: url, checkedIn: false })
        })
        .catch(err => {
            console.error(err)
        })

})

app.get('/profile', checkLogin, (req, res) => {
    let user = findUser(req.session.userID)
    res.render('profile.ejs', { title: 'profile', user })
})

app.listen(PORT, () => console.log(`app listening on localhost:${PORT}`))