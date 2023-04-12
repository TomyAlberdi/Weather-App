import React, { useState } from 'react'
import Skeleton from '@mui/material/Skeleton';
import 'sweetalert2/src/sweetalert2.scss'
import icons from './utils/icons.json'
import Switch from '@mui/material/Switch';
import { pink } from '@mui/material/colors';

const Weather = ({LoadingData,Data}) => {

    const [Celsius, setCelsius] = useState(true)
    const [Kmh, setKmh] = useState(true)
    
    if (LoadingData) {
        return (
            <section className="Weather">
                <Skeleton variant='rectangular' />
            </section>
        )
    } else {
        return (
            <section className="Weather">
                <article className="div1">
                    <h3>Weather in</h3>
                    <h1>{Data.location.name}, {Data.location.country}</h1>
                    <h3>At {Data.location.localtime.substring(11,16)}</h3>
                </article>
                <article className="div2">
                    <div className='textDiv'>
                        <h3>{Data.current.condition.text}</h3>
                    </div>
                    <div className="imgDiv">
                        <i className={icons[Data.current.is_day].iconList[Data.current.condition.code]}></i>
                    </div>
                </article>
                <article className="div3">
                    <div className='textDiv'>
                        <h2>{Celsius ? Data.current.temp_c : Data.current.temp_f}</h2>
                        <span>{Celsius ? "°C" : "°F"}</span>
                    </div>
                    <div className="buttonDiv">
                        <span>F</span>
                        <Switch checked={Celsius} onChange={() => setCelsius(!Celsius)} color="success" /> 
                        <span>C</span>
                    </div>
                </article>
                <article className="div4">
                    <div className="dataDiv">
                        <i className="fa-solid fa-wind"></i>
                        <h3>{Kmh ? Data.current.wind_kph : Data.current.wind_mph} <span>{Kmh ? "km/h" : "mi/h"}</span></h3>
                    </div>
                    <div className="buttonDiv">
                        <span>M</span>
                        <Switch checked={Kmh} onChange={() => setKmh(!Kmh)} color="success" /> 
                        <span>Km</span>
                    </div>
                </article>
                <article className="div5">
                    <i className="fa-solid fa-droplet-percent"></i>
                    <h3>{Data.current.humidity}</h3>
                </article>
                <article className="div6">
                    <i className="fa-solid fa-sun-bright"></i>
                    <h3>{Data.current.uv}</h3>
                </article>
            </section>
        )
    }
}

export default Weather