const AMK15407 = require('./amk/167/15407AMK-03')
const AMK15408 = require('./amk/167/15408AMK-03')

const mon = {
    "meterTypes": [
        { "value": "amk", "label": "АМК(мгновенные)" },
        { "value": "arctic", "label": "Арктические станции" },
        { "value": "sensor", "label": "Датчик элек. поля" },
        { "value": "soil", "label": "Влажность почвы" }
    ],
    "arctic": [
        {
            "id": 167,
            "x": "56.4754",
            "y": "85.0541"
        }
    ],
    "arctic167": [
        {
            "serial": "20001ARC",
            "dateStart": "2020-03-18 08:30:00+00",
            "dateEnd": "2020-06-29 11:43:00+00"
        }
    ],

    "amk": [
        {
            "id": 167,
            "x": "56.4754",
            "y": "85.0547"
        },
        {
            "id": 160,
            "x": "56.4813",
            "y": "85.0999"
        },
        {
            "id": 158,
            "x": "56.2282",
            "y": "84.8692"
        },
        {
            "id": 155,
            "x": "54.8577",
            "y": "83.1116"
        },
        {
            "id": 126,
            "x": "56.462",
            "y": "84.9503"
        }
    ],
    "amk167": [
        {
            "serial": "15407AMK-03",
            "dateStart": "2016-05-06 10:37:00+00",
            "dateEnd": "2020-02-25 04:40:00+00"
        },
        {
            "serial": "15408AMK-03",
            "dateStart": "2016-05-06 10:37:00+00",
            "dateEnd": "2016-05-06 10:37:00+00"
        },
        {
            "serial": "15409AMK-03",
            "dateStart": "2016-05-06 10:37:00+00",
            "dateEnd": "2020-02-13 09:26:00+00"
        }
    ],
    "amk160": [
        {
            "serial": "15412AMK-03",
            "dateStart": "2016-10-24 04:11:00+00",
            "dateEnd": "2017-05-25 09:19:01+00"
        },
        {
            "serial": "15413AMK-03",
            "dateStart": "2016-10-24 04:12:00+00",
            "dateEnd": "2017-04-17 17:25:00+00"
        },
        {
            "serial": "15414AMK-03",
            "dateStart": "2016-10-24 04:17:00+00",
            "dateEnd": "2016-12-21 09:03:00+00"
        }
    ],
    "amk158": [
        {
            "serial": "15416AMK-03",
            "dateStart": "2016-11-01 09:36:00+00",
            "dateEnd": "2017-10-23 23:31:00+00"
        },
        {
            "serial": "15417AMK-03",
            "dateStart": "2016-11-01 09:36:00+00",
            "dateEnd": "2017-10-23 23:31:00+00"
        },
        {
            "serial": "15418AMK-03",
            "dateStart": "2016-11-01 09:36:00+00",
            "dateEnd": "2017-10-23 23:31:00+00"
        }
    ],
    "amk155": [
        {
            "serial": "15420AMK-03",
            "dateStart": "2018-07-11 07:01:00+00",
            "dateEnd": "2018-08-20 06:30:00+00"
        },
        {
            "serial": "18411AMK-03",
            "dateStart": "2018-06-27 01:21:00+00",
            "dateEnd": "2018-09-18 04:12:00+00"
        },
        {
            "serial": "18412AMK-03",
            "dateStart": "2018-08-21 10:41:00+00",
            "dateEnd": "2018-09-18 04:13:00+00"
        },
        {
            "serial": "18413AMK-03",
            "dateStart": "2018-05-11 07:23:00+00",
            "dateEnd": "2018-05-13 03:32:00+00"
        },
        {
            "serial": "18422AMK-03",
            "dateStart": "2018-12-20 07:48:00+00",
            "dateEnd": "2018-12-20 08:03:00+00"
        }
    ],
    "amk126": [
        {
            "serial": "18421AMK-03",
            "dateStart": "2019-06-06 08:35:00+00",
            "dateEnd": "2019-12-11 07:40:00+00"
        }
    ],


    "sensor": [
        {
            "id": 160,
            "x": "56.4813",
            "y": "85.0999"
        },
        {
            "id": 105,
            "x": "56.464",
            "y": "84.9352"
        },
        {
            "id": 155,
            "x": "54.8577",
            "y": "83.1116"
        },
        {
            "id": 80,
            "x": "56.4153",
            "y": "84.0738"
        }
    ],
    "sensor160": [
        {
            "serial": "0004EFS",
            "dateStart": "2017-07-18 12:04:00+00",
            "dateEnd": "2017-07-20 03:33:00+00"
        },
        {
            "serial": "16002EFS",
            "dateStart": "2016-11-11 07:52:00+00",
            "dateEnd": "2017-07-18 11:19:00+00"
        }
    ],
    "sensor105": [
        {
            "serial": "0002EFS",
            "dateStart": "2017-10-26 10:01:00+00",
            "dateEnd": "2020-03-23 07:12:00+00"
        },
        {
            "serial": "0005EFS",
            "dateStart": "2017-07-20 04:14:00+00",
            "dateEnd": "2017-10-26 09:49:00+00"
        }
    ],
    "sensor155": [
        {
            "serial": "001EFS",
            "dateStart": "2018-07-26 06:11:00+00",
            "dateEnd": "2018-07-30 07:27:00+00"
        }
    ],
    "sensor80": [
        {
            "serial": "004EFS",
            "dateStart": "2018-10-18 08:41:00+00",
            "dateEnd": "2019-03-20 03:03:10+00"
        },
        {
            "serial": "005EFS",
            "dateStart": "2019-07-30 07:21:00+00",
            "dateEnd": "2020-06-29 04:05:00+00"
        }
    ],
    "soil": [
        {
            "id": 167,
            "x": "56.4754",
            "y": "85.0543"
        }
    ],
    "soil167": [
        {
            "serial": "400002251VLP",
            "dateStart": "2018-09-28 09:04:00+00",
            "dateEnd": "2020-06-29 11:50:00+00"
        },
        {
            "serial": "400002252VLP",
            "dateStart": "2018-09-28 09:04:00+00",
            "dateEnd": "2020-06-29 11:50:00+00"
        }
    ],

    "400002252VLP": [
        {
            "date": "2018-09-28",
            "time": "09:06:00",
            "indexGroup": 9,
            "installDepth": -0.3,
            "soilMoisture": 29.3
        }
    ]
}
const graphData = {
    // amk
    "15407AMK-03": AMK15407(),
    "15408AMK-03": AMK15408(),
}

module.exports = () => {
    return {
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

        // Project Mon (http://mon.imces.ru/)  https://github.com/shamil8/mon
        ...mon,

        ...graphData
    }
}
