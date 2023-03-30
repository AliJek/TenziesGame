import React from 'react';
import './Dice.css';
import { nanoid } from 'nanoid';
import Confetti from 'react-confetti'

const Dice = () => {
	const [dice, setDice] = React.useState(randomDices());

    const [tenzies, setTenzies] = React.useState(false)


    
    React.useEffect(() => {
        const allHeld = dice.every(dice => dice.isHeld === true)
        const firstValue = dice[0].value
        const sameAllValues = dice.every(dice => dice.value === firstValue)
        if(allHeld && sameAllValues) {
            console.log("You won")
            setTenzies(true)
        } 
           
        
    }, [dice])
    
    const holdDice = (id) => {
        setDice(prevState => prevState.map(el => {
            return el.id === id ? {...el, isHeld: !el.isHeld} : el
        }))
    }

	const diceELements = dice.map((num) => (
        <h3 className='num-square' style={{backgroundColor: num.isHeld === true ? "#59E233" : "transparent"}} key={num.id} onClick={() => holdDice(num.id)}>
			{num.value}
		</h3>
	));
    
    
    
	function randomDices() {
		const newArray = [];
		for (let i = 0; i < 10; i++) {
			newArray.push({
				value: Math.ceil(Math.random() * 6),
				isHeld: false,
				id: nanoid(),
			});
		}
		return newArray;
	}

	function rollDice() {
		setDice(prevState => prevState.map(dice => {
            return dice.isHeld === true ? dice : {
				value: Math.ceil(Math.random() * 6),
				isHeld: false,
				id: nanoid(),
			}
        }));
	}

    function newGame() {
        setDice(randomDices)
        setTenzies(false)
    }

    console.log(tenzies);

	return (
		<div>
            {tenzies && <Confetti />}
			<div className='num-container'>
                {diceELements}
                </div>
			<button className='game-btn' onClick={tenzies ? newGame : rollDice}>
				{tenzies ? "New Game" : "Roll"}
			</button>
		</div>
	);
};

export default Dice;
