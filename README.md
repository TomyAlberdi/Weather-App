# Weather-App
Weather App is a personal project built with React and Sass. It works as a real-time dashboard showing weather data for any city in the world.

## Features
* This project uses the [WeatherAPI API](https://www.weatherapi.com/) to obtain the current weather data for a specific city.
* The website defaults to "La Plata, Argentina", but it gives the user the option to search for any other city in the world, throwing an alert error made with [Sweet Alert](https://sweetalert2.github.io/) if the city does not exists.
* The **temperature** and **wind** sections of the webpage have a toggle switch button made with [Material UI](https://mui.com/) that allows the user to switch between Celcius or Fahrenheit. and Km/h or m/h, respectively.
* The background color of the website changes dynamically depending on whether it is day or night in the current city.
* This project is fully responsive in mobile and tablet screens.
* A working demo is deployed with GitHub Page [here](https://tomyalberdi.github.io/Weather-App/)
* The `build` and `deploy` processes are handled automatically with a YAML file located in the `.github/workflows` directory.

## License
This project is licensed under the MIT License.
