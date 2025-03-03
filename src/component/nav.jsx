import React from 'react';
import "./Inner_pages/inner.css"
function Nav() {
  const bg_col_change = {
    padding: '0px',
    color: '#f9fcff',
  };

  return (
    <div
      className='col-nav'
      style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1000 }} // Fixed position
    >
      <nav className='navbar bg-body-tertiary' style={bg_col_change}>
        <div className='container-fluid' id='cont'>
          <a className='navbar-brand' href='./' id='nav_bar'>
            <img
              src='./src/assets/WhatsApp Image 2025-02-22 at 00.48.33_c116d9d0.jpg'
              id='logo'
              alt='Logo'
            />
            <b id='name_logo'>PFMS</b>
          </a>
          <div className='butn'>
            <div className='d-grid d-md-block'>
              <div
                className='text-center mt-3'
                style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}
              >
                <a href='./cnt' className='text-decoration-none' id='name_logo'>
                  Contact-Us
                </a>
                <br />
                <a href='./know_us' className='text-decoration-none' id='name_logo'>
                  Know-US
                </a>
                <br />
              </div>
              {/* Uncomment buttons if needed
              <button className='btn btn-primary' type='button' id='contact-us' onClick={contact_us()}>
                Contact-us
              </button>
              <button className='btn btn-primary' type='button'>
                Info
              </button>
              */}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
