import { Grid, IconButton, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'

import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import LoadingPage from '../LoadingPage/LoadingPage'
import EpisodeCard from './EpisodeCard/EpisodeCard'
import useStyles from '../../styles/styles'
import { Button } from '@material-ui/core'
import { fetchCardInfo } from '../../helpers/fetch'
import { Link, useHistory, useParams } from 'react-router-dom'
import { handlePageChange } from '../../helpers/handlePageChange'

const Episodes = () => {
    const [episodes, setEpisodes] = useState([])
    const { page } = useParams()
    let history = useHistory()
    const [thisPage, setThisPage] = useState(parseInt(page))

    useEffect(()=>{
        setThisPage(parseInt(page))
    }, [page])


    const classes = useStyles()



    const getEpisodes = async () => {
            const eps = await fetchCardInfo('episode', thisPage)
            setEpisodes(eps.results)
    }

useEffect(()=>{
    getEpisodes()
}, [thisPage])

return episodes.length === 0 ? <LoadingPage/> : (
        <>
            <Typography variant='h1' align="center" gutterBottom>Episodes</Typography>
            <Typography variant="h4" align='center' gutterBottom>
                <IconButton color='primary' aria-label="Previous page" onClick={() => {handlePageChange('prev',thisPage,3,history)}}><ArrowBackIcon /></IconButton>
                Page {thisPage}
                <IconButton color='primary' aria-label="Next page" onClick={() => {handlePageChange('next',thisPage,3,history)}}><ArrowForwardIcon /></IconButton>
            </Typography>
            <Grid container spacing={3} justifyContent="center" alignItems="center">
                {episodes.map(e=> <EpisodeCard key={e.id} episode={e} />)}
            </Grid>
            <div className={classes.centerContent}>
               {thisPage !==1 && <IconButton aria-label="Previous page" color='primary' onClick={() => {handlePageChange('prev', thisPage, 4, history)}}><ArrowBackIcon /></IconButton>}
                    <Button component={Link} to='/episodes/1'>1</Button>
                    <Button component={Link} to='/episodes/2'>2</Button>
                    <Button component={Link} to='/episodes/3'>3</Button>
                {thisPage!==3 && <IconButton aria-label="Next page" color='primary' onClick={() => {handlePageChange('next', thisPage, 4, history)}}><ArrowForwardIcon /></IconButton>}
            </div>
        </>
    )
}

export default Episodes
