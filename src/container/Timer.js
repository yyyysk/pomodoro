import { connect } from 'react-redux';
import Timer from '../component/Timer';
import { startTimer, stopTimer, resetTimer, tick } from '../redux/actions';

const mapStateToProps = (state) => {
	
	return {
		min: state.timers.min,
		sec: state.timers.sec,
		isStarted: state.timers.isStarted,
		timerId: state.timers.isStarted,
	}
}

const mapDispatchToProps = (dispatch) => {

	return {
		startTimer(timerId) {
			dispatch(startTimer(timerId));
		},
		stopTimer(timerId) {
			dispatch(stopTimer(timerId));
		},
		resetTimer() {
			dispatch(resetTimer());
		},
		tick(min, sec) {
			dispatch(tick(min, sec));
		}
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Timer);

