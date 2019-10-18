import React from 'react';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { css } from 'glamor';


const SuccessMessage = props => {
  const notify = () => toast(props.success ,{
    className: css({
      background: 'green'
    }),
    bodyClassName: css({
      fontSize: '1rem',
      color: 'white'
    }),
    progressClassName: css({
      background: "white"
    })
  });
  return (
    <div>
      {props.success && <p>{notify()}</p>}
      <ToastContainer autoClose={4000}/>
    </div>
  );
}

const mapStateToProps = state => ({
  success: state.success
})

export default connect(mapStateToProps, {})(SuccessMessage)