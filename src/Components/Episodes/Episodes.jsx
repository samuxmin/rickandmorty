import { Grid, IconButton, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'

import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import Swal from 'sweetalert2'
import LoadingPage from '../LoadingPage/LoadingPage'
import EpisodeCard from './EpisodeCard/EpisodeCard'
import useStyles from '../../styles/styles'
import { Button } from '@material-ui/core'

const Episodes = () => {
    const [episodes, setEpisodes] = useState([])
    const [thisPage,setThisPage] = useState(1)

    const classes = useStyles()

    const handlePageChange = (action) => {
        if(action === 'next'){
            if(thisPage >= 3){
                return Swal.fire('This is the last page', 'You cant go forward', 'error')
            }
            setThisPage(thisPage + 1)
        } else if(action === 'prev'){
            if(thisPage <= 1){
                return Swal.fire('This is the first page', 'You cant go back', 'error')
            }
            setThisPage(thisPage - 1)
        }       
    }

    const getEpisodes = async () => {
        try {
            const episodesResp = await fetch(`https://rickandmortyapi.com/api/episode?page=${thisPage}`).then(resp=>resp.json()).then(data=>data)
            setEpisodes(episodesResp.results)
        } catch (error) {
            console.log(error)
        }
    }

useEffect(()=>{
    getEpisodes()
}, [thisPage])

return episodes.length === 0 ? <LoadingPage/> : (
        <>
            <Typography variant='h1' align="center" gutterBottom>Episodes</Typography>
            <Typography variant="h4" align='center' gutterBottom>
                <IconButton color='primary' aria-label="Previous page" onClick={() => {handlePageChange('prev')}}><ArrowBackIcon /></IconButton>
                Page {thisPage}
                <IconButton color='primary' aria-label="Next page" onClick={() => {handlePageChange('next')}}><ArrowForwardIcon /></IconButton>
            </Typography>
            <Grid container spacing={3} justifyContent="center" alignItems="center">
                {episodes.map(e=> <EpisodeCard key={e.id} episode={e} />)}
            </Grid>
            <div className={classes.centerContent}>
               {thisPage !==1 && <IconButton aria-label="Previous page" color='primary' onClick={() => {handlePageChange('prev')}}><ArrowBackIcon /></IconButton>}
                    <Button onClick={() => {setThisPage(1)}}>1</Button>
                    <Button onClick={() => {setThisPage(2)}}>2</Button>
                    <Button onClick={() => {setThisPage(3)}}>3</Button>
                {thisPage!==3 && <IconButton aria-label="Next page" color='primary' onClick={() => {handlePageChange('next')}}><ArrowForwardIcon /></IconButton>}
            </div>
        </>
    )
}

export default Episodes
