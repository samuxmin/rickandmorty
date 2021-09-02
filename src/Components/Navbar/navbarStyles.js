import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textDecoration: 'none',
    color: 'black',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  offset: theme.mixins.toolbar,
  image: {
    marginRight: '10px',
  },
}));
