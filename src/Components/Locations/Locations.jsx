import { Button, Grid, IconButton, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import LocationCard from './LocationCard/LocationCard'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import LoadingPage from '../LoadingPage/LoadingPage'
import useStyles from '../../styles/styles'
import { fetchCardInfo } from '../../helpers/fetch'
import { Link, useHistory, useParams } from 'react-router-dom'
import { handlePageChange } from '../../helpers/handlePageChange'

const Locations = () => {
    const [locations, setLocations] = useState([])
    const { page } = useParams()
    let history = useHistory()
    const [thisPage, setThisPage] = useState(parseInt(page))

    useEffect(()=>{
        setThisPage(parseInt(page))
    }, [page])
    const classes = useStyles()

    const getLocations = async () => {
        const locat = await fetchCardInfo('location', thisPage)
        setLocations(locat.results)
    }

useEffect(()=>{
    getLocations()
}, [thisPage])

return locations.length === 0 ? <LoadingPage/> : (
        <>
            <Typography variant='h1' align="center" gutterBottom>Locations</Typography>
            <Typography variant="h4" align='center' gutterBottom>
                <IconButton color='primary' aria-label="Previous page" onClick={() => {handlePageChange('prev',thisPage, 6, history)}}><ArrowBackIcon /></IconButton>
                Page {thisPage}
                <IconButton color='primary' aria-label="Next page" onClick={() => {handlePageChange('next',thisPage, 6, history)}}><ArrowForwardIcon /></IconButton>
            </Typography>
            <Grid container spacing={3} justifyContent="center" alignItems="center">
                {locations.map(l=> <LocationCard key={l.id} location={l} />)}
            </Grid>

            <div className={classes.centerContent}>
                {thisPage !==1 && <IconButton aria-label="Previous page" color='primary' onClick={() => {handlePageChange('prev',thisPage, 6, history)}}><ArrowBackIcon /></IconButton>}
                    <Button component={Link} to='/locations/1'>1</Button>
                    <Button component={Link} to='/locations/2'>2</Button>
                    <Button component={Link} to='/locations/3'>3</Button>
                    <Button component={Link} to='/locations/4'>4</Button>
                    <Button component={Link} to='/locations/5'>5</Button>
                    <Button component={Link} to='/locations/6'>6</Button>
                {thisPage !== 6 && <IconButton aria-label="Next page" color='primary' onClick={() => {handlePageChange('next',thisPage, 6, history)}}><ArrowForwardIcon /></IconButton>}
            </div>
        </>
    )
}

export default Locations
