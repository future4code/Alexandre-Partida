"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require("moment");
moment.locale("pt-br");
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
const showEvents = (events) => {
    events.forEach((item) => {
        const name = item.name;
        const description = item.description;
        const start = item.startAt.format("dddd[,] DD [de] MMMM [de] YYYY[,] HH:mm");
        const finish = item.finishAt.format("dddd[,] DD [de] MMMM [de] YYYY[,] HH:mm");
        console.log("Nome: ", name);
        console.log("Horário de início: ", start);
        console.log("Horário de fim: ", finish);
        console.log("Descrição: ", description);
    });
};
showEvents(allEvents);
//# sourceMappingURL=exercicios.js.map