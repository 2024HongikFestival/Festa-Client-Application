import React from 'react';
import PropTypes from 'prop-types';

const HeartIcon = ({ color = '#FFA800' }) => {
  return (
    <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4.74755 12.6051L10.9303 18.6897C11.2464 19.0007 11.7536 19.0007 12.0697 18.6897L18.2524 12.6051C19.8999 10.9837 20.102 8.39682 18.7264 6.53931L18.347 6.02708C16.6479 3.73285 13.1098 4.10567 11.9262 6.70366C11.7597 7.06925 11.2403 7.06925 11.0738 6.70366C9.89019 4.10567 6.35209 3.73285 4.65299 6.02709L4.27364 6.53931C2.89797 8.39682 3.10009 10.9837 4.74755 12.6051Z"
        fill={color}
        stroke={color}
        strokeWidth="4.8"
      />
    </svg>
  );
};

HeartIcon.propTypes = {
  color: PropTypes.string,
};

export default HeartIcon;
