import { Component } from 'react';
import { connect } from 'react-redux';
import * as constant from '../../store/constants/index';
import * as action from '../../store/actions/index';
import styles from './Field.module.css';

export class FieldContainer extends Component {
	constructor(props) {
		super(props);

		this.fieldCopy = [...props.fieldState];
	}

	checkWin(field, currentPlayer) {
		return constant.WIN_PATTERNS.some((winPattern) => {
			return winPattern.every((cellIndex) => field[cellIndex] === currentPlayer);
		});
	};

	handleMove(i, cellValue) {
		if (this.props.moveStatusState === constant.STATUS_WIN
			|| this.props.moveStatusState === constant.STATUS_DRAW
			|| cellValue !== '') {
			return;
		}

		this.fieldCopy[i] = this.props.currentPlayerState;

		this.props.setField(this.fieldCopy);

		if (this.checkWin(this.fieldCopy, this.props.currentPlayerState)) {
			this.props.setMoveStatus(constant.STATUS_WIN);
		} else if (!this.checkWin(this.fieldCopy, this.props.currentPlayerState) && !this.fieldCopy.includes('')) {
			this.props.setMoveStatus(constant.STATUS_DRAW);
		} else if (this.props.currentPlayerState === constant.FIRST_PLAYER) {
			this.props.setCurrentPlayer(constant.SECOND_PLAYER);
		} else {
			this.props.setCurrentPlayer(constant.FIRST_PLAYER);
		}
	};

	render() {
		return (
			<div className={styles.fieldWrapper}>
				<div className={styles.field}>
					{this.props.fieldState.map((cellValue, i) => {
						return (
							<button
								key={i}
								className={styles.cell}
								onClick={() => this.handleMove(i, cellValue)}
							>
								{cellValue}
							</button>
								);
					})}
				</div>
			</div>
		);
	}
};

const mapStateToProps = (state) => ({
	fieldState: state.field,
	moveStatusState: state.moveStatus,
	currentPlayerState: state.currentPlayer,
});

const mapDispatchToProps = (dispatch) => ({
	setField: (field) => dispatch(action.setField(field)),
	setMoveStatus: (currentGameStatus) => dispatch(action.setMoveStatus(currentGameStatus)),
	setCurrentPlayer: (currentPlayer) => dispatch(action.setCurrentPlayer(currentPlayer)),
});

export const Field = connect(mapStateToProps, mapDispatchToProps)(FieldContainer);
