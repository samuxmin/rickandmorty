import { Button, Grid, IconButton, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import LocationCard from './LocationCard/LocationCard'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import Swal from 'sweetalert2'
import LoadingPage from '../LoadingPage/LoadingPage'
import useStyles from '../../styles/styles'

const Locations = () => {
    const [locations, setLocations] = useState([])
    const [thisPage,setThisPage] = useState(1)

    const classes = useStyles()


    const handlePageChange = (action) => {
        if(action === 'next'){
            if(thisPage >= 6){
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

    const getLocations = async () => {
        try {
            const locationsResp = await fetch(`https://rickandmortyapi.com/api/location?page=${thisPage}`).then(resp=>resp.json()).then(data=>data)
            setLocations(locationsResp.results)
        } catch (error) {
            console.log(error)
        }
    }

useEffect(()=>{
    getLocations()
}, [thisPage])

return locations.length === 0 ? <LoadingPage/> : (
        <>
            <Typography variant='h1' align="center" gutterBottom>Locations</Typography>
            <Typography variant="h4" align='center' gutterBottom>
                <IconButton color='primary' aria-label="Previous page" onClick={() => {handlePageChange('prev')}}><ArrowBackIcon /></IconButton>
                Page {thisPage}
                <IconButton color='primary' aria-label="Next page" onClick={() => {handlePageChange('next')}}><ArrowForwardIcon /></IconButton>
            </Typography>
            <Grid container spacing={3} justifyContent="center" alignItems="center">
                {locations.map(l=> <LocationCard key={l.id} location={l} />)}
            </Grid>

            <div className={classes.centerContent}>
                {thisPage !==1 && <IconButton aria-label="Previous page" color='primary' onClick={() => {handlePageChange('prev')}}><ArrowBackIcon /></IconButton>}
                    <Button onClick={() => {setThisPage(1)}}>1</Button>
                    <Button onClick={() => {setThisPage(2)}}>2</Button>
                    <Button onClick={() => {setThisPage(3)}}>3</Button>
                    <Button onClick={() => {setThisPage(4)}}>4</Button>
                    <Button onClick={() => {setThisPage(5)}}>5</Button>
                    <Button onClick={() => {setThisPage(6)}}>6</Button>
                {thisPage !== 6 && <IconButton aria-label="Next page" color='primary' onClick={() => {handlePageChange('next')}}><ArrowForwardIcon /></IconButton>}
            </div>
        </>
    )
}

export default Locations
