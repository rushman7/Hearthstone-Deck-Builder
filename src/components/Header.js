import React from 'react';
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div className="Logo">
      <Link to="/"><h2>Hearthstone Deck Builder</h2></Link>
      <div className="hs-wrapper gold">
        <Link to="/Saved_Decks">
          <span className="hs-button gold">
            <span className="hs-border gold">
              <span className="hs-text gold">
                All Decks
              </span>
            </span>
          </span>
        </Link>
      </div>
    </div>
  )
}