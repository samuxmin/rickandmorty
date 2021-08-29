import { Grid, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import CharacterCard from './CharacterCard/CharacterCard'


const Characters = () => {
    const [characters, setCharacters] = useState([])
    const getCharacters = async () => {
        try {
            const chars = await fetch('https://rickandmortyapi.com/api/character').then(resp=>resp.json()).then(data=>data)
            setCharacters(chars.results)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getCharacters()
    }, [])

    return (
        <>
            <Typography variant='h2' align="center" gutterBottom>Characters</Typography>
            <Grid container spacing={3} justifyContent="center" alignItems="center">
                {characters.map(c=> <CharacterCard key={c.id} character={c} />)}
            </Grid>
        </>
    )
}

export default Characters
