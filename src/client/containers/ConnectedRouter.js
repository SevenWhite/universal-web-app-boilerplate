import {ConnectedRouter} from 'react-router-redux';
import history from '../browserHistory';
import React from "react";

export default <ConnectedRouter history={history} >{this.props.children}</ConnectedRouter>;