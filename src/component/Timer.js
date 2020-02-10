import React, { useState } from 'react';

class Timer extends React.Component {
	constructor() {
		super();
		this.state = {
			sec: 0,
			min: 24,
			isStarted: false
		}

	}

	stopTimer(timerId) {
		window.clearInterval(timerId);
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
				this.stopTimer(timerId);
			}
		}, 1000);
	}

	render() {
		return (
			<div>
				<p id="output">{this.state.min}:{this.state.sec}</p>
				<button id="timerBtn" onClick={() => this.onBtnClick()}>START</button>
			</div>
		);
	}
}

export default Timer;

