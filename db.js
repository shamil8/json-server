const monData = require('./monData/monData')()

module.exports = () => {
    return {
        // Project Mon (http://mon.imces.ru/)  https://github.com/shamil8/mon
        ...monData,

        // Project Station  https://github.com/shamil8/station
        stations: [
            {
                id: 333,
                name: "Станция №3 Lukoil",
                address: "г. Новосибирск ул. Усова №1",
                type: "АИ-92",
                date: "2020-02-10T17:00:00.000Z",
                company: "Компанияя",
                isDelete: false
            },
            {
                id: 4,
                name: "Станция №4 Gazprom",
                address: "г. Омск ул. Иванова №55",
                type: "АИ-95",
                date: "2020-02-12T17:00:00.000Z",
                company: "Газпром",
                isDelete: false
            }
        ],
        cars: [
            {
                id: 1,
                mark: "BMW M3",
                number: "222 DSA",
                type: "АИ-92",
                date: "2020-02-05T17:00:00.000Z",
                isDelete: false
            },
            {
                id: 2,
                mark: "Ford",
                number: "212 CDD",
                type: "АИ-95",
                date: "2020-02-05T17:00:00.000Z",
                isDelete: false
            }
        ],
        car_station: [
            {
                id: 1,
                mark: "BMW M3",
                number: "222 DSA",
                name: "Станция 22",
                type: "АИ-92",
                quantity: "23",
                address: "г. Омск ул. Иванова №55",
                date: "2020-02-05"
            },
            {
                id: 2,
                mark: "LADA M3",
                number: "232 DSA",
                name: "Станция Газпром",
                type: "АИ-92",
                quantity: 3,
                address: "г. Москва ул. Иванова №55",
                date: "2020-02-05"
            },
            {
                id: 3,
                mark: "Mazda M3",
                number: "442 45D",
                name: "Станция 11",
                type: "АИ-95",
                quantity: 5,
                address: "г. Томск ул. Иванова №55",
                date: "2020-05-05"
            }
        ],

        // Project Task ASU https://github.com/shamil8/task_asu
        users: [
            {
                id: 1,
                name: "Ivan",
                lastname: "Ivanov"
            },
            {
                id: 2,
                name: "Anton",
                lastname: "Sidorov"
            },
            {
                id: 3,
                name: "Shamil",
                lastname: "Kurbonov"
            },
            {
                id: 4,
                name: "Sino",
                lastname: "Sharipov"
            }
        ],

    }
}
