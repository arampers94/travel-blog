import React from 'react'
import Typography from '@material-ui/core/Typography'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Grid from '@material-ui/core/Grid'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import IconButton from '@material-ui/core/IconButton'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import useStyles from './styles'
import data from './data'

const Blog = () => {
  const classes = useStyles()

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid container direction="row">
      <Grid item className={classes.gridItem}>
        <Typography variant="h3" className={classes.text}>
          Blog
        </Typography>
      </Grid>
      <Grid item className={classes.gridItem}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="tabs"
          indicatorColor="secondary"
          className={classes.tabs}
        >
          <Tab disableRipple label="Top" />
          <Tab disableRipple label="Low cost" />
          <Tab disableRipple label="Useful tips" />
          <Tab disableRipple label="Life hack" />
          <Tab disableRipple label="Insurance" />
          <Tab disableRipple label="Discounts" />
          <Tab disableRipple label="All" />
        </Tabs>
      </Grid>
      <Grid item className={classes.gridItem}>
        <GridList className={classes.gridList} cols={3}>
          {data.blog.map(tile => (
            <GridListTile key={tile.img} className={classes.gridListTile} cols={tile.cols}>
              <img src={tile.img} alt={tile.title} height="100%" />
              <GridListTileBar
                title={tile.title}
                classes={{
                  title: classes.title,
                  root: classes.titleBar
                }}
              />
            </GridListTile>
          ))}
        </GridList>
      </Grid>
      <Grid item style={{ width: '100%' }} className={classes.arrows}>
        <IconButton>
          <ArrowBackIosIcon color="secondary" fontSize="large" />
        </IconButton>
        <IconButton>
          <ArrowForwardIosIcon color="secondary" fontSize="large" />
        </IconButton>
      </Grid>
      <Grid item className={classes.gridItem}>
        <Typography variant="h3" className={classes.text}>
          News
        </Typography>
      </Grid>
      <Grid item className={classes.gridItem}>
        <GridList className={classes.gridList} cols={3}>
          {data.news.map(tile => (
            <GridListTile key={tile.img} className={classes.gridListTile} cols={tile.cols}>
              <img src={tile.img} alt={tile.title} height="100%" />
              <GridListTileBar
                title={tile.title}
                classes={{
                  title: classes.title,
                  root: classes.titleBar
                }}
              />
            </GridListTile>
          ))}
        </GridList>
      </Grid>
      <Grid item style={{ width: '100%' }} className={classes.arrows}>
        <IconButton>
          <ArrowBackIosIcon color="secondary" fontSize="large" />
        </IconButton>
        <IconButton>
          <ArrowForwardIosIcon color="secondary" fontSize="large" />
        </IconButton>
      </Grid>
    </Grid>
  )
}

export default Blog
