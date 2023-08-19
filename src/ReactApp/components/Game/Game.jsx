import { Component } from 'react';
import { connect } from 'react-redux';
import * as action from '../../store/actions/index';
import { Field } from '../Field/Field';
import { Information } from '../Information/Information';
import styles from './Game.module.css';

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
			<div className={styles.gameWrapper}>
				<Information/>
				<Field/>
				<button className={styles.buttonStartOver} onClick={this.handleRestart}>
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
