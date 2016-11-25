/**
*
* Navbar
*
*/

import React from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';


function Navbar() {
  return (
    <nav className='navbar navbar-default'>
      <div className='container'>
        <a className="navbar-brand" href="/">Prueba- Trips</a>
        <ul role="nav" className="nav navbar-nav navbar-right">
          <li>
            <a  href="/">MyTrips</a>
          </li>
          <li>
            <a  href="/">All Trips</a>
          </li>
          <li>
            <a  href="/LogOut">LogOut</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
