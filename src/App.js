import React from 'react'

// Material UI imports
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { ThemeProvider } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'

import theme from './theme'
import useStyles from './styles'
import { Scrollbars } from 'react-custom-scrollbars'

// Components
import LeftSidebar from './components/LeftSidebar'
import SearchBar from './components/SearchBar'
import Blog from './components/Blog'
import RightSidebar from './components/RightSidebar'
import Navbar from './components/Navbar'

function App() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Navbar />
        <Grid container direction="row">
          <Hidden smDown>
            <Grid item xs={1}>
              <LeftSidebar />
            </Grid>
          </Hidden>
          <Grid item xs>
            <div className={classes.mainContent}>
              <Hidden smDown>
                <div className={classes.leftCurve}>
                  <div className={classes.leftCurveInner}></div>
                </div>
              </Hidden>
              <Scrollbars style={{ width: "100%", height: "100vh" }}>
                <div style={{ marginRight: '25px' }}>
                  <SearchBar />
                  <Blog />
                </div>
              </Scrollbars>
              <Hidden smDown>
                <div className={classes.rightCurve}>
                  <div className={classes.rightCurveInner}></div>
                </div>
              </Hidden>
            </div>
          </Grid>
          <Hidden smDown>
            <Grid item xs={4}>
              <div>
                <Drawer anchor="right" open={open} onClose={() => setOpen(false)}></Drawer>
                <RightSidebar />
              </div>
            </Grid>
          </Hidden>
        </Grid>
      </ThemeProvider>
    </div>
  );
}

export default App;
