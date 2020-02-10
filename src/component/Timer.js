import React, { useState } from 'react';


const Timer = ({ sec, min, isStarted, timerId, startTimer, stopTimer, resetTimer, tick }) => {
	console.log({ sec, min, isStarted, timerId, startTimer, stopTimer, resetTimer, tick});

	const _stopTimer = () => {
		window.clearInterval(timerId);
		alert('ポモドーロが完了しました');
	};

	let _sec = 50;
	let _min = 0;
	const _tick = () => {
		tick(min, _sec++);

		if (_sec === 60) {
			tick(0, _min++);
		}

		if (min === 25) {
			_stopTimer();
		}
	}

	const _startTimer = () => {
		if (isStarted) return;

		const timerId = window.setInterval(_tick, 1000);
		startTimer(timerId);	
	};

	return (
			<div className="timer">
				<p id="output" className="timer__output">{min}:{sec}</p>
				{
					isStarted? 
					<button id="resetBtn" className="timer__btn" onClick={() => {}}>RESET</button> :
					<button id="timerBtn" className="timer__btn" onClick={() => _startTimer()}>START</button>
				}
			</div>
		);
};


export default Timer;

