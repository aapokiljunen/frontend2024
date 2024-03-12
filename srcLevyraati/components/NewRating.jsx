import { useState } from "react";

function NewRating({ ratings, setRatings, info, setInfo }) {

    const [rating, setRating] = useState({ song: '', reviewer: '', review: '' });


    const addRating = () => {
        if (rating.song.length === 0 || rating.reviewer.length === 0 || rating.review.length === 0) {
            setInfo('Kenttä tyhjä. Ei voida lisätä arvostelua');
        } else {
            const newRating = { song: rating.song, artist: rating.artist, reviewer: rating.reviewer, review: rating.review };
            setRatings([...ratings, newRating]);
            setRating({ song: '', artist: '', reviewer: '', review: '' });
            setInfo('Uusi arvostelu lisättiin');
        }
    }

    const handleChange = (e) => {
        setRating({ ...rating, [e.target.name]: e.target.value });
        setInfo('');
    }

    const inputStyle = {
        marginRight: 5,
        marginBottom: 5
    };

    return (
        <div>
            <div name='addForm'>
                <input
                    type='text'
                    placeholder='Kappale'
                    name='song'
                    value={rating.song}
                    onChange={(e) => handleChange(e)}
                    style={inputStyle}
                />
                <input
                    type='text'
                    placeholder='Artisti'
                    name='artist'
                    value={rating.artist}
                    onChange={(e) => handleChange(e)}
                    style={inputStyle}
                />
                <input
                    type='text'
                    placeholder='Arvostelija'
                    name='reviewer'
                    value={rating.reviewer}
                    onChange={(e) => handleChange(e)}
                    style={inputStyle}
                />
                <br />
                <input
                    type='text'
                    placeholder='Arvostelu'
                    name='review'
                    value={rating.review}
                    onChange={(e) => handleChange(e)}
                    style={{ width: 477, marginBottom: 5 }}
                /><br />
                <input type='button' value='Lisää arvostelu' onClick={addRating} />
                <p style={{ color: 'red' }}>{info}</p>
            </div>
        </div>
    )



};

export default NewRating;