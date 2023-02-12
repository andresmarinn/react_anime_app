// Components
import AiringContainer from './Airing/AiringContainer'
import UpcomingContainer from './Upcoming/UpcomingContainer'

const Schedule = () => {
    return (
        <section className='scheduleContainer'>
            <AiringContainer/>
            <UpcomingContainer/>
        </section>
    )
}

export default Schedule