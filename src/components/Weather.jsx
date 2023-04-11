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
            </section>
        )
    }
}

export default Weather