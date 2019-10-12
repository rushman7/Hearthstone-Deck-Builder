import React from 'react';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ErrorMessage = props => {
  const notify = () => toast(props.error);
  return (
    <div>
      {props.error && <p>{notify()}</p>}
      <ToastContainer />
    </div>
  );
}

const mapStateToProps = state => ({
  error: state.error
})

export default connect(mapStateToProps, {})(ErrorMessage)