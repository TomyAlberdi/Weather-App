import React, { useEffect, useState } from 'react'
import Skeleton from '@mui/material/Skeleton';
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'
import axios from 'axios'

const Weather = ({LoadingData,setLoadingData,City}) => {

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
        })
        .catch(error => {
            Swal.fire({
                icon: 'error',
                title: 'Weather not available',
                text: `Error: ${error.response.data.error.message}`,
                confirmButtonColor: "#EB455F",
            })
        })
        setLoadingData(false)
    }, [LoadingData, City])
    
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