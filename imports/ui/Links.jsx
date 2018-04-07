import React from 'react';
import PropTypes from 'prop-types';

const Links = props => (
  <div>
    <h1>Short Lnk</h1>

    <button onClick={props.history.goBack}>Log out</button>
  </div>
);

Links.propTypes = {
  history: PropTypes.shape(null),
};
Links.defaultProps = {
  history: {},
};
export default Links;
