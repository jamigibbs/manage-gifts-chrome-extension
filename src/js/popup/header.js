import React from 'react';
import { hot } from 'react-hot-loader';

const headerStyle = {
  backgroundColor: '#296AE5',
  color: 'white',
  textAlign: 'center'
}

const titleStyle = {
  fontWeight: 'bold',
  fontFamily: '"Helvetica Neue", "Helvetica", "Arial", sans-serif',
  fontSize: '1.25rem',
  margin: '15px'
}

const Header = () => {
  return (
    <div style={headerStyle}>
      <h6 style={titleStyle}>Manage Gifts</h6>
    </div>
  )
}

export default hot(module)(Header)
