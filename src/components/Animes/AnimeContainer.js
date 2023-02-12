// App
import { useState } from 'react'

// Components
import AnimeList from './AnimeList'
import AnimeSearch from './AnimeSearch'

const AnimeContainer = () => {

  const [searchAnime, setSearchAnime] = useState('');

  return (
    <div className='animeContainer '>
      <AnimeSearch setSearchAnime={setSearchAnime}/>
      <AnimeList  searchAnime={searchAnime} />
      {/* <div className='favoriteAdded'>
        <svg id='favoriteAddedIcon' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
          <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zM4.756 4.566c.763-1.424 4.02-.12.952 3.434-4.496-1.596-2.35-4.298-.952-3.434zm6.559 5.448a.5.5 0 0 1 .548.736A4.498 4.498 0 0 1 7.965 13a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .548-.736h.005l.017.005.067.015.252.055c.215.046.515.108.857.169.693.124 1.522.242 2.152.242.63 0 1.46-.118 2.152-.242a26.58 26.58 0 0 0 1.109-.224l.067-.015.017-.004.005-.002zm-.07-5.448c1.397-.864 3.543 1.838-.953 3.434-3.067-3.554.19-4.858.952-3.434z"/>
        </svg>
        <span>Favorite Added!</span>
      </div>
      <div className='favoriteWarning'>
        <svg id='favoriteWariningIcon'  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.553.553 0 0 1-1.1 0L7.1 4.995z"/>
        </svg>
        <span>Favorite Added Already !</span>
      </div>
      <div className='favoriteRemoved'>
        <svg id='favoriteRemovedIcon' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm-2.715 5.933a.5.5 0 0 1-.183-.683A4.498 4.498 0 0 1 8 9.5a4.5 4.5 0 0 1 3.898 2.25.5.5 0 0 1-.866.5A3.498 3.498 0 0 0 8 10.5a3.498 3.498 0 0 0-3.032 1.75.5.5 0 0 1-.683.183zM10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8z"/>
        </svg>
        <span>Favorite Removed!</span>
      </div> */}
    </div>
  )
}

export default AnimeContainer