import { Grid, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import LocationCard from './LocationCard/LocationCard'


const Locations = () => {
    const [locations, setLocations] = useState([])
    const getLocations = async () => {
        try {
            const locationsResp = await fetch('https://rickandmortyapi.com/api/location').then(resp=>resp.json()).then(data=>data)
            console.log(locationsResp)
            setLocations(locationsResp.results)
        } catch (error) {
            console.log(error)
        }
    }

useEffect(()=>{
    getLocations()
}, [])

    return (
        <>
            <Typography variant='h2' align="center" gutterBottom>Locations</Typography>
            <Grid container spacing={3} justifyContent="center" alignItems="center">
                {locations.map(l=> <LocationCard key={l.id} location={l} />)}
            </Grid>
        </>
    )
}

export default Locations
