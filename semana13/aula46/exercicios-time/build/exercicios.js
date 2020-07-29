"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require("moment");
const allEvents = [
    {
        name: "Reunião",
        description: "Reunião importante",
        startAt: moment("25/06/2020 15:00", "DD/MM/YYYY HH:mm"),
        finishAt: moment("25/06/2020 16:00", "DD/MM/YYYY HH:mm")
    },
    {
        name: "Prova na faculdade",
        description: "Prova importante",
        startAt: moment("26/06/2020 17:00", "DD/MM/YYYY HH:mm"),
        finishAt: moment("26/06/2020 18:00", "DD/MM/YYYY HH:mm")
    }
];
function showEvents(allEvents) {
    return allEvents;
}
;
const resultado = showEvents(allEvents);
console.log(resultado);
//# sourceMappingURL=exercicios.js.map