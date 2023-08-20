import { Component } from 'react';
import { connect } from 'react-redux';
import * as constant from '../../store/constants/index';

export class InformationContainer extends Component {
	render() {
		return (
			<div className='text-3xl font-bold mb-7'>
				{`${this.props.moveStatusState}${(this.props.moveStatusState !== constant.STATUS_DRAW) ? this.props.currentPlayerState : ''}`}
			</div>
		)
	};
};

const mapStateToProps = (state) => ({
	moveStatusState: state.moveStatus,
	currentPlayerState: state.currentPlayer,
});

export const Information = connect(mapStateToProps)(InformationContainer);
