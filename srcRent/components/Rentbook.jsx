import { useState } from "react";
import RentbookReader from "./RentbookReader"

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
    const [rent, setRent] = useState({ name: '', startDate: '', endDate: '' });
    const [info, setInfo] = useState('');

    const addRent = () => {
        if (rent.name.length === 0 || rent.startDate.length === 0 || rent.endDate.length === 0) {
            setInfo('Kenttä tyhjä. Ei voida lisätä vuokraa');
        } else {
            const newRent = { nimi: rent.name, alkupaiva: rent.startDate, loppupaiva: rent.endDate }
            setRents([...rents, newRent]);
            setRent({ name: "", startDate: "", endDate: "" });
            setInfo('Uusi vuokra lisättiin');
        }
    }

    const handleChange = event => {
        setRent({ ...rent, [event.target.name]: event.target.value });
        setInfo('');
    }

    return (
        <div>
            <div name='addForm'>
                <label>
                    <input
                        type='text'
                        placeholder="Nimi"
                        name='name'
                        value={rent.name}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    <input
                        type='text'
                        placeholder="Alkaa"
                        name='startDate'
                        value={rent.startDate}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    <input
                        type='text'
                        placeholder="Päättyy"
                        name='endDate'
                        value={rent.endDate}
                        onChange={handleChange}
                    />
                </label><br />
                <input type='button' value='Lisää vuokra' onClick={addRent} />
                <p style={{ color: "red" }}>{info}</p>
            </div>

            <RentbookReader rents={rents} />
        </div>
    )
};


export default Rentbook