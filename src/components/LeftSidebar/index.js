import React from 'react';
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import HomeIcon from '@material-ui/icons/Home';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ExploreIcon from '@material-ui/icons/Explore';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import BubbleChartIcon from '@material-ui/icons/BubbleChart';
import useStyles from './styles';

const LeftSidebar = (props) => {
  const classes = useStyles();

  const [active, setActive] = React.useState(0)

  const icons = [
    (
      <Grid item xs={1}>
        <IconButton
          className={active === 0 ? classes.activeColor : null}
          onClick={() => setActive(0)}
        >
          <HomeIcon fontSize="large" />
        </IconButton>
      </Grid>
    ),
    (
      <Grid item xs={1}>
        <IconButton
          className={active === 1 ? classes.activeColor : null}
          onClick={() => setActive(1)}
        >
          <LocationOnIcon fontSize="large" />
        </IconButton>
      </Grid>
    ),
    (
      <Grid item xs={1}>
        <IconButton
          className={active === 2 ? classes.activeColor : null}
          onClick={() => setActive(2)}
        >
          <ExploreIcon fontSize="large" />
        </IconButton>
      </Grid>
    ),
    (
      <Grid item xs={1}>
        <IconButton
          className={active === 3 ? classes.activeColor : null}
          onClick={() => setActive(3)}
        >
          <QuestionAnswerIcon fontSize="large" />
        </IconButton>
      </Grid>
    )
  ]

  return (
    <div className={classes.sidebar}>
      <Grid container direction="column" alignItems="center" className={classes.iconContainer}>
        <Grid item xs={1}>
          <IconButton>
            <BubbleChartIcon fontSize="large" color="primary" />
          </IconButton>
        </Grid>
        <Grid item xs={3}></Grid>
        {icons}
        <Grid item xs={4}></Grid>
      </Grid>
    </div>
  )
}

export default LeftSidebar;
