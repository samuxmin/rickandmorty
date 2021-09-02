import { Button, Grid,  Link,  Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useHistory, useParams, Link as RouterLink} from 'react-router-dom'
import { fecthCharacterEpisodes, getCharacterFromUrl } from '../../helpers/fetch'
import { handleDate } from '../../helpers/handleDate'
import EpisodeCard from '../Episodes/EpisodeCard/EpisodeCard'
import LoadingPage from '../LoadingPage/LoadingPage'
import useStyles from './characterScreenStyles'


export const CharacterScreen = () => {
    let history = useHistory()
    const classes = useStyles()
    const {id} = useParams()
    const [character, setCharacter] = useState({})

    const [location, setLocation] = useState({})
    const [origin, setOrigin] = useState({})

    const [loading, setLoading] = useState(true)
    
    const getCharacter = async (charId) => {
        let char = await getCharacterFromUrl(`https://rickandmortyapi.com/api/character/${charId}`);
        setCharacter(char);
        getEpisodes(char.episode);
        getLocation(char.location.url);
        getOrigin(char.origin.url)
        setLoading(false)
    }
    
    const {name, image, status, species, type, gender} = character
    const [episodes, setEpisodes] = useState([]);

    const getEpisodes = async (epUrl) => {
        let eps = await fecthCharacterEpisodes(epUrl)
        setEpisodes(eps)

    }
    const getLocation = async (locationUrl) => {
        if(locationUrl === ''){
            return setLocation({name:'Unknown'})
        }
        const loc = await getCharacterFromUrl(locationUrl)
        setLocation(loc)
    }
    const getOrigin = async (originUrl) => {
        if(originUrl === ''){
            return setOrigin({name:'Unknown'})
        }
        const orig = await getCharacterFromUrl(originUrl)
        setOrigin(orig)
    }

    const handleReturn = () => {
        if (history.length <= 2) {
          history.push("/");
        } else {
          history.goBack();
        }
      };
    
    useEffect(()=> {
        getCharacter(id)
        //eslint-disable-next-line react-hooks/exhaustive-deps
    },[id])


    return (
        loading ? <LoadingPage/> : <>
            <Grid container alignItems='center' justifyContent='space-evenly' className={classes.main}>
                <Grid item xs={12} sm={6} md={6} className={classes.centerContent}>
                    <Typography variant='h4' align='center' gutterBottom>{name}</Typography>
                    <img src={image} className={classes.characterImage} alt={name} />
                </Grid>
                <Grid item xs={12} sm={6} md={6}  className={classes.centerContent}>
                   <div className={classes.characterInfo}>
                       <ul>
                            <li>Name: {name}</li>
                            <li>Status: {status}</li>
                            { type && <li>Type: {type}</li>}
                            <li>Species: {species}</li>
                            <li>Gender: {gender}</li>
                            <li>Origin: {origin.name}
                           { origin.name !== 'Unknown' && 
                                <Typography  color="textSecondary">
                                    Dimension: {origin.dimension}
                                    <br/>
                                    Type: {origin.type} 
                                    <br/>
                                    Created: {handleDate(origin.created)}
                                    <br/>
                                    <Link component={RouterLink} to={`/location/${origin.id}/characters`}>View location characters</Link>
                                </Typography>}
                            </li>
                            <li>Location: {location.name}
                           {location.name !== 'Unknown' && 
                                <Typography variant="body1" color="textSecondary">
                                    Dimension: {location.dimension}
                                    <br/>
                                    Type: {location.type} 
                                    <br/>
                                    Created: {handleDate(location.created)}
                                    <br/>
                                    <Link component={RouterLink} to={`/location/${location.id}/characters`}>View location characters</Link>
                                </Typography>
                            }
                            </li>
                        </ul>
                   </div>
                </Grid>
            </Grid>
                    <Button color='secondary' variant='outlined' onClick={handleReturn} fullWidth className={classes.returnBtn}>go back</Button>
            <Typography align='center' variant='h4' paragraph>Episodes</Typography>
            <Grid container spacing={3} justifyContent="center" alignItems="center">
                {episodes.map(e=> <EpisodeCard key={e.id} episode={e} />)}
            </Grid>
        </>
    )
}
