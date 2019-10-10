import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchHSCards } from './actions/index';
import CardsDisplay from './components/CardsDisplay';
import DeckList from './components/DeckList';
import { Logo } from './components/Logo';
import ErrorMessage from './components/ErrorMessage';

class App extends Component {
  componentDidMount() {
    this.props.fetchHSCards()
  }

  render() {
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
}

const mapStateToProps = state => ({
  cards: state.cards
})

export default connect(mapStateToProps, {fetchHSCards})(App);

