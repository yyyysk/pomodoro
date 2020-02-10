import React, { useState } from 'react';

class Timer extends React.Component {
	constructor() {
		super();
		this.state = {
			sec: 0,
			min: 0,
			timerId: null,
			isStarted: false
		}

	}

	stopTimer() {
		window.clearInterval(this.state.timerId);
		alert('ポモドーロが完了しました。');
	}

	onBtnClick() {
		if (this.state.isStarted) return;

		this.setState({ isStarted: true });
		
		let timerId;
		timerId = window.setInterval(() => {
			this.setState({
				sec: this.state.sec+1,
			});
			if (this.state.sec === 60) {
				this.setState({
					sec: 0,
					min: this.state.min+1
				});
			}
			if (this.state.min === 25) {
				this.stopTimer();
			}
		}, 1000);

		this.setState({ timerId: timerId });
	}

	onResetClick() {
		window.clearInterval(this.state.timerId);
		this.setState({
			sec: 0,
			min: 0,
			timerId: null,
			isStarted: false,
		});
		alert('リセットしました');
	}

	render() {
		return (
			<div className="timer">
				<p id="output" className="timer__output">{this.state.min}:{this.state.sec}</p>
				{this.state.isStarted? 
					<button id="resetBtn" className="timer__btn" onClick={() => this.onResetClick()}>RESET</button> :
					<button id="timerBtn" className="timer__btn" onClick={() => this.onBtnClick()}>START</button>}
			</div>
		);
	}
}

export default Timer;

