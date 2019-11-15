import React from 'react'
import TextField from '@material-ui/core/TextField'
import useStyles from './styles'
import Grid from '@material-ui/core/Grid'

const SearchBar = () => {
  const classes = useStyles();

  return (
    <div className="searchbar">
      <div className={classes.content}>
        <div className={classes.searchBarWrapper}>
          <TextField
            placeholder="Search"
            color="secondary"
            className={classes.textField}
            InputLabelProps={{
              className: classes.inputLabel
            }}
            InputProps={{
              className: classes.input
            }}
            style={{
              borderLeft: '2xp solid #BA1D55'
            }}
          />
        </div>
      </div >
    </div>
  )
}

export default SearchBar
