import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
    width:'100vw',
    height:'100vh',
    alignItems:'center',
    justifyContent:'center'
  },
}));

const LoadingPage = () => {
  const classes = useStyles();

  return (
    <div mx="auto" className={classes.root}>
      <CircularProgress />
    </div>
  );
}
export default LoadingPage