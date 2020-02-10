import { START_TIMER, STOP_TIMER, RESET_TIMER, TICK } from './actionTypes';

export const startTimer = (timerId) => {
	return {
		type: START_TIMER,
		timerId
	}
}

export const stopTimer = (timerId) => {
	return {
		type: STOP_TIMER,
		timerId
	}
}

export const resetTimer = () => {
	return {
		type: RESET_TIMER
	}
}

export const tick = (min, sec) => {
	return {
		type: TICK,
		min,
		sec
	}
}

