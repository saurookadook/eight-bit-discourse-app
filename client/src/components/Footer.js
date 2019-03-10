import React from 'react';
import { Link } from 'react-router-dom';

// Constants/Styles
import * as routes from '../constants/routes';

// TODO: remove Bootstrap
export const Footer = () =>
  <div className="fixed-bottom pt-3 clearfix">
    <div className="container">
      <div className="row justify-content-center">
        <Link className="FooterBushes OuterBushes col-3" to={routes.ABOUT}>
          <h6 className="FooterLink">About</h6>
        </Link>
        
        <Link className="FooterBushes MiddleBush col-3" to={'#'}>
          <h6 className="FooterLink">More Info</h6>
        </Link>
        
        <Link className="FooterBushes OuterBushes col-3" to={'#'}>
          <h6 className="FooterLink">And more....info?</h6>
        </Link>
      </div>
    </div>
    <footer className="FooterBase">
      <p>LOLZ COPYRIGHT STUFF</p>
    </footer>
  </div>
