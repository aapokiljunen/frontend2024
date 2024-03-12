import { useState } from "react";

function RatingListReader({ ratings, info, setInfo }) {

    const [songFilter, setSongFilter] = useState('');
    const [artistFilter, setArtistFilter] = useState('');
    const [reviewerFilter, setReviewerFilter] = useState('');

    const filterSong = (filterValue) => {
        setSongFilter(filterValue);
        setInfo(`Näytetään arvostelut kappaleelle ${filterValue}`);
        setArtistFilter('');
        setReviewerFilter('');

    };

    const filterArtist = (filterValue) => {
        setArtistFilter(filterValue);
        setInfo(`Näytetään arvostelut artistille ${filterValue}`);
        setSongFilter('');
        setReviewerFilter('');

    };

    const filterReviewer = (filterValue) => {
        setReviewerFilter(filterValue);
        setInfo(`Näytetään arvostelut arvostelijalta ${filterValue}`);
        setArtistFilter('');
        setSongFilter('');

    };

    const clearFilters = () => {
        setSongFilter('');
        setArtistFilter('');
        setReviewerFilter('');
        setInfo('');

    }

    const FilterLink = ({ onClick, label, value }) => (
        <a href='#' onClick={() => onClick(value)}>{label}</a>
    );

    if (ratings.length === 0) {
        return (<div>Ei näytettäviä arvosteluita</div>);
    }

    return (
        <div>

            {ratings.map((rating, index) => {
                const showSong = songFilter.length === 0 || rating.song === songFilter;
                const showArtist = artistFilter.length === 0 || rating.artist === artistFilter;
                const showReviewer = reviewerFilter.length === 0 || rating.reviewer === reviewerFilter;

                if (showSong && showReviewer && showArtist) {

                    return (
                        <div key={index}>
                            <p>
                                Kappale: <FilterLink onClick={filterSong} label={rating.song} value={rating.song} /><br />
                                Artisti: <FilterLink onClick={filterArtist} label={rating.artist} value={rating.artist} /><br />
                                Arvostelija: <FilterLink onClick={filterReviewer} label={rating.reviewer} value={rating.reviewer} /><br />
                                Arvostelu: {rating.review}<br />
                            </p>
                        </div>
                    );
                } else {
                    return null;
                }
            })}
            {(songFilter.length > 0 || artistFilter.length > 0 || reviewerFilter.length > 0) &&
                <div><input type='button' value='Tyhjennä suodattimet' onClick={clearFilters} /></div>
            }

        </div>
    );
}

export default RatingListReader;




//filteröinnin logiikkaan haettu apua muiden palveluiden lisäksi chatgpt:ltä. Lopullinen koodi kuitenkin kirjoitettu itse