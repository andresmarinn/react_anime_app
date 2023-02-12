
import { addFavorite } from '../../app/store';
import { useDispatch } from 'react-redux';

const AnimeItem = ( { anime } ) => {

    const dispatch = useDispatch();

    const validateFavorite = (anime) => {
        dispatch(addFavorite(anime))
        
    }

    return (
        <div className='animeItem' style={{backgroundImage: 'url(' + anime.coverImage.extraLarge + ')'}}>
            <div className="animeInformation" >
                <span id='animeTitle'>{anime.title.english ? anime.title.english : anime.title.romaji}</span>
                <span id='animeEpisodes'>{anime.episodes ? anime.episodes : null} Episodes</span>
            </div>
            <div className="animeFavorite" onClick={() => {validateFavorite(anime)}}>
                <svg id='animeFavoriteIcon' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                </svg>
            </div>
        </div>
    )
}

export default AnimeItem