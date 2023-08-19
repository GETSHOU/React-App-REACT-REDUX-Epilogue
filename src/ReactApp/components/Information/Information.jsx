import { useSelector } from 'react-redux';
import * as selector from '../../store/selectors/index';
import * as constant from '../../store/constants/index';
import styles from './Information.module.css';

export const Information = () => {
	const moveStatusState = useSelector(selector.getStateMoveStatus);
	const currentPlayerState = useSelector(selector.getStateCurrentPlayer);

	return (
		<div className={styles.information}>
			{`${moveStatusState}${(moveStatusState !== constant.STATUS_DRAW) ? currentPlayerState : ''}`}
		</div>
	)
};
