/**
 * 時間計測
 */
const initialState = {
	min: 0,
	sec: 0
};
export default function timers(state = initialState, action) {
	switch(action.type) {
		case 'ADD_SEC':
			return {
				...state,
				sec: sec + 1
			};
		
		case 'ADD_MIN':
			return {
				...state,
				sec: 0,
				min: min + 1
			};

		default:
			return state;
	}
};

