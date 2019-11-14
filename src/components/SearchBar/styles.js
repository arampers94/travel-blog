import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  content: {
    display: 'flex',
    justifyContent: 'center'
  },
  searchBarWrapper: {
    width: '100%'
  },
  inputLabel: {
    color: '#ccc',
    fontSize: '40px'
  },
  input: {
    color: 'white',
    fontSize: '40px',
    margin: '175px 0 75px 0',
    borderLeft: '3px solid #BA1D55',
    paddingLeft: '20px'
  },
  textField: {
    width: '100%',
    fontWeight: 300,
    '& ::before': {
      display: 'none'
    },
  }
}))

export default useStyles