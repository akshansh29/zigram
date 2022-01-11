import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const getIngredient = (drinkData) => {
    let i = 1;
    let ingArr = [];
    while (drinkData[`strIngredient${i}`] !== null || drinkData[`strMeasure${i}`] !== null) {
        ingArr.push((drinkData[`strMeasure${i}`] ?? '') + drinkData[`strIngredient${i}`]);
        i++;
    }
    return ingArr;
}

export default function Cocktail() {
    const { drinkId } = useParams();

    const [drinkData, setDrinkData] = useState({});
    const [ingData, setIngData] = useState([])

    const fetchDrinkData = async (id) => {
        const resp = await axios
            .get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
            .catch(e => {
                console.log('error', e);
            })
        console.log(1, resp.data.drinks[0]);
        setDrinkData(resp.data.drinks[0]);
        setIngData(getIngredient(resp.data.drinks[0]));
    }

    useEffect(() => {
        fetchDrinkData(drinkId)
    }, [])
    return (
        <div className='cocktail h-center'>
            <div className='cocktail-card'>
                <div className='p-images-container'>
                    <img src={drinkData.strDrinkThumb} alt={drinkData.strDrink} />
                </div>
                <div className='p-detail'>
                    <div className='p-drink-name'>{drinkData.strDrink}</div>
                    <div className='text-container'>
                        <div>
                            <div> Category : {drinkData.strCategory}</div>
                            <div>Type: {drinkData.strAlcoholic}</div>
                            <div> Glass : {drinkData.strGlass}</div>
                        </div>
                        <div>
                            <div><b>Ingredients</b></div>
                            {ingData.map(ing => <div key={ing}>{ing}</div>)}
                        </div>
                    </div>
                </div>
                <div className='p-sum'>
                    {drinkData.strInstructions}
                </div>
            </div>
        </div>
    )
}
