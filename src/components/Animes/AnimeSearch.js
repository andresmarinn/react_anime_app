import React from 'react'

const AnimeSearch = ( { setSearchAnime }) => {
    return (
        <div className='animeSearch'>
            <input onChange={ (e) => { setSearchAnime(e.target.value) }}
                id='animeSearchInput' 
                type="text"
                placeholder='Search anime...'
            />
        </div>
    )
}

export default AnimeSearch