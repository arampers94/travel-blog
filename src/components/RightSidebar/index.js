import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import IconButton from '@material-ui/core/IconButton'
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import Badge from '@material-ui/core/Badge'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import useStyles from './styles'
import data from './data'
import viktoria from '../../images/viktoria.png'
import { Scrollbars } from 'react-custom-scrollbars'

const RightSidebar = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.content}>
      <Scrollbars style={{ width: "100%", height: "100vh" }}>
        <Grid container direction="column" className={classes.userInfo}>
          <Grid item style={{ width: "100%" }}>
            <Grid container direction="row" justify="flex-end" alignItems="center" className={classes.userHeader}>
              <Grid item xs={2}>
                <IconButton onClick={handleClick}>
                  <Badge color="secondary" variant="dot">
                    <NotificationsNoneOutlinedIcon fontSize="medium" />
                  </Badge>
                </IconButton>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>Notification 1</MenuItem>
                  <MenuItem onClick={handleClose}>Notification 2</MenuItem>
                  <MenuItem onClick={handleClose}>Notification 3</MenuItem>
                </Menu>
              </Grid>
              <Grid item xs={3}>
                <Typography variant="body1">
                  Hi, Viktoria
              </Typography>
              </Grid>
              <Grid item xs={3}>
                <img src={viktoria} alt="profile-pic" height={50} width={50} className={classes.profilePic} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem} style={{ display: 'inline-flex' }}>
            <Typography variant="h5" className={classes.titleText}>
              You visited in
          </Typography>
            <Typography variant="h5" color="secondary" className={classes.titleText}>
              2019
          </Typography>
          </Grid>
          <Grid item className={classes.gridItem}>
            <GridList className={classes.gridList} cols={2.5}>
              {data.visited.map(tile => (
                <GridListTile key={tile.img} className={classes.gridListTile}>
                  <img src={tile.img} alt={tile.title} height="100%" />
                  <GridListTileBar
                    title={tile.title}
                    classes={{
                      title: classes.title,
                      root: classes.titleBar
                    }}
                    actionIcon={
                      <IconButton>
                        <LocationOnIcon className={classes.title} />
                      </IconButton>
                    }
                  />
                </GridListTile>
              ))}
            </GridList>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Typography variant="h5" className={classes.titleText}>
              Want to visit
          </Typography>
          </Grid>
          <Grid item className={classes.gridItem}>
            <GridList className={classes.gridList} cols={3} style={{ flexWrap: 'wrap' }}>
              {data.willVisit.map(tile => (
                <GridListTile key={tile.img} className={classes.gridListTile} cols={tile.cols}>
                  <img src={tile.img} alt={tile.title} height="100%" />
                  <GridListTileBar
                    title={tile.title}
                    classes={{
                      title: classes.title,
                      root: classes.titleBar
                    }}
                    actionIcon={
                      <IconButton>
                        <LocationOnIcon className={classes.title} />
                      </IconButton>
                    }
                  />
                </GridListTile>
              ))}
            </GridList>
          </Grid>
        </Grid>
      </Scrollbars>
    </div>
  )
}

export default RightSidebar
