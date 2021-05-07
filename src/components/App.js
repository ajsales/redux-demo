import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { newPokemon, switchPokemon } from '../redux/actions';

export default function App() {

	const currPokemon = useSelector(state => state.currPokemon);
	const box = useSelector(state => state.box);
	const dispatch = useDispatch();

	const pokemonUrl = (index) => {
		return '/pokemon/' + index + '.png';
	}

	const handleClick = (index) => {
		dispatch(switchPokemon(index));
	}

	const boxPokemon = box.map((pokemon, index) => {
		return (
			<button onClick={() => handleClick(index)} key={index}>
				<img src={pokemonUrl(pokemon)} alt="" />
			</button>
		);
	});
	
	return (
		<div>
			<img src={pokemonUrl(currPokemon)} alt="" />
			<button onClick={() => dispatch(newPokemon(getRandomPokemon()))}>
				Add Pokemon
			</button>
			<div>{boxPokemon}</div>
		</div>
	);
}

function getRandomPokemon() {
	return Math.floor(Math.random() * 151) + 1;
}