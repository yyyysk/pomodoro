import { START_TIMER, STOP_TIMER, RESET_TIMER, TICK } from '../actionTypes';

/**
 * 時間計測
 */
const initialState = {
	min: 0,
	sec: 0,
	isStarted: false,
	timerId: null
};

export default function timers(state = initialState, action) {
	switch(action.type) {
		case START_TIMER:
			return {
				...state,
				isStarted: true,
				timerId: action.timerId
			};

		case STOP_TIMER:
			return {
				...state,
				isStarted: false,
				timerId: null
			};

		case RESET_TIMER:
			return state = initialState;

		case TICK:
			console.log(action);
			return {
				...state,
				min: action.min,
				sec: action.sec
			}

		default: 
			return state;
	}
}

