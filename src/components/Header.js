import React from 'react';
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div className="Logo">
      <Link to="/"><h2>Hearthstone Deck Builder</h2></Link>
      <div class="hs-wrapper gold">
        <Link to="/Saved_Decks">
          <a class="hs-button gold" href="">
            <span class="hs-border gold">
              <span class="hs-text gold">
                All Decks
              </span>
            </span>
          </a>
        </Link>
      </div>
    </div>
  )
}