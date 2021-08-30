import { Card, CardContent, CardHeader, Grid, Link, Typography } from '@material-ui/core';
import {Link as RouterLink} from 'react-router-dom'
import React from 'react'
import { handleDate } from '../../../helpers/handleDate';

const EpisodeCard = ({ episode }) => {

    return (
        <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card >
            <CardHeader
                title={episode.name}
            />
            <CardContent>
                <Typography variant="body1" color="textSecondary">
                    On air: {episode.air_date}
                    <br/>
                    Episode: {episode.episode} 
                    <br/>
                    Created: {handleDate(episode.created)}
                    <br/>
                    <Link component={RouterLink} to={`/episode${episode.id}/characters`}>View characters</Link>
                </Typography>
            </CardContent>
        </Card>
    </Grid>
    )
}


export default EpisodeCard
