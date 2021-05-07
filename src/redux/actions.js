export const newPokemon = (index) => {
	return {
		type: 'pokemon/new',
		pokemon: index
	};
}

export const switchPokemon = (index) => {
	return {
		type: 'pokemon/switch',
		index: index
	}
}