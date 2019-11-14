import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  mainContent: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  leftCurve: {
    backgroundColor: '#573EBD',
    height: '100vh',
    width: '8%',
  },
  leftCurveInner: {
    backgroundColor: '#140652',
    height: '100vh',
    width: '100%',
    borderRadius: '50px 0 0 0'
  },
  rightCurve: {
    backgroundColor: '#f7f9fa',
    height: '100vh',
    width: '6%',
  },
  rightCurveInner: {
    backgroundColor: '#140652',
    height: '100vh',
    width: '100%',
    borderRadius: '0 0 50px 0'
  }
}))

export default useStyles;