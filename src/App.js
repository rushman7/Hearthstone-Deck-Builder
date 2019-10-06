import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchHSCards } from './actions/index';
import PlayerHand from './components/PlayerHand';
import CardsDisplay from './components/CardsDisplay';

function App(props) {
  useEffect(() => {
    props.fetchHSCards()
  })

  return (
    <div className="App">
      {props.error && <p className="error">{props.error}</p>}
      <CardsDisplay />
      <PlayerHand />
    </div>
  );
}

const mapStateToProps = state => ({
  cards: state.cards,
  error: state.error,
})

export default connect(mapStateToProps, {fetchHSCards})(App);

