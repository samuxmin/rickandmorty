import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  main: {
    margin: '50px auto 20px auto',
  },
  characterImage: {
    border: '2px solid #53abee',
    borderRadius: '4px',
    width: '300px',
  },
  centerContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  characterInfo: {
    fontSize: '20px',
  },
  returnBtn: {
    marginTop: '15px',
    marginBottom: '40px',
  },
}));
