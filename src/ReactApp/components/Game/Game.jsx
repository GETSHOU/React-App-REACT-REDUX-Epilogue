import { Component } from 'react';
import { connect } from 'react-redux';
import * as action from '../../store/actions/index';
import { Field } from '../Field/Field';
import { Information } from '../Information/Information';

export class GameContainer extends Component {
	constructor(props) {
		super(props);

		this.handleRestart = this.handleRestart.bind(this);
	}
	handleRestart() {
		this.props.resetField();
	};
	render() {
		return (
			<div className='flex flex-col items-center'>
				<Information/>
				<Field/>
				<button className='buttonStartAgain' onClick={this.handleRestart}>
					Начать заново
				</button>
			</div>
		);
	};
};

const mapDispatchToProps = (dispatch) => ({
	resetField: () => dispatch(action.resetField()),
});

export const Game = connect(null, mapDispatchToProps)(GameContainer);
