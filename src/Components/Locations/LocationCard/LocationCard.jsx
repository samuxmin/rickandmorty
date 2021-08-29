import { Card, CardContent, CardHeader, Grid, Link, Typography } from '@material-ui/core';
import {Link as RouterLink} from 'react-router-dom'
import React from 'react'
import useStyles from './locationCardStyles'
import { handleDate } from '../../../helpers/handleDate';

const LocationCard = ({ location }) => {
    const classes = useStyles()

    return (
        <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card className={classes.root}>
            <CardHeader
                title={location.name}
            />
            <CardContent>
                <Typography variant="body1" color="textSecondary">
                    Dimension: {location.dimension}
                    <br/>
                    Type: {location.type}
                    Created: {handleDate(location.created)}
                    <br/>
                    <Link component={RouterLink} to={`/location${location.id}/characters`}>View characters</Link>
                </Typography>
            </CardContent>
        </Card>
    </Grid>
    )
}


export default LocationCard
