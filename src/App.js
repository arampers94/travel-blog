import React from 'react'

// Material UI imports
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { ThemeProvider } from '@material-ui/core/styles'

import theme from './theme'
import useStyles from './styles'
import { Scrollbars } from 'react-custom-scrollbars'

// Components
import LeftSidebar from './components/LeftSidebar'
import SearchBar from './components/SearchBar'
import Blog from './components/Blog'
import RightSidebar from './components/RightSidebar'

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Grid container direction="row">
          <Grid item xs={1}>
            <LeftSidebar />
          </Grid>
          <Grid item xs={7}>
            <div className={classes.mainContent}>
              <div className={classes.leftCurve}>
                <div className={classes.leftCurveInner}></div>
              </div>
              <Scrollbars style={{ width: "100%", height: "100vh" }}>
                <div style={{ marginRight: '25px' }}>
                  <SearchBar />
                  <Blog />
                </div>
              </Scrollbars>
              <div className={classes.rightCurve}>
                <div className={classes.rightCurveInner}></div>
              </div>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div>

              <RightSidebar />

            </div>
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
}

export default App;
