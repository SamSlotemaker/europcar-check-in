// user array with userdata to create the application.
const users = [
    //leeftijd
    //klasse voor leeftijdsgrens
    {
        name: 'Sam Slotemaker',
        birthDate: '06-01-2000',
        email: 'test',
        password: 'password',
        reservations: [
            {
                id: '090909',
                car: 'Ford',
                model: 'Ka',
                startRent: new Date('February 1, 2021 13:30:00'),
                endRent: new Date('February 9, 2021 16:00:00'),
                //end time
                imgUrl: '/style/images/fordKa.jpg',
                checkedIn: false,
                //checkinstatus
                drivers: [
                    {
                        name: 'Sam',
                        validated: false
                    },
                ],
                depositPayed: false
            },
            {
                id: '090910',
                car: 'Fiat',
                model: 'Punto',
                startRent: new Date('January 3, 2021 13:30:00'),
                endRent: new Date('January 7, 2021 16:00:00'),
                imgUrl: '/style/images/punto.jpg',
                checkedIn: false,
                drivers: [
                    {
                        name: 'Sam',
                        validated: false
                    },
                ],
                depositPayed: false
            }
        ]
    },
    {
        name: 'Sam Slotemaker',
        birthDate: '06-01-2000',
        email: 'sam1',
        password: 'password',
        reservations: [
            {
                id: '090911',
                car: 'BMW',
                model: '5 serie',
                startRent: new Date('January 3, 2021 13:30:00'),
                endRent: new Date('January 7, 2021 16:00:00'),
                imgUrl: '/style/images/5serie.jpg',
                checkedIn: false,
                drivers: [
                    {
                        name: 'Sam',
                        validated: false
                    },
                ],
                depositPayed: false
            },
            {
                id: '090912',
                car: 'Audi',
                model: 'A3',
                startRent: new Date('January 3, 2021 13:30:00'),
                endRent: new Date('January 7, 2021 16:00:00'),
                imgUrl: '/style/images/a3.jpg',
                checkedIn: false,
                drivers: [
                    {
                        name: 'Sam',
                        validated: false
                    },
                ],
                depositPayed: false
            }
        ]
    }
]

export default users