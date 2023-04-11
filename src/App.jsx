import './sass/App.scss'
import { Link } from 'react-router-dom'
import Weather from './components/Weather'
import { useState } from 'react'

// Links:
// https://rapidapi.com/weatherapi/api/weatherapi-com/
// https://www.weatherapi.com/docs/
// https://www.weatherapi.com/docs/weather_conditions.json
// https://dribbble.com/shots/21084146-Weather-app
// https://mui.com/material-ui/react-skeleton/

function App() {

    const [LoadingData, setLoadingData] = useState(true)
	const [City, setCity] = useState("La Plata")

	const handleKeyPress = (e) => {
		e.key === "Enter" ? handleInput() : null
	}

	const handleInput = () => {
		const input = document.querySelector("#city")
		setCity(input.value)
		input.value = ""
	}
	
	return (
		<div className="App">
			<header>
				<Link to={"http://tomas-alberdi.com"} target='_blank'><img src="/Weather-App/favicon.ico" alt="Link a Portfolio" /></Link>
			</header>
			<main>
				<section className="search">
					<input type="text" name="city" id="city" placeholder="Search city" onKeyDown={handleKeyPress} />
					<button onClick={handleInput}><i className="fa-solid fa-magnifying-glass"></i></button>
				</section>
				<Weather LoadingData={LoadingData} setLoadingData={setLoadingData} City={City} setCity={setCity} />
			</main>
		</div>
	)
}

export default App