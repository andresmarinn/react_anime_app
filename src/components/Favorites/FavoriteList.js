import React from 'react'
import FavoriteItem from './FavoriteItem'

import { selectFavorites } from '../../app/store';
import { useSelector } from 'react-redux';

const FavoriteList = () => {
    const favorites = useSelector(selectFavorites);

    return (
        <div className='favoriteList '>
            {favorites.map((favorite, key) => {
                return <FavoriteItem key={key} favorite={favorite}/>
            })}
        </div>
    )
}

export default FavoriteList