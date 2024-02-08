import { useState } from "react";
import Rentbook from "./Rentbook";

function NewRent({ rents, setRents }) {

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

    const handleChange = (e) => {
        setRent({ ...rent, [e.target.name]: e.target.value });
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
                        onChange={(e) => handleChange(e)}
                    />
                </label>
                <label>
                    <input
                        type='text'
                        placeholder="Alkaa"
                        name='startDate'
                        value={rent.startDate}
                        onChange={(e) => handleChange(e)}
                    />
                </label>
                <label>
                    <input
                        type='text'
                        placeholder="Päättyy"
                        name='endDate'
                        value={rent.endDate}
                        onChange={(e) => handleChange(e)}
                    />
                </label><br />
                <input type='button' value='Lisää vuokra' onClick={addRent} />
                <p style={{ color: "red" }}>{info}</p>
            </div>
        </div>
    )
};

export default NewRent;