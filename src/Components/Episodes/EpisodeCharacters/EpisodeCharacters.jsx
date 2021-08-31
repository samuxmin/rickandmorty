import { Grid, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import CharacterCard from '../../Characters/CharacterCard/CharacterCard'
import LoadingPage from '../../LoadingPage/LoadingPage'

const EpisodeCharacters = () => {
    let {episode} = useParams()
    
    
    const getCharacterFromUrl = async (charUrl) => {
        const char = await fetch(charUrl).then(resp=>resp.json()).then(data=>data)
        return await char
    }
    
    const [characters, setCharacters] = useState([])
    const [episodeES, setEpisodeES] = useState('')
    
    const getEpisodeCharacters = async (episodeId) => {
        let chars = []
        try {
            const ep = await fetch(`https://rickandmortyapi.com/api/episode/${episodeId}`).then(resp=>resp.json()).then(data=>data)
            setEpisodeES(ep.episode)
            for(let i = 0 ; i < ep.characters.length; i++){
                chars[i] = await getCharacterFromUrl(ep.characters[i])
            }
            setCharacters(chars)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getEpisodeCharacters(episode)
    }, [])


    return characters.length === 0 
    ? <LoadingPage/> 
    :<><Typography align='center' variant='h3' gutterBottom>
    {episodeES} Characters
    </Typography> 
     <Grid container spacing={3} justifyContent="center" alignItems="center">
        {characters.map(c => <CharacterCard key={c.id} character={c} />)}
            </Grid>
            </>
}

export default EpisodeCharacters
