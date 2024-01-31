function Travel({ travel, date }) {
    return (
        <div>
            <p>
                Otsikko: {travel.otsikko} <br />
                Päivä: {travel.paiva}<br />
                Paikka: {travel.paikka}<br />
                Sää: {travel.saa}<br />
                Kuvaus: {travel.kuvaus}
            </p>
            <p>Tehty: {date}</p>
        </div>
    );
}

export default Travel;