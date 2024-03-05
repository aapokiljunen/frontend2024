import { useEffect } from "react";
import { useState } from "react"

function Recipe() {

    const [recipes, setRecipes] = useState([]);
    const [id, setId] = useState('Chicken');
    const [stateMessage, setStateMessage] = useState('Haetaan');
    const [loading, setLoading] = useState(true);

    const fetchUrl = async () => {
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${id}`)
            const json = await response.json();
            setStateMessage('');
            setRecipes(json.meals);
            setLoading(false);
        } catch (error) {
            setStateMessage('Haku ei onnistunut')
        }
    }

    useEffect(() => { fetchUrl(); }, []);


    return (
        <div>

            {loading ? (<div>{stateMessage}</div>) : (
                <div>
                    {recipes.map(recipe => {
                        return (<div key={recipe.idMeal}>{recipe.strMeal}<br /></div>)
                    })}
                </div>
            )
            }
        </div>
    )

}

export default Recipe