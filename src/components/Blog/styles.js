import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  text: {
    color: 'white',
    paddingBottom: '30px'
  },
  tabs: {
    color: 'white',
    marginBottom: '15px',
    justifyContent: 'flex-start',
    '& button.MuiButtonBase-root': {
      minWidth: '70px'
    },
    '& span.MuiTab-wrapper': {
      textTransform: 'capitalize',
      fontSize: '1rem',
      fontWeight: 400
    }
  },
  gridList: {
    flexWrap: 'wrap',
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  gridListTile: {
    '& div.MuiGridListTile-tile': {
      borderRadius: '25px',
      marginRight: '15px'
    }
  },
  gridItem: {
    width: '100%'
  },
  arrows: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '20px 0 30px 0'
  }
}))

export default useStyles;