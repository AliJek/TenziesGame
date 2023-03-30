import React from 'react';
import './GameBox.css';
import Dice from './Dice';

const GameBox = () => {
    
	return (
		<div className='container'>
			<div className='game-container'>
				<h1>Tenzies</h1>
				<p>
					Roll untill all dice are the same. Click each die to freeze it at its
					current value between rolls.
				</p>
				<Dice />
				
			</div>
		</div>
	);
};

export default GameBox;
