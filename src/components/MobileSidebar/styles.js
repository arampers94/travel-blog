import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  activeColor: {
    color: 'white',
    backgroundColor: '#140652'
  },
  sidebar: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#573EBD',
    height: '100vh',
    width: '75px',
    paddingRight: '25px'
  },
}))

export default useStyles