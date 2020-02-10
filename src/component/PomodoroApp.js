import React from 'react';
import Timer from '../container/Timer';

const PomodoroApp = () => {

	return(
		<div className="pomodoro">
			<div className="pomodoro__inner">
				<h1 className="pomodoro__title">POMODORO TIMER</h1>
				<Timer />
			</div>
		</div>
	);
};

export default PomodoroApp;
