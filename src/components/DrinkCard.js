import React from 'react'
import { useHistory } from 'react-router-dom';


export default function DrinkCard(props) {

    const history = useHistory();

    return (
        <div className='drink-card' onClick={()=>history.push(`/cocktail/${props.cardData.idDrink}`)}>
            <div className='image'>
                <img src={props.cardData.strDrinkThumb} alt={props.cardData.strDrink} />
            </div>
            <div className='drink-name v-center'>
                <div>{props.cardData.strDrink}</div>
            </div>
        </div>
    )
}
