import { useDispatch } from 'react-redux';
import * as action from '../../../js/actions/index';
import { Field } from '../Field/Field';
import { Information } from '../Information/Information';
import styles from './Game.module.css';

export const Game = () => {
	const dispatch = useDispatch();

	const handleRestart = () => dispatch(action.resetField());

	return (
		<div className={styles.gameWrapper}>
			<Information/>
			<Field/>
			<button className={styles.buttonStartOver} onClick={handleRestart}>
				Начать заново
			</button>
		</div>
	);
};
