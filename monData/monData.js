const arctic = require('./arctic/arctic')()
const amk = require('./amk/amk')()
const sensor = require('./sensor/sensor')()
const soil = require('./soil/soil')()

module.exports = () => {
    return {
        "meterTypes": [
            { "value": "amk", "label": "АМК(мгновенные)" },
            { "value": "arctic", "label": "Арктические станции" },
            { "value": "sensor", "label": "Датчик элек. поля" },
            { "value": "soil", "label": "Влажность почвы" }
        ],

        ...arctic,  // АМК(мгновенные)

        ...amk,     // Арктические станции

        ...sensor,  // Датчик элек. поля

        ...soil,  // Влажность почвы
    }
}
