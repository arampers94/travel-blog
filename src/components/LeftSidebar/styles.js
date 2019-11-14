import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  sidebar: {
    backgroundColor: '#573EBD',
    height: '100vh',
    width: '100%',
    borderRadius: '0 0 100px 0',
  },
  content: {
    height: '100%'
  },
  iconContainer: {
    height: '100%',
    paddingTop: '15px'
  },
  activeColor: {
    color: 'white',
    backgroundColor: '#140652'
  },
  upperCurve: {
    backgroundColor: '#573EBD',
    borderRadius: '0 0 20px 0'
  }
}))

export default useStyles;