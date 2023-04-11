import React from 'react'
import Skeleton from '@mui/material/Skeleton';
import 'sweetalert2/src/sweetalert2.scss'

const Weather = ({LoadingData,Data}) => {
    
    if (LoadingData) {
        return (
            <section className="Weather">
                <Skeleton variant='rectangular' />
            </section>
        )
    } else {
        return (
            <section className="Weather">
                <article className="name div1">
                    <h3>Weather in</h3>
                    <h1>{Data.location.name}, {Data.location.country}</h1>
                    <h3>At {Data.location.localtime.substring(11,16)}</h3>
                </article>
                <article className="icon div2">
                    <h3>{Data.current.condition.text}</h3>
                    <img src={
                        Data.current.condition.icon.substring(28)
                    } />
                </article>
                <article className="temp div3">
                    <h2>{Data.current.temp_c} <span>C</span></h2>
                </article>
                <article className="wind div4">
                    <i className="fa-solid fa-wind"></i>
                    <h3>{Data.current.wind_kph} <span>km/h</span></h3>
                </article>
                <article className="humid div5">
                    <h2>himidity</h2>
                </article>
                <article className="uv div6">
                    <h2>uv rays</h2>
                </article>
            </section>
        )
    }
}

export default Weather