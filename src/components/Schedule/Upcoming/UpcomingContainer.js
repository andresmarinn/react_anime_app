import { useState } from 'react';

// Components
import UpcomingList from './UpcomingList'

const UpcomingContainer = () => {

    // Anime Slider
    // Move Side
    const [moveSlide, setMoveSlide] = useState(0);
    const [lastSlide, setLastSlide] = useState(0);
    const [positionSlide, setPositionSlide] = useState(0);

    var bgNext,
        bgPrev,
        peNext,
        pePrev;

    const nextSlide = () => {
        setPositionSlide(positionSlide+1);
        if (positionSlide == 4){
            setLastSlide(moveSlide);
            setMoveSlide(moveSlide-21.5);
        } else {
            setMoveSlide(moveSlide-27);
        }
    }

    const prevSlide = () => {
        setPositionSlide(positionSlide-1);
        if (positionSlide > 4){
            setMoveSlide(lastSlide);
        } else {
            setMoveSlide(moveSlide+27);
        }
    }

    if (positionSlide == 0){
        bgPrev = 'rgba(0, 0, 0, 0.50)';
        pePrev = 'none';
    }

    if (positionSlide == 5){
        bgNext = 'rgba(0, 0, 0, 0.50)';
        peNext = 'none';
    }

    return (
        <div className='upcomingContainer'>
            <div className="upcomingHeader">
                <h2>Upcoming Season</h2>
                <div className="animeSliders">
                    <svg className='prevAnime-icon' style={{ backgroundColor: bgPrev, pointerEvents: pePrev }} onClick={prevSlide} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                    </svg>
                    <svg className='nextAnime-icon' style={{ backgroundColor: bgNext, pointerEvents: peNext  }} onClick={nextSlide} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                </div>
            </div>
            <UpcomingList moveSlide={moveSlide}/>
        </div>
    )
}

export default UpcomingContainer