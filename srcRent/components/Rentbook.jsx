import { useState } from "react";
import RentbookReader from "./RentbookReader"
import NewRent from "./NewRent";

function Rentbook() {
    const [rents, setRents] = useState([
        {
            nimi: "Virtanen Matti",
            alkupaiva: "2023-06-01",
            loppupaiva: "2023-06-30",
        },
        {
            nimi: "Laaksonen Lisaa",
            alkupaiva: "2023-06-26",
            loppupaiva: "2023-07-27",
        },
        {
            nimi: "Korhonen Maija",
            alkupaiva: "2023-08-03",
            loppupaiva: "2023-08-30",
        },
    ]);

    return (
        <div>
            <NewRent rents={rents} setRents={setRents}/>

            <RentbookReader rents={rents}  />
        </div>
    )
};


export default Rentbook;