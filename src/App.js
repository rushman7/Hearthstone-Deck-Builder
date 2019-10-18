import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchHSCards } from './actions/index';
import CardsDisplay from './components/CardsDisplay';
import DeckList from './components/DeckList';
import { Header } from './components/Header';
import ErrorMessage from './components/ErrorMessage';
import { Route } from 'react-router-dom';
import SavedDeckList from './components/SavedDeckList';

class App extends Component {
  componentDidMount() {
    this.props.fetchHSCards()
  }

  render() {
    return (
      <div className="App">
        <ErrorMessage />
        <Header />
        <div className="container">
          <Route exact path="/" component={CardsDisplay}/>
          <Route exact path="/" component={DeckList}/>
        </div>
        <Route exact path="/Saved_Decks" component={SavedDeckList}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cards: state.cards,
  isFetching: state.isFetching
})

export default connect(mapStateToProps, {fetchHSCards})(App);

