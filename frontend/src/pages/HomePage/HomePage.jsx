import { Link } from 'react-router';
import "./HomePage.css";


export function HomePage() {
    return (
        <>
        <div className="running-gif-container">
            <img className="running-gif"
            src="https://media.tenor.com/oXE9lcCAK-wAAAAj/running-pixel-art.gif" 
            alt="pixelated running dood gif"
            ></img>

        </div>
            <div className='title'>
                <h1> Hello, this is my RunningWeb Project</h1>
            </div>

            <nav>
                <div className='button-container'>
                        <Link to="/weather" className="weather-button">Weather</Link>
                        <Link to="/gym" className="gym-button">Gym</Link>
                        <Link to="/fitbit" className="fitbit-button">Fitbit</Link>
                </div>
            </nav>

        </>
    );
}