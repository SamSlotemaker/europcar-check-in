// user array with userdata to create the application.
const users = [
    {
        name: 'Sam Slotemaker',
        birthDate: '06-01-2000',
        email: 'sam2',
        password: 'password',
        reservations: [
            {
                id: '090909',
                car: 'Ford',
                model: 'Ka',
                from: '09-01-2020',
                to: '12-01-2020',
                imgUrl: '/style/images/fordKa.jpg',
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
                id: '090910',
                car: 'Fiat',
                model: 'Punto',
                from: '09-01-2020',
                to: '12-01-2020',
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
                from: '09-01-2020',
                to: '12-01-2020',
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
                from: '09-01-2020',
                to: '12-01-2020',
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