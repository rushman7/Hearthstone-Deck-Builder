import React from 'react';
import { connect } from 'react-redux';
import { removePlayerHand } from '../actions/index';

const PlayerHand = props => {
  const removePlayerHand = id => {
    props.removePlayerHand(id)
  }
  return (
    <div className="hand-cards">
      {
        props.playerHand.length > 0 
        ? props.playerHand.map(card => (
        <div className="hand-card" key={card.dbfId} onClick={() => removePlayerHand(card.dbfId)}>
          <div className="hand-card-face">
            <img 
              src={card.img} 
              alt={card.name} 
              className="hand-card-label"
            />
          </div>
        </div>
      ))
      : <p>Your hand is empty. Select cards to add them to your hand.</p>
    }
    </div>
  )
}

const mapStateToProps = state => ({
  playerHand: state.playerHand,
})

export default connect(mapStateToProps, { removePlayerHand })(PlayerHand);