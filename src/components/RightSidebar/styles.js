import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  content: {
    backgroundColor: '#f7f9fa',
    borderRadius: '60px 0 0 0',
    overflow: 'hidden',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  userInfo: {
    marginLeft: '40px',
    paddingTop: '50px'
  },
  userHeader: {
    padding: '20px 0 40px 0'
  },
  gridList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  gridItem: {
    paddingBottom: '30px',
    width: '100%',
    paddingRight: '25px'
  },
  gridListTile: {
    '& div.MuiGridListTile-tile': {
      borderRadius: '25px',
      marginRight: '15px'
    }
  },
  titleText: {
    fontWeight: 500,
    paddingRight: '6px'
  },
  profilePic: {
    borderRadius: '25px'
  }
}))

export default useStyles;