import React from 'react'
import { Box, Grid, IconButton, Link, Typography } from '@material-ui/core'
import useStyles from './footerStyles'

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';

const Footer = () => {

    const classes = useStyles()

    return (
        <Box mt={2} mx={0} className={classes.root} id='footer'>
            <Typography align='center' variant='h6'>Page made by <Link href='https://samuxmin.github.io' target='_blank'>samuxmin</Link></Typography>
            <Typography align='center' variant='body2'>Using <Link href='https://rickandmortyapi.com/' target='_blank'>Rick and Morty API</Link></Typography>
            <Grid 
                container
                direction="row"
                justifyContent="center"
                alignItems="center">
                <IconButton aria-label='github' >
                    <Link color='inherit' href='https://github.com/samuxmin' target='_blank'>
                        <GitHubIcon />
                    </Link>
                </IconButton>
                <IconButton aria-label='linkedin'>
                    <Link color='inherit' href='https://www.linkedin.com/in/samuel-mindler-81309220b/' target='_blank'>
                        <LinkedInIcon />
                    </Link>
                </IconButton>
                <IconButton aria-label='instagram'>
                    <Link color='inherit' href='https://www.instagram.com/goinginsanewtf/' target='_blank'>
                        <InstagramIcon/>
                    </Link>
                </IconButton>
            </Grid>
        </Box>
    )
}

export default Footer
