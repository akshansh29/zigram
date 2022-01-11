import React from 'react';
import { useSelector } from 'react-redux';
import ActionBar from '../components/ActionBar';
import DrinkCard from '../components/DrinkCard';


export default function Home() {
    const state = useSelector(state => state.drinkReducer.drinkesList);
    console.log(1, state);
    return (
        <>
            <ActionBar />
            <div className='home h-center'>
                <div className='drink-container'>
                    {state?.length  ? state.map(listData => <DrinkCard key={listData.idDrink} cardData={listData} />) : <></>}
                </div>
            </div>
        </>

    )
}
