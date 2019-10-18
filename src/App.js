import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchHSCards } from './actions/index';
import CardsDisplay from './components/CardsDisplay';
import DeckList from './components/DeckList';
import { Header } from './components/Header';
import Messages from './components/Messages';
import { Route } from 'react-router-dom';
import SavedDeckList from './components/SavedDeckList';

class App extends Component {
  componentDidMount() {
    this.props.fetchHSCards()
  }

  render() {
    return (
      <div className="App">
        <Messages />
        <Header />
        <div className="container">
          <Route exact path="/" component={CardsDisplay}/>
          <Route exact path="/" component={DeckList}/>
        </div>
        <Route exact path="/decks" component={SavedDeckList}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cards: state.cards,
  isFetching: state.isFetching
})

export default connect(mapStateToProps, {fetchHSCards})(App);

