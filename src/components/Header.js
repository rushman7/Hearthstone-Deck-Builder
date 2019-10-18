import React from 'react';
import { Link } from 'react-router-dom'
import logo from '../images/logo-final.png'
 
export const Header = () => {
  return (
    <div className="Logo">
      <Link to="/"><img src={logo} alt='HS logo'/></Link>
    </div>
  )
}