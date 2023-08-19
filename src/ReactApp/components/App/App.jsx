import { Component } from 'react';
import { connect } from 'react-redux';
import styles from './App.module.css';
import { Game } from '../Game/Game';

export class AppContainer extends Component {
	render() {
		return (
			<div className={styles.app}>
				<h1 className={styles.appTitle}>Игра "Крестики-нолики"</h1>
				<Game />
			</div>
		)
	};
};

export const App = connect()(AppContainer);
