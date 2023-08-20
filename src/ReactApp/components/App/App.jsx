import { Component } from 'react';
import { connect } from 'react-redux';
import { Game } from '../Game/Game';

export class AppContainer extends Component {
	render() {
		return (
			<div className='flex flex-col flex-1 items-center pt-20 pr-4 pb-20 pl-4 select-none'>
				<h1 className='text-4xl mb-24'>Игра "Крестики-нолики"</h1>
				<Game />
			</div>
		)
	};
};

export const App = connect()(AppContainer);
