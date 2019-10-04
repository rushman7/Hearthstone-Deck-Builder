import React from 'react';
import { connect } from 'react-redux';
import { fetchHSCards } from './actions';

function App(props) {

  const fetchCards = () => {
    props.fetchHSCards()
  }

  return (
    <div className="App">
      <header className="App-header">
        <button></button>
      </header>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    cards: [],
    error: ''
  }
}

export default connect(mapStateToProps, {})(App);
