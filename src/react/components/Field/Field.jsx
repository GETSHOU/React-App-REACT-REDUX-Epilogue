import { useSelector, useDispatch } from 'react-redux';
import * as selector from '../../../js/selectors/index';
import * as constant from '../../../js/constants/index';
import * as action from '../../../js/actions/index';
import styles from './Field.module.css';

export const Field = () => {
	const fieldState = useSelector(selector.getDefaultStateField);
	const moveStatusState = useSelector(selector.getDefaultStateMoveStatus);
	const currentPlayerState = useSelector(selector.getDefaultStateCurrentPlayer);

	const dispatch = useDispatch();

	const fieldCopy = [...fieldState];

	const checkWin = (field, currentPlayer) => {
		return constant.WIN_PATTERNS.some((winPattern) => {
			return winPattern.every((cellIndex) => field[cellIndex] === currentPlayer);
		});
	};

	const handleMove = (i, cellValue) => {
		if (moveStatusState === constant.STATUS_WIN
			|| moveStatusState === constant.STATUS_DRAW
			|| cellValue !== '') {
			return;
		}

		fieldCopy[i] = currentPlayerState;

		dispatch(action.setField(fieldCopy));

		if(checkWin(fieldCopy, currentPlayerState)) {
			dispatch(action.setMoveStatus(constant.STATUS_WIN));
		} else if (!checkWin(fieldCopy, currentPlayerState) && !fieldCopy.includes('')) {
			dispatch(action.setMoveStatus(constant.STATUS_DRAW));
		}	else if (currentPlayerState === constant.FIRST_PLAYER) {
			dispatch(action.setCurrentPlayer(constant.SECOND_PLAYER));
		}	else {
			dispatch(action.setCurrentPlayer(constant.FIRST_PLAYER));
		}
	};

	return (
		<div className={styles.fieldWrapper}>
			<div className={styles.field}>
				{fieldState.map((cellValue, i) => {
					return (
						<button
							key={i}
							className={styles.cell}
							onClick={() => handleMove(i, cellValue)}
						>
							{cellValue}
						</button>
							);
				})}
			</div>
		</div>
	);
}
