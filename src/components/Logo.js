import React from 'react';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom'

export const Logo = () => {
  return (
    <div className="Logo">
      <Link to="/"><img src={logo} alt="" /></Link>
    </div>
  )
}