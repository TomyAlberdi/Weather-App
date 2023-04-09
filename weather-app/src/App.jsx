import './sass/App.scss'
import { Link } from 'react-router-dom'
import Weather from './components/Weather'

// Links:
// https://rapidapi.com/weatherapi/api/weatherapi-com/
// https://www.weatherapi.com/docs/
// https://www.weatherapi.com/docs/weather_conditions.json
// https://dribbble.com/shots/21084146-Weather-app

function App() {
	return (
		<div className="App">
			<header>
				<Link to={"http://tomas-alberdi.com"} target='_blank'><img src="/favicon.ico" alt="Link a Portfolio" /></Link>
			</header>
			<main>
				<section className="search">
					<input type="text" name="city" id="city" placeholder='Search a city' />
					<button><i className="fa-solid fa-magnifying-glass"></i></button>
				</section>
				<Weather />
			</main>
		</div>
	)
}

export default App