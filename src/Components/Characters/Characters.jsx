import { Button, Grid, IconButton, Typography } from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import LoadingPage from '../LoadingPage/LoadingPage'
import CharacterCard from './CharacterCard/CharacterCard'
import useStyles from '../../styles/styles'

const Characters = () => {

    const [characters, setCharacters] = useState([])
    const [thisPage,setThisPage] = useState(1)

    const classes = useStyles()

    const handlePageChange = (action) => {
        if(action === 'next'){
            if(thisPage >= 34){
                return Swal.fire('This is the last page', 'You cant go forward', 'error')
            }

            setThisPage(thisPage + 1)
        } else if(action === 'prev'){
            if(thisPage <= 1){
                return Swal.fire('This is the first page', 'You cant go back', 'error')
            }
            setThisPage(thisPage - 1)
        }
        window.scrollTo({ top: 0, behavior: 'smooth'})
    }
    const getCharacters = async () => {
        try {
            const chars = await fetch(`https://rickandmortyapi.com/api/character?page=${thisPage}`).then(resp=>resp.json()).then(data=>data)
            setCharacters(chars.results)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getCharacters()
    }, [thisPage])

    return characters.length === 0 ? <LoadingPage/> : (
        <>
            <Typography variant='h1' align="center" gutterBottom>Characters</Typography>
            <Typography variant="h4" align='center' gutterBottom>
                <IconButton color='primary' aria-label="Previous page" onClick={() => {handlePageChange('prev')}}><ArrowBackIcon /></IconButton>
                Page {thisPage}
                <IconButton color='primary' aria-label="Next page" onClick={() => {handlePageChange('next')}}><ArrowForwardIcon /></IconButton>
            </Typography>
            <Grid container spacing={3} justifyContent="center" alignItems="center">
                {characters.map(c=> <CharacterCard key={c.id} character={c} />)}
            </Grid>
            <div className={classes.centerContent}>
                {thisPage !==1 && <IconButton aria-label="Previous page" color='primary' onClick={() => {handlePageChange('prev')}}><ArrowBackIcon /></IconButton>}
                {thisPage > 4 && <Button>...</Button>}
                    <Button onClick={() => {setThisPage(thisPage> 3? thisPage - 3: 1)}}>{thisPage> 3? thisPage - 3: 1}</Button>
                    <Button onClick={() => {setThisPage(thisPage> 3? thisPage - 2: 2)}}>{thisPage> 3? thisPage - 2: 2}</Button>
                    <Button onClick={() => {setThisPage(thisPage> 3? thisPage - 1: 3)}}>{thisPage> 3? thisPage - 1: 3}</Button>
                    <Button onClick={() => {setThisPage(thisPage> 3? thisPage : 4)}}>{thisPage> 3? thisPage : 4}</Button>
                    {thisPage < 34 && <Button onClick={() => {setThisPage(thisPage> 3? thisPage + 1: 5)}}>{thisPage> 3? thisPage + 1: 5}</Button>}
                    {thisPage < 33 && <Button onClick={() => {setThisPage(thisPage> 3? thisPage + 2: 6)}}>{thisPage> 3? thisPage + 2: 6}</Button>}
                    {thisPage < 32 && <Button onClick={() => {setThisPage(thisPage> 3? thisPage + 3: 7)}}>{thisPage> 3? thisPage + 3: 7}</Button>}
                {thisPage < 31 && <Button>...</Button>}
                {thisPage !== 34 && <IconButton aria-label="Next page" color='primary' onClick={() => {handlePageChange('next')}}><ArrowForwardIcon /></IconButton>}
            </div>
        </>
    )
}

export default Characters
