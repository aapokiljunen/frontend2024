import { useEffect } from "react";
import { useState } from "react"

function App() {

    const [user, setUser] = useState({});
    const [id, setId] = useState('5');
    const [stateMessage, setStateMessage] = useState('');
    const [loading, setLoading] = useState(true);

    const fetchUrl = async () => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            const json = await response.json();
            setStateMessage('');
            setLoading(false);
            setUser(json);
            console.log(json)
        } catch (error) {
            setStateMessage('Haku ei onnistunut')
        }
    }

    useEffect(() => { fetchUrl(); }, []);


    return (
        <div>
            
            {loading ? (<div>{stateMessage}</div>) : (
                <div>
                    Nimi: {user.name} <br />
                    Käyttäjä: {user.username} <br />
                    Kaupunki: {user.address.city} <br />
                </div>
            )
            }
        </div>
    )

}

export default App


