import { useEffect, useState } from 'react'
import Axios from 'axios'
import { useQuery } from 'react-query'
import UpcomingItem from './UpcomingItem'

const UpcomingList = ({ moveSlide }) => {

    // API
    var query = `
        query ($id: Int, $page: Int, $perPage: Int, $format: MediaFormat, $status: MediaStatus, $season: MediaSeason, $type: MediaType, $sort: [MediaSort]) {
        Page (page: $page, perPage: $perPage) {
            media (id: $id, sort: $sort, format: $format, type: $type, status: $status, season: $season) {
                id
                startDate {
                    year
                    month
                    day
                }
                title {
                    romaji
                    english
                }
                coverImage {
                    extraLarge
                }
                bannerImage
            }
        }
        }
    `;

    var variables = {
        page: 1,
        perPage: 10,
        format: 'TV',
        type: 'ANIME',
        sort: ['POPULARITY_DESC'],
        status: 'NOT_YET_RELEASED',
        season: 'SPRING'
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
    const { data: upcomingAnimes, isLoading, error, refetch } = useQuery('upcomingData', () => 
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

    // Success
    return (
        <div className="upcomingList" style={{ transform: 'translateX(' + moveSlide + 'vmin)'}}>
            {upcomingAnimes.map((upcoming, key) => {
                return <UpcomingItem key={key} upcoming={upcoming} />
            })}
        </div>
    )
}

export default UpcomingList