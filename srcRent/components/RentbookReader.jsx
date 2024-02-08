function RentbookReader({ rents }) {
    if (rents.lengt === 0) {
        return (<div>Ei näytettäviä vuokria</div>);
    }
    return (
        <div>
            {rents.map(rent => {
                return (
                    <div>
                        <p key={rent.id}>
                            Nimi: {rent.nimi}<br />
                            Alkaa: {rent.alkupaiva}<br />
                            Päättyy: {rent.loppupaiva}<br />
                        </p>
                    </div>
                );
            })
            }
        </div>
    );
}

export default RentbookReader;