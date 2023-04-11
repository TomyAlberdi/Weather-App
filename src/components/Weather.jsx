import React, { useEffect, useState } from 'react'
import Skeleton from '@mui/material/Skeleton';
import axios from 'axios'

const Weather = () => {

    const city = "La Plata"

    const [LoadingData, setLoadingData] = useState(true)
    const [Data, setData] = useState()
    useEffect(() => {
        const aux = {
            method: "GET",
            url: `https://weatherapi-com.p.rapidapi.com/current.json`,
            params: {
                q: city
            },
            headers: {
                'X-RapidAPI-Key': '24cd8d7c43mshe6c7b8423ae4f79p137301jsn8b17bf42ce88',
                'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
            }
        }
        axios.request(aux)
        .then(res => setData(res.data))
    }, [LoadingData])
    
    if (LoadingData) {
        return (
            <section className="Weather">
                <Skeleton variant='rectangular' />
            </section>
        )
    } else {
        return (
            <section className="Weather">
                <h1>test</h1>
            </section>
        )
    }
}

export default Weather