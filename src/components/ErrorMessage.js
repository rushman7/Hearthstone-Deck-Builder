import React from 'react';
import { connect } from 'react-redux';


const ErrorMessage = props => {
  return (
    <div>
      {props.error && <p className='error'>{props.error}</p>}
    </div>
  );
}

const mapStateToProps = state => ({
  error: state.error
})

export default connect(mapStateToProps, {})(ErrorMessage)