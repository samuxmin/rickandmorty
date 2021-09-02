import { Grid, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchIndividualCharacters } from '../../../helpers/fetch'

import CharacterCard from '../../Characters/CharacterCard/CharacterCard'
import LoadingPage from '../../LoadingPage/LoadingPage'

const LocationCharacters = () => {
    let {location} = useParams()
    
    

    const [characters, setCharacters] = useState([])
    const [locationName, setLocationName] = useState('')
    
    const getLocationCharacters = async ()=> {
        let data = await fetchIndividualCharacters('location', location)
        setCharacters(data[0])
        setLocationName(data[1])
    }
  
    useEffect(() => {
        getLocationCharacters()
    }, [location])


    return characters.length === 0 
    ? <LoadingPage/> 
    :<>
    <Typography align='center' variant='h3' gutterBottom>
        {locationName} Characters
    </Typography> 
    <Grid container spacing={3} justifyContent="center" alignItems="center">
        {characters.map(c => <CharacterCard key={c.id} character={c} />)}
            </Grid></>
}

export default LocationCharacters
