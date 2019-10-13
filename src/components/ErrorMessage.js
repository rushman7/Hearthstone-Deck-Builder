import React from 'react';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { css } from 'glamor';


const ErrorMessage = props => {
  const notify = () => toast(props.error ,{
    className: css({
      background: 'red'
    }),
    bodyClassName: css({
      fontSize: '1rem',
      color: 'white'
    }),
    progressClassName: css({
      background: "#ffb7b7"
    })
  });
  return (
    <div>
      {props.error && <p>{notify()}</p>}
      <ToastContainer 
        autoClose={8000}/>
    </div>
  );
}

const mapStateToProps = state => ({
  error: state.error
})

export default connect(mapStateToProps, {})(ErrorMessage)