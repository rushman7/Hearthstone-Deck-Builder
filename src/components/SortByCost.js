import React from 'react';
import { connect } from 'react-redux'
import { sortByCost } from '../actions';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const SortByCost = props => {
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

  const sortCost = (e) => {
    e.preventDefault();
    props.sortByCost(e.target.value)
  }

  const costArray = [0,1,2,3,4,5,6,7,'All']

  return (
    <FormControl className={classes.formControl}>
      <InputLabel>Sort by Cost</InputLabel>
        <Select
          value={props.currSetName}
          onChange={sortCost}
        >
        {costArray.map((cost,index) => <MenuItem value={cost} key={index}>{cost}</MenuItem>)}
      </Select>
    </FormControl>
  )
}

const mapStateToProps = state => ({
  cards: state.cards,
  currSet: state.currSet,
  currSetName: state.currSetName,
})

export default connect(mapStateToProps, { sortByCost })(SortByCost);


