import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const PrivateRoute = () => {
	return <div />;
};

export default connect(mapStateToProps)(PrivateRoute);
