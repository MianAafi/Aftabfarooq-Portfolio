import React from 'react';
import './css/Footer.css';
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <div className="FooterTop">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-12 py-2 text-center">
            <p class="m-0">
              © 2023{' '}
              <Link className="namefooter" to="https://aftabfarooq.site">
                Aftab Farooq.
              </Link>{' '}
              All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
