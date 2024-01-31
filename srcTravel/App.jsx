import Travel from "./components/Travel"

const travel = {
    id: 1,
    otsikko: 'Lomalla',
    paiva: '30.1.2024',
    paikka: 'Lohja',
    saa: 'Aurinkoista, 2',
    kuvaus: 'Lomalla Lohjalla'
};

function App() {

    return (
        <Travel travel={travel} date={'30.1.2024'}/>
    )
};

export default App
