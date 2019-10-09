import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchHSCards } from './actions/index';
import CardsDisplay from './components/CardsDisplay';
import DeckList from './components/DeckList';
import { Logo } from './components/Logo';

function App(props) {
  useEffect(() => {
    props.fetchHSCards()
  }, [])

  return (
    <div className="App">
      <Logo />
      <div className="container">
        <CardsDisplay />
        <DeckList />
        {props.error && <p className="error">{props.error}</p>}
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  cards: state.cards,
  error: state.error,
})

export default connect(mapStateToProps, {fetchHSCards})(App);

