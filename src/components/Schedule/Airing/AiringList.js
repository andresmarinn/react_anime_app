import React from 'react'
import AiringItem from './AiringItem'
import Axios from 'axios';
import { useQuery } from 'react-query';

const AiringList = ( { moveSlide } ) => {

    // API
    var query = `
        query ($id: Int, $page: Int, $perPage: Int, $format: MediaFormat, $status: MediaStatus, $type: MediaType, $sort: [MediaSort]) {
        Page (page: $page, perPage: $perPage) {
            media (id: $id, sort: $sort, format: $format, type: $type, status: $status) {
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
                nextAiringEpisode {
                    episode
                    timeUntilAiring
                }
            }
        }
        }
    `;

    var variables = {
        page: 1,
        perPage: 10,
        format: 'TV',
        type: 'ANIME',
        sort: ['TRENDING_DESC'],
        status: 'RELEASING'
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
    const { data: airingAnimes, isLoading, error, refetch } = useQuery('airingData', () => 
        Axios(url, options)
        .then(data => data.data.data.Page.media)
    );

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

    return (
        <div className='airingList' style={{ transform: 'translateX(' + moveSlide + 'vmin)'}}>
            {airingAnimes?.map((airing, key) => {
                if (airing.nextAiringEpisode) {
                    return <AiringItem key={key} airing={airing}/>
                }
            })}
        </div>
    )
}

export default AiringList