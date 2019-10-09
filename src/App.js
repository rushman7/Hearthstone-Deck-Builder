import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchHSCards } from './actions/index';
import CardsDisplay from './components/CardsDisplay';
import DeckList from './components/DeckList';
import { Logo } from './components/Logo';
import ErrorMessage from './components/ErrorMessage';

function App(props) {
  useEffect(() => {
    props.fetchHSCards()
  }, [])

  return (
    <div className="App">
      <ErrorMessage />
      <Logo />
      <div className="container">
        <CardsDisplay />
        <DeckList />
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  cards: state.cards
})

export default connect(mapStateToProps, {fetchHSCards})(App);

