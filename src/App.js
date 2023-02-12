import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { createContext } from "react"

// Components
import AnimeContainer from "./components/Animes/AnimeContainer"
import FavoriteContainer from "./components/Favorites/FavoriteContainer"
import Navigation from './components/Navigation';
import Schedule from './components/Schedule/ScheduleMain';
import Home from './components/Home';

export const AnimesContext = createContext();

function App() {

    return (
        <div className="App">
            <AnimeContainer/>
            <main>
                <Router>
                    <Navigation/>
                    <Routes>
                        <Route path='/favorites' element={<FavoriteContainer/>}/>
                        <Route path='/' element={<Schedule/>}/>
                        <Route path='*' element={<p>Not Found</p>}/>
                    </Routes>
                </Router>
            </main>
        </div>
    );
}

export default App;
