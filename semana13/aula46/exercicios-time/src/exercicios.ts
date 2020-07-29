import * as moment from "moment"

type event = {
    name: string,
    description: string,
    startAt: moment.Moment,
    finishAt: moment.Moment 
}

const allEvents: event[] = [

    {
        name: "Reunião",
        description: "Reunião importante",
        startAt: moment("25/06/2020 15:00", "DD/MM/YYYY HH:mm" ),
        finishAt: moment("25/06/2020 16:00", "DD/MM/YYYY HH:mm")
    },

    {   
        name: "Prova na faculdade",
		description: "Prova importante",
		startAt: moment("26/06/2020 17:00", "DD/MM/YYYY HH:mm"),
	 	finishAt: moment("26/06/2020 18:00", "DD/MM/YYYY HH:mm")

    }
]

    
function showEvents (event: event[]): event[] {
     
    return event
  

  };

const resultado: event[] = showEvents(allEvents)

console.log(resultado)
