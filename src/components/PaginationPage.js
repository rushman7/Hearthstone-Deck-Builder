import React from 'react';
import { connect } from 'react-redux'
import { changePage } from '../actions/index';
import { Pagination } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';

const PaginationPage = (props) => {
  const handlePaginationChange = (e, currPage) => {
    e.preventDefault();
    props.changePage(currPage.activePage)
  }

  return (
    <div className="pagination-div">
      <Pagination 
        totalPages={props.totalPages} 
        activePage={props.currPage}
        onPageChange={handlePaginationChange}
      />
      <Link to="/Saved_Decks">
        <Button 
          variant="contained" 
          color="primary"
          className="saved-deck-button"
        >All Saved Decks</Button>
      </Link>
    </div>
  )
}

const mapStateToProps = state => ({
  currPage: state.currPage,
  totalPages: state.totalPages
})

export default connect(mapStateToProps, { changePage })(PaginationPage);