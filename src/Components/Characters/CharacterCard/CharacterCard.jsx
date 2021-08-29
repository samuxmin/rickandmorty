import React, {useState} from 'react'
import { Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, Grid, Icon, IconButton, Link, Typography } from '@material-ui/core'
import useStyles from './charCardStyles'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import clsx from 'clsx'
import { handleDate } from '../../../helpers/handleDate'

const CharacterCard = ({character}) => {

    const classes = useStyles()
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    }

    const handleGenderIcon = (gender) => {
        switch (gender) {
            case 'Male':
                return <><Icon className="fas fa-mars" color="primary" /> Male</>;
                
            case 'Female':
            return <><Icon className="fas fa-venus" color="secondary" /> Female</>;
        
            default:
                return gender;
        }
    }

    return(
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card className={classes.root}>
                <CardHeader
                    title={character.name}
                    subheader={'Status: ' + character.status + ' - Species: ' + character.species}
                />
                <CardMedia
                    className={classes.media}
                    image={character.image}
                    title={character.name}
                />
                <CardContent>
                    <Typography variant="body1" color="textSecondary" className={classes.genderText}>
                    {handleGenderIcon(character.gender)}
                    </Typography>
                    <Typography variant='body1' color='textSecondary'>
                    Origin: <Link color='textSecondary' href={character.origin.url}>{character.origin.name}</Link>
                    <br/>
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                    >
                    <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
            <Typography paragraph color='textSecondary'
                >{character.type}
                <br/>
                Last location known: <Link color='textSecondary' href={character.location.url}>{character.location.name}</Link>
                <br/>
                {character.type}
                <br/>
                Created: {handleDate(character.created)}
                </Typography>
            </CardContent>
        </Collapse>
        </Card>
        </Grid>
    )
}

export default CharacterCard