import React from 'react';
import { connect } from 'react-redux';
import { fetchHSCards } from './actions/index';

function App(props) {

  const fetchCards = e => {
    e.preventDefault();
    props.fetchHSCards()
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          {props.cards.map(card => <h4>{card.name}</h4>)}
        </div>
        {props.error && <p className="error">{props.error}</p>}
        <button onClick={fetchCards}>Fetch HS Cards</button>
      </header>
    </div>
  );
}

const mapStateToProps = state => ({
  cards: state.cards,
  error: state.error
})

export default connect(mapStateToProps, {fetchHSCards})(App);
