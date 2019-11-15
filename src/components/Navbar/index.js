import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import useStyles from './styles'
import Hidden from '@material-ui/core/Hidden'
import Drawer from '@material-ui/core/Drawer'
import LeftSidebar from '../LeftSidebar'
import MobileSidebar from '../MobileSidebar'
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import RightSidebar from '../RightSidebar'

const Navbar = () => {
  const classes = useStyles()
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const [profileOpen, setProfileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const handleProfileToggle = () => {
    setProfileOpen(!profileOpen)
  }

  return (
    <div className={classes.root}>
      <Hidden mdUp>
        <AppBar position="static" color="secondary">
          <Toolbar>
            <IconButton edge="start" onClick={handleDrawerToggle}>
              <MenuIcon color="primary" />
            </IconButton>
            <Drawer
              variant="temporary"
              anchor="left"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              className={classes.drawer}
            >
              <MobileSidebar />
            </Drawer>
            {/* <IconButton edge="end" onClick={handleProfileToggle}>
              <MenuOpenIcon color="primary" />
            </IconButton>
            <Drawer
              variant="temporary"
              anchor="right"
              open={profileOpen}
              onClose={handleProfileToggle}
            >
              <RightSidebar />
            </Drawer> */}
          </Toolbar>
        </AppBar>
      </Hidden>
    </div>
  )
}

export default Navbar
