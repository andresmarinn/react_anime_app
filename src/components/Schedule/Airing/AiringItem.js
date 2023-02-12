const AiringItem = ( { airing } ) => {
    
    var airingSeconds = parseInt(airing.nextAiringEpisode.timeUntilAiring),
        airingMinutes = Math.floor(airingSeconds / 60),
        airingHours = airingMinutes / 60,
        airingDays = parseInt(airingHours / 24),
        airingDaysHours = airingHours - (airingDays * 24),
        airingHoursMinutes = parseInt((airingDaysHours - parseInt(airingDaysHours)) * 60);

    return (
        <div className='airingItem' style={{backgroundImage: 'url(' + airing.coverImage.extraLarge + ')'}}>
            <div className="airingInformation" >
            <span id='airingEpisode'>Episode {airing.nextAiringEpisode.episode}</span>
                <span id='airingTitle'>{airing.title.english ? airing.title.english : airing.title.romaji}</span>
                <span id='airingTime'>{airingDays ? airingDays + 'd' : ''}  {parseInt(airingDaysHours) ? parseInt(airingDaysHours) + 'h' : ''} {airingHoursMinutes ? parseInt(airingHoursMinutes) + 'min' : ''}</span>
            </div>
        </div>
    )
}

export default AiringItem