import axios from 'axios';
import React, { useEffect, useState } from 'react'
import SelectDropdown from './SelectDropdown';
import { setDrinkList } from '../redux/action/cocktailAction';
import { useDispatch } from 'react-redux';

const drinkTypeList = [
    {
        key: 'c=Ordinary_Drink',
        name: 'Ordinary Drink'
    }, {
        key: 'c=Cocktail',
        name: 'Cocktail'
    }, {
        key: 'a=Alcoholic',
        name: 'Alcoholic'
    }, {
        key: 'a=Non_Alcoholic',
        name: 'Non Alcoholic'
    }, {
        key: 'g=Cocktail_glass',
        name: 'Cocktail Glass'
    }, {
        key: 'g=Champagne_flute',
        name: 'Champagne Flute'
    },
]

const searchTypeList = [
    {
        key: 's=',
        name: 'Name'
    }
]




export default function ActionBar() {

    // const drinkState = useSelector(state => state.drinkReducer)
    const [searchStr, setSearchStr] = useState('');
    const [searchBy, setSearchBy] = useState(searchTypeList[0].key);
    const [showBy, setShowBy] = useState('');
    const dispatch = useDispatch();

    const fetchDrinkType = async (type) => {
        const resp = await axios
            .get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?${type}`)
            .catch(e => {
                console.log('error', e);
            })
        dispatch(setDrinkList(resp.data.drinks));
    }

    const fetchSearchData = async (searchValue) => {
        const resp = await axios
            .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?${searchValue}`)
            .catch(e => {
                console.log('error', e);
            })
        dispatch(setDrinkList(resp.data.drinks));
    }

    const selectChange = (e) => {
        if (e.target.value) fetchDrinkType(e.target.value);
        if (showBy !== 'Filter') setShowBy('Filter');
    }


    const changeSearchType = (e) => {
        setSearchBy(e.target.value)
    }

    const onClickSearch = () => {
        fetchSearchData(searchBy + searchStr);
        if (showBy !== 'Search') setShowBy('Search');
    }

    useEffect(() => {
        fetchDrinkType(drinkTypeList[0].key);
        setShowBy('Filter');
    }, [])

    return (
        <div className='filters v-center'>
            <div>
                <div className='select-text'>Drinks Filter</div>
                <SelectDropdown name='filter' list={drinkTypeList} selectChange={selectChange} />
            </div>
            <div>
                <div className='search-bar-container'>
                    <SelectDropdown name='searchBy' list={searchTypeList} selectChange={changeSearchType} />
                    <input id='search' value={searchStr} onChange={(e) => setSearchStr(e.target.value)} />
                    <button onClick={onClickSearch}>Search</button>
                </div>
                <div className='showing'>List is showing by <b>{showBy}</b></div>
            </div>
        </div>
    )
}
