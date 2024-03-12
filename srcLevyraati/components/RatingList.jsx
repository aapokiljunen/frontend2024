import { useState } from "react";
import RatingListReader from "./RatingListReader"
import NewRating from "./NewRating";

function RatingList() {

    const [info, setInfo] = useState('');
    const [ratings, setRatings] = useState([
        {
            song: "Piha ilman sadettajaa",
            artist: "Zen Café",
            reviewer: "Aapo",
            review: "Ok+",
        },
        {
            song: "Rysty",
            artist: "Zen Café",
            reviewer: "Aapo",
            review: "Ok-",
        },
        {
            song: "Piha ilman sadettajaa",
            artist: "Zen Café",
            reviewer: "Samu",
            review: "Ei niin hyvä",
        },
    ]);

    return (
        <div>
            <NewRating ratings={ratings} setRatings={setRatings} info={info} setInfo={setInfo} />

            <RatingListReader ratings={ratings} info={info} setInfo={setInfo} />
        </div>
    )
};


export default RatingList;