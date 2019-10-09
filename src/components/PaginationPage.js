import React from 'react';
import { connect } from 'react-redux'
import { changePage } from '../actions/index';
import { Pagination } from 'semantic-ui-react'

const PaginationPage = (props) => {
  const handlePaginationChange = (e, currPage) => {
    e.preventDefault();
    props.changePage(currPage.activePage)
  }

  return (
    <div>
      <Pagination 
        totalPages={props.totalPages} 
        defaultActivePage={props.currPage}
        onPageChange={handlePaginationChange}
      />
    </div>
  )
}

const mapStateToProps = state => ({
  currPage: state.currPage,
  totalPages: state.totalPages
})

export default connect(mapStateToProps, { changePage })(PaginationPage);