import React from 'react';
import { connect } from 'react-redux'
import { setClass, changePage } from '../actions';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const SetClass = props => {
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

  const setClass = (e) => {
    e.preventDefault();
    props.setClass(e.target.value)
    props.changePage(1)
  }

  const classArray = ["Druid","Hunter","Mage","Paladin","Priest","Rogue","Shaman","Warlock","Warrior"]

  return (
    <FormControl className={classes.formControl}>
      <InputLabel>Sort by Class</InputLabel>
        <Select
          value={props.currClass}
          onChange={setClass}
        >
        {classArray.map(name => <MenuItem value={name} key={name}>{name}</MenuItem>)}
      </Select>
    </FormControl>
  )
}

const mapStateToProps = state => ({
  currClass: state.currClass
})

export default connect(mapStateToProps, { setClass, changePage })(SetClass);


