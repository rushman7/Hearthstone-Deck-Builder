import React from 'react';
import { connect } from 'react-redux'
import { prevPage, nextPage } from '../actions/index';

const Pagination = (props) => {
  const onNextChange = () => {

  }

  const onPrevChange = () => {

  }

  return (
    <div>
      <button onClick={props.nextPage}> Next </button>
      <button onClick={props.prevPage}> Prev </button>
    </div>
  )
}

const mapStateToProps = state => ({
  currPage: state.currPage,
})

export default connect(mapStateToProps, {nextPage, prevPage})(Pagination);