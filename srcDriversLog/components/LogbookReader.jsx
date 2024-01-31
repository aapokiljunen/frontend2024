function LogbookReader({ logbook, name }) {
    return (
        <div>
            <p>
                Nimi: {logbook.laatija} <br />
                Rekisterinumero: {logbook.rekisterinro} <br />
                Matka: {logbook.loppu.lukema - logbook.alku.lukema} kilometriä
            </p>
            <p> Tekijä: {name}</p>
        </div>
    );
}

export default LogbookReader  
