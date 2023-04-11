import './sass/App.scss'
import { Link } from 'react-router-dom'
import Weather from './components/Weather'
import { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import axios from 'axios'

// Links:
// https://rapidapi.com/weatherapi/api/weatherapi-com/
// https://www.weatherapi.com/docs/
// https://www.weatherapi.com/docs/weather_conditions.json
// https://dribbble.com/shots/21084146-Weather-app
// https://mui.com/material-ui/react-skeleton/

function App() {

    const [LoadingData, setLoadingData] = useState(true)
	const [City, setCity] = useState("La Plata")
	const [Data, setData] = useState()
    useEffect(() => {
        const aux = {
            method: "GET",
            url: `https://weatherapi-com.p.rapidapi.com/current.json`,
            params: {
                q: City
            },
            headers: {
                'X-RapidAPI-Key': '24cd8d7c43mshe6c7b8423ae4f79p137301jsn8b17bf42ce88',
                'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
            }
        }
        axios.request(aux)
        .then(res => {
            setData(res.data)
            setLoadingData(false)
        })
        .catch(error => {
            Swal.fire({
                icon: 'error',
                title: 'Weather not available',
                text: `Error: ${error.response.data.error.message}`,
                confirmButtonColor: "#EB455F",
            })
        })
    }, [LoadingData, City])

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
					<input type="text" name="city" id="city" placeholder="Search city" onKeyDown={(e) => {
						e.key === "Enter" ? handleInput() : null
					}} />
					<button onClick={handleInput}><i className="fa-solid fa-magnifying-glass"></i></button>
				</section>
				<Weather LoadingData={LoadingData} setLoadingData={setLoadingData} City={City} setCity={setCity} Data={Data} />
			</main>
		</div>
	)
}

export default App