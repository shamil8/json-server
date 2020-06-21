module.exports = () => {
    return {
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
            },
            {
                name: "afadsf",
                company: "sadfasdf",
                address: "asdf",
                date: "2020-02-03T17:00:00.000Z",
                type: "АИ-92",
                id: 336,
                isDelete: false
            },
            {
                name: "adsfsadf",
                company: "asdfasdf",
                address: "adsfasdf",
                date: "2020-02-03T17:00:00.000Z",
                type: "АИ-95",
                id: 337,
                isDelete: false
            },
            {
                name: "BlaBLa",
                company: "Idigo",
                address: "TOmski",
                date: "2020-02-12T17:00:00.000Z",
                type: "АИ-95",
                id: 338,
                isDelete: false
            },
            {
                name: "LLLL",
                company: "БлаБла",
                address: "ваыпыва",
                date: "2020-02-11T17:00:00.000Z",
                type: "АИ-92",
                id: 339,
                isDelete: false
            },
            {
                name: "asdfadsf",
                company: "asdfasdf",
                address: "asdf",
                date: "2020-02-12T17:00:00.000Z",
                id: 340,
                isDelete: false
            },
            {
                name: "sfdgsdf",
                company: "gsdfgsdf",
                address: "gsdfg",
                date: "2020-03-02T17:00:00.000Z",
                isDelete: false,
                id: 342
            }
        ],
        cars: [
            {
                mark: "BMW M3",
                type: "АИ-92",
                id: 1,
                number: "222 DSA",
                isDelete: false
            },
            {
                mark: "Что-то или кто-то",
                number: "212 CDD",
                type: "АИ-92",
                id: 2,
                isDelete: false
            },
            {
                type: "АИ-92",
                date: "2020-02-05T17:00:00.000Z",
                name: "sdaf",
                mark: "Versedess",
                number: "324 FDD",
                id: 3,
                isDelete: false
            },
            {
                mark: "BMD ded",
                number: "333 dfd",
                type: "АИ-95",
                id: 4,
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
            },
            {
                mark: "LADA 2",
                number: "232 2337",
                name: "Станция 337",
                type: "АИ-95",
                quantity: 23,
                address: "г. Москва",
                date: "2020-02-02",
                id: 4
            }
        ]
    }
}
