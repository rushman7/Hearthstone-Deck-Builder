import React from 'react';
import { connect } from 'react-redux'
import { sortBySet, changePage } from '../actions';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const SortBySet = props => {
  const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    }
  }));

  const classes = useStyles();

  const sortSet = (e) => {
    e.preventDefault();
    props.sortBySet(e.target.value);
    props.changePage(1);
  }

  return (
    <FormControl className={classes.formControl}>
      <InputLabel>Sort by Set</InputLabel>
        <Select
          value={props.currSetName}
          onChange={sortSet}
        >
          { 
            Object.keys(props.cards).map(function(keyName, keyIndex) {
              return <MenuItem key={keyIndex} value={keyName}>{keyName}</MenuItem>
            })
          }
      </Select>
    </FormControl>
  )
}

const mapStateToProps = state => ({
  cards: state.cards,
  currSet: state.currSet,
  currSetName: state.currSetName,
})

export default connect(mapStateToProps, { sortBySet, changePage })(SortBySet);


