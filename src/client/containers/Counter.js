import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {increase, decrease} from '../actions';

class Counter extends React.PureComponent {
	render() {
		const {increase, decrease, count} = this.props;
		return (
			<div>
				<p>
					<strong>Count: </strong>
					<em>{count}</em>
				</p>
				<button type="button" onClick={increase}>Increase</button>
				<button type="button" onClick={decrease}>Decrease</button>
			</div>
		)
	}
}

Counter.propTypes = {
	increase: PropTypes.func.isRequired,
	decrease: PropTypes.func.isRequired,
	count: PropTypes.number.isRequired
};

const mapStateToProps = state => {
	return {
		count: state.count
	}
};

const mapDispatchToProps = dispatch => {
	return {
		increase: () => dispatch(increase()),
		decrease: () => dispatch(decrease())
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);