import { useQuery } from 'react-query'
import Axios from 'axios'

// Components
import AnimeItem from "./AnimeItem"

const AnimeList = ( { searchAnime }) => {

    // API
    var query = `
    query ($id: Int, $page: Int, $perPage: Int, $format: MediaFormat, $type: MediaType, $sort: [MediaSort], $episodes_greater: Int) {
    Page (page: $page, perPage: $perPage) {
        media (id: $id, sort: $sort, format: $format, type: $type, episodes_greater: $episodes_greater) {
        id
        title {
            romaji
            english
        }
        coverImage {
            extraLarge
        }
        bannerImage
        episodes
        }
    }
    }
    `;

    var variables = {
    page: 1,
    perPage: 100,
    format: 'TV',
    type: 'ANIME',
    sort: ["TRENDING_DESC"],
    episodes_greater: 1
    };

    // Configuración API
    var url = 'https://graphql.anilist.co',
    options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        data: {
            query: query,
            variables: variables
        }
    };

    // API Request
    const { data: animes, isLoading, error, refetch } = useQuery('animeData', () => 
        Axios(url, options)
        .then(data => data.data.data.Page.media)
    );

    // Anime Search
    const animesSearch = animes?.filter(anime => anime.title.romaji.toLowerCase().includes(searchAnime.toLowerCase()));

    // Loading
    if (isLoading) {
        return (            
            <div className='animeLoading'>
                <div className="lds-ellipsis">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        )
    }

    // Error
    if (error) {
        return <h1>Something went wrong!</h1>
    }

    // Success
    return (
        <div className='animeList'>
            {animesSearch.map((anime, key) => {
                return <AnimeItem key={key} anime={anime}/>
            })}
        </div>
    )
}

export default AnimeList