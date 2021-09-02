import { Grid, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchIndividualCharacters } from '../../../helpers/fetch'

import CharacterCard from '../../Characters/CharacterCard/CharacterCard'
import LoadingPage from '../../LoadingPage/LoadingPage'

const EpisodeCharacters = () => {
    let {episode} = useParams()
    
      
    const [characters, setCharacters] = useState([])
    const [episodeES, setEpisodeES] = useState('')
    
    const getEpisodeCharacters = async ()=> {
        let data = await fetchIndividualCharacters('episode', episode)
        setCharacters(data[0])
        setEpisodeES(data[1])
    }
    useEffect(() => {
        getEpisodeCharacters()
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [episode])


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
