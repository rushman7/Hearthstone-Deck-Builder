import React from 'react';

const temp = [1,2,3,4,5,6,7,8,9,10]

export default function PlayerHand(props) {
  return (
    <div className="hand-cards">
      {temp.map((item, index) => (
        <div className="hand-card" key={index}>
          <div className="hand-card-face">
            <div className="hand-card-label">
              {item}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}