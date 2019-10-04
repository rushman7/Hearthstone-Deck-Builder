import React from 'react';
import { connect } from 'react-redux';
import { fetchHSCards } from './actions/index';
import PlayerHand from './components/PlayerHand';
import CardsDisplay from './components/CardsDisplay';

function App(props) {
  const fetchCards = e => {
    e.preventDefault();
    props.fetchHSCards()
  }

  const testState = () => (
    console.log(props.playerHand)
  )

  return (
    <div className="App">
      {props.error && <p className="error">{props.error}</p>}
      <button onClick={fetchCards}>Fetch HS Cards</button>
      <button onClick={testState}>Test State</button>
      <CardsDisplay />
      <PlayerHand />
    </div>
  );
}

const mapStateToProps = state => ({
  cards: state.cards,
  error: state.error,
  playerHand: state.playerHand,
})

export default connect(mapStateToProps, {fetchHSCards})(App);

