// user array with userdata to create the application.
const users = [
    //leeftijd
    //gebruikersadres ter verificatie
    //ideal betaalmethode

    //borg betaling zou altijd moeten kunnen, ook 
    {
        name: 'Sam Slotemaker',
        birthDate: '06-01-2000',
        email: 'test',
        password: 'password',
        adress: {
            city: 'Heiloo',
            street: 'Westerweg 311',
            zip: '1922 PS',
            country: 'Nederland'
        },
        reservations: [
            {
                id: '090909',
                car: 'Ford',
                model: 'Ka',
                //klasse voor leeftijdsgrens
                startRent: new Date('February 1, 2021 13:30:00'),
                endRent: new Date('February 9, 2021 16:00:00'),
                imgUrl: '/style/images/fordKa.jpg',
                checkedIn: false,
                //checkinstatus
                drivers: [
                    {
                        info: {
                            name: 'Sam',
                            phone: '0612425243',
                            birthDate: '06-01-2000',
                            email: 'sam.slotemaker@test.nl'
                        },

                        documentValidated: false,
                        personValidated: false
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
                        info: {
                            name: 'Sam',
                            phone: '0612425243',
                            birthDate: '06-01-2000',
                            email: 'sam.slotemaker@test.nl'
                        },
                        documentValidated: false,
                        personValidated: false
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
        adress: {
            city: 'Heiloo',
            street: 'Westerweg 311',
            zip: '1922 PS',
            country: 'Nederland'
        },
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
                        info: {
                            name: 'Sam',
                            phone: '0612425243',
                            birthDate: '06-01-2000',
                            email: 'sam.slotemaker@test.nl'
                        },
                        documentValidated: false,
                        personValidated: false
                    },
                    {
                        info: {
                            name: 'Martijn',
                            phone: '0612425243',
                            birthDate: '06-01-2000',
                            email: 'martijn.tromp@test.nl'
                        },
                        documentValidated: false,
                        personValidated: false
                    }
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
                        info: {
                            name: 'Sam',
                            phone: '0612425243',
                            birthDate: '06-01-2000',
                            email: 'sam.slotemaker@test.nl'
                        },
                        documentValidated: false,
                        personValidated: false
                    },
                ],
                depositPayed: false
            }
        ]
    }
]

export default users