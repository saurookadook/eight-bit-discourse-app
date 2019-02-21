import React from 'react';
import { Link } from 'react-router-dom';

// Constants/Styles
import * as routes from '../constants/routes';

// TODO: remove Bootstrap, makes bushes into actual links
export const Footer = () =>
    <div className="fixed-bottom pt-3 clearfix">
      <div className="container">
        <div className="row justify-content-center">
        <Link to={routes.ABOUT}>
          <h4 className="FooterBushes OuterBushes col-3 mb-0 py-2">About</h4>
        </Link>
          
          <h4 className="FooterBushes MiddleBush col-3 mb-0 py-2">More Info</h4>
          <h4 className="FooterBushes OuterBushes col-3 mb-0 py-2">And more....info?</h4>
        </div>
      </div>
      <footer className="FooterBase pt-3 pb-2">
        <p>LOLZ COPYRIGHT STUFF</p>
      </footer>
    </div>
