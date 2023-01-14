import PropTypes from 'prop-types';
import React from 'react';
import { Spinner } from 'react-bootstrap';

const PageSpinner = ({ color = 'primary' }) => {
  return (
    <div className="cr-page-spinner">
      <Spinner animation="border" variant={color} />
    </div>
  );
};

PageSpinner.propTypes = {
  color: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark',
  ]),
};

export default PageSpinner;
