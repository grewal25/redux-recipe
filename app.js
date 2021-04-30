import { createStore } from 'redux';

const initialState = {
	recipes : [
		{
			name: 'Omelette'
		}
	],
	ingredients:[
		{
			recipe: 'Omelette',
			name: 'Egg',
			quantity: 2
		}
	]
}

const reducer = (state, action) => {
	switch(action.type){
		case 'ADD_RECIPE':
			return Object.assign({}, state, {
				recipes: state.recipes.concat({name:action.name})
			})
	
		case 'ADD_INGREDIENT':
			const newIngredient = {
				name : action.name,
				recipe: action.recipe,
				quantity: action.quantity
			}
			return Object.assign({}, state, {
				ingredients: state.ingredients.concat(newIngredient)
			})
		}
	return state;
}
const store = createStore(reducer, initialState)

window.store = store;
const addIngredient = (recipe, name, quantity) =>({
	type: 'ADD_INGREDIENT' , recipe, name, quantity
})

store.subscribe(()=>console.log("store changed"))
store.dispatch({type:'ADD_RECIPE', name:'Pancake'})
store.dispatch(addIngredient('Omelette','Eggs',3))
console.log(store.getState())

// const reducer = (state, action) =>
// 	action.type === 'INC'
// 		? state + 1
// 		: state;

// const initialState = 0;

// const store = createStore(reducer, initialState);

// store.subscribe(() => document.getElementById('counter').innerText = store.getState());

// setInterval(() => store.dispatch({ type: 'INC' }), 500);

// console.log("Redux started");