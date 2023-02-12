import React from 'react'

const UpcomingItem = ( { upcoming } ) => {
    return (
    <div className='upcomingItem' style={{backgroundImage: 'url(' + upcoming.coverImage.extraLarge + ')'}}>
        <div className="upcomingInformation" >
            <span id='upcomingDate'>{upcoming.startDate.year && upcoming.startDate.month && upcoming.startDate.day ? upcoming.startDate.year +"/"+ upcoming.startDate.month +"/"+ upcoming.startDate.day : "Spring" }</span>
            <span id='upcomingTitle'>{upcoming.title.english ? upcoming.title.english : upcoming.title.romaji}</span>
        </div>
    </div>
    )
}

export default UpcomingItem