import { Grid } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import CharacterCard from '../../Characters/CharacterCard/CharacterCard'

const LocationCharacters = () => {
    let {location} = useParams()
    
    
    const getCharacterFromUrl = async (charUrl) => {
        const char = await fetch(charUrl).then(resp=>resp.json()).then(data=>data)
        return await char
    }
    
    const [characters, setCharacters] = useState([])
    
    const getLocationCharacters = async (locationId) => {
        try {
            const loc = await fetch(`https://rickandmortyapi.com/api/location/${locationId}`).then(resp=>resp.json()).then(data=>data)
            let chars = []
            for(let i = 0 ; i < loc.residents.length; i++){
                chars[i] = await getCharacterFromUrl(loc.residents[i])
            }
            setCharacters(chars)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getLocationCharacters(location)
    }, [])


    return <Grid container spacing={3} justifyContent="center" alignItems="center">
        {characters.map(c => <CharacterCard key={c.id} character={c} />)}
            </Grid>
}

export default LocationCharacters
