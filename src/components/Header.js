import React from 'react';
import PropTypes from 'prop-types';

function Header(props) {
  const { msg } = props;

  return (
    <>
      Header
      {msg}
    </>
  );
}

Header.propTypes = {
  msg: PropTypes.string.isRequired,
};

export default Header;
