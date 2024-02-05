function RentbookReader({ rents }) {
    return (
        <div>
            {rents.map(obj => {
                return (
                    <div>
                        <p>
                            Nimi: {obj.nimi}<br />
                            Alkaa: {obj.alkupaiva}<br />
                            Päättyy: {obj.loppupaiva}<br />
                        </p>
                    </div>
                );
            })
            }
        </div>
    );
}

export default RentbookReader  
