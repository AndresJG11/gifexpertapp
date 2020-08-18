import React from 'react'
import { useFetchGifs } from './hooks/useFetchGifs'


import {GifGridItem} from './GifGridItem'

export const GifGrid = ({category}) => {

    const {loading, data:images} = useFetchGifs(category);

    return (
        <>
            <h1 className="animate__animated animate__fadeIn"> {category} </h1>
            { loading && <p>Cargando</p>}
           {<div className="card-grid animate__animated animate__fadeIn">
                {images.map( (img, id) => <GifGridItem key={id} {...img} /> )}
            </div> }
        </>
    )
}
