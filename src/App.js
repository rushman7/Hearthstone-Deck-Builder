import React from 'react';
import { connect } from 'react-redux';
import { fetchHSCards } from './actions/index';
import PlayerHand from './components/PlayerHanderHand';

function App(props) {
  const fetchCards = e => {
    e.preventDefault();
    props.fetchHSCards()
  }

  const getCard = () => (
    console.log(props.cards.Classic[0])
  )

  return (
    <div className="App">
      <div>
        {props.cards.Classic.map(card => <img src={card.img} alt={card.name} key={card.cardId}/>)}
      </div>
      {props.error && <p className="error">{props.error}</p>}
      <button onClick={fetchCards}>Fetch HS Cards</button>
      <button onClick={getCard}>Get HS Card</button>
      <PlayerHand />
    </div>
  );
}

const mapStateToProps = state => ({
  cards: state.cards,
  error: state.error
})

export default connect(mapStateToProps, {fetchHSCards})(App);
