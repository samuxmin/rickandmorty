import { Button, Grid, IconButton, Typography } from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import React, { useEffect, useState } from 'react'
import LoadingPage from '../LoadingPage/LoadingPage'
import CharacterCard from './CharacterCard/CharacterCard'
import useStyles from '../../styles/styles'
import { fetchCardInfo } from '../../helpers/fetch'
import { Link, useParams, useHistory } from 'react-router-dom'
import { handlePageChange } from '../../helpers/handlePageChange'

const Characters = () => {
    const [characters, setCharacters] = useState([])
    
    const { page } = useParams()
    let history = useHistory()
    const [thisPage, setThisPage] = useState(parseInt(page))
    
    useEffect(()=>{
        setThisPage(parseInt(page))
    }, [page])

    const classes = useStyles()
    
    const getCharacters = async () => {
        let chars = await fetchCardInfo('character', thisPage)
        setCharacters(chars.results)
    }
    
    useEffect(()=>{
        getCharacters()
    }, [thisPage])

    return characters.length === 0 ? <LoadingPage/> : (
        <>
            <Typography variant='h1' align="center" gutterBottom>Characters</Typography>
            <Typography variant="h4" align='center' gutterBottom>
                <IconButton color='primary' aria-label="Previous page" onClick={()=>{handlePageChange('prev',thisPage, 34, history)}}><ArrowBackIcon /></IconButton>
                Page {thisPage}
                <IconButton color='primary' aria-label="Next page" onClick={()=>{handlePageChange('next', thisPage, 34, history)}}><ArrowForwardIcon /></IconButton>
            </Typography>
            <Grid container spacing={3} justifyContent="center" alignItems="center">
                {characters.map(c=> <CharacterCard key={c.id} character={c} />)}
            </Grid>
            <div className={classes.centerContent}>
                {thisPage !==1 && <IconButton aria-label="Previous page" color='primary' onClick={()=>{handlePageChange('prev',thisPage, 34, history)}}><ArrowBackIcon /></IconButton>}
                {thisPage > 4 && <Button>...</Button>}
                    <Button component={Link} to={`/characters/${thisPage> 3? thisPage - 3: 1}`}>{thisPage> 3? thisPage - 3: 1}</Button>
                    <Button component={Link} to={`/characters/${thisPage> 3? thisPage - 2: 2}`}>{thisPage> 3? thisPage - 2: 2}</Button>
                    <Button component={Link} to={`/characters/${thisPage> 3? thisPage - 1: 3}`}>{thisPage> 3? thisPage - 1: 3}</Button>
                    <Button component={Link} to={`/characters/${thisPage> 3? thisPage: 4}`}>{thisPage> 3? thisPage : 4}</Button>
                    {thisPage < 34 && <Button component={Link} to={`/characters/${thisPage >3? thisPage + 1 : 5}`}>{thisPage> 3? thisPage + 1: 5}</Button>}
                    {thisPage < 33 && <Button component={Link} to={`/characters/${thisPage >3? thisPage + 2 : 6}`}>{thisPage> 3? thisPage + 2: 6}</Button>}
                    {thisPage < 32 && <Button component={Link} to={`/characters/${thisPage >3? thisPage + 3 : 7}`}>{thisPage> 3? thisPage + 3: 7}</Button>}
                {thisPage < 31 && <Button>...</Button>}
                {thisPage !== 34 && <IconButton aria-label="Next page" color='primary' onClick={()=>{handlePageChange('next',thisPage ,34, history)}}><ArrowForwardIcon /></IconButton>}
            </div>
        </>
    )
}

export default Characters
