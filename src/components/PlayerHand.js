import React from 'react';
import { connect } from 'react-redux';

const PlayerHand = props => {
  return (
    <div className="hand-cards">
      {props.playerHand.map((card, index) => (
        <div className="hand-card" key={index}>
          <div className="hand-card-face">
            <img 
              src={card.img} 
              alt={card.name} 
              className="hand-card-label"
            />
          </div>
        </div>
      ))}
    </div>
  )
}

const mapStateToProps = state => ({
  playerHand: state.playerHand,
})

export default connect(mapStateToProps, {})(PlayerHand);