import React from 'react';
import PropTypes from 'prop-types';
import './ResponsiveLayout.css';

const ResponsiveLayout = ({ children, customStyles }) => {
  return (
    <div className="responsive-layout" style={customStyles}>
      {children}
    </div>
  );
};

ResponsiveLayout.propTypes = {
  children: PropTypes.node.isRequired, // React node (required)
  customStyles: PropTypes.object, // Accepts an object for inline styles
};

ResponsiveLayout.defaultProps = {
  customStyles: {}, // Default to an empty object if not provided
};

export default ResponsiveLayout;
