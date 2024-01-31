import LogbookReader from "./LogbookReader"

const ajopaivakirja = {
    rekisterinro: "XYZ-123",
    laatija: "Risto Reipas",
    alku: {
        lukema: "32500",
        lahtoaika: "13:30",
        paiva: "2023-01-27",
        paikka: "Ratapihantie 13, Helsinki",
    },
    loppu: {
        lukema: "32510",
        loppuaika: "13:50",
        paiva: "2023-06-27",
        paikka: "Hietakummuntie 1, Helsinki",
    }
};

function Logbook() {
    return (
        <LogbookReader logbook={ajopaivakirja} name={'Aapo Kiljunen'} />
    )
};


export default Logbook