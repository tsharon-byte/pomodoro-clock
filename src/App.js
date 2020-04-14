import React from 'react';

function timeToString(value) {
    return value < 10 ? "0" + value : value;
}

const defaultState = {
    breakLength: 5,
    sessionLength: 25,
    timerHasBeenStarted: false,
    minutes: 25,
    seconds: 0,
    isSession: true
};

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = defaultState;
        this.handleReset = this.handleReset.bind(this);
        this.handleBreakDecrement = this.handleBreakDecrement.bind(this);
        this.handleBreakIncrement = this.handleBreakIncrement.bind(this);
        this.handleSessionDecrement = this.handleSessionDecrement.bind(this);
        this.handleSessionIncrement = this.handleSessionIncrement.bind(this);
        this.handleStartStop = this.handleStartStop.bind(this);
        this.tick = this.tick.bind(this);
    }

    handleReset(event) {
        document.getElementById("beep").pause();
        document.getElementById("beep").currentTime = 0;
        if (this.state.timerHasBeenStarted) {
            clearInterval(this.timerID);
        }
        this.setState(defaultState);
    }

    handleBreakDecrement(event) {
        if (this.state.timerHasBeenStarted || this.state.breakLength === 1) {
            return;
        }
        this.setState({
            breakLength: this.state.breakLength - 1,
            seconds: 0
        });
    }

    handleBreakIncrement(event) {
        if (this.state.timerHasBeenStarted || this.state.breakLength === 60) {
            return;
        }
        this.setState({
            breakLength: this.state.breakLength + 1,
            seconds: 0
        });
    }

    handleSessionDecrement(event) {
        if (this.state.timerHasBeenStarted || this.state.sessionLength === 1) {
            return;
        }
        this.setState({
            sessionLength: this.state.sessionLength - 1,
            seconds: 0
        });
    }

    handleSessionIncrement(event) {
        if (this.state.timerHasBeenStarted || this.state.sessionLength === 60) {
            return;
        }
        this.setState({
            sessionLength: this.state.sessionLength + 1,
            seconds: 0
        });
    }

    tick() {
        console.log("tick is called!");
        let seconds = this.state.seconds;
        let minutes = this.state.minutes;
        let isSession = this.state.isSession;
        if (this.state.seconds === 0) {
            if (this.state.minutes > 0) {
                seconds = 59;
                minutes--;
            } else {
                document.getElementById("beep").play();
                if (this.state.isSession) {
                    //alert("сделайте перерыв!");
                    isSession = false;
                    minutes = this.state.breakLength;
                } else {
                    //alert("отдохнули? за работу!");
                    isSession = true;
                    minutes = this.state.sessionLength;
                }
            }
        } else {
            seconds = this.state.seconds - 1;
        }
        this.setState(
            {
                minutes: minutes,
                seconds: seconds,
                isSession: isSession
            });
    }

    handleStartStop(event) {
        console.log(this.state.timerHasBeenStarted);
        if (this.state.timerHasBeenStarted) {
            clearInterval(this.timerID);
            this.setState({
                timerHasBeenStarted: false
            });
        } else {
            let minutes = this.state.isSession ? this.state.sessionLength : this.state.breakLength;
            this.setState({
                minutes: minutes
            });
            this.timerID = setInterval(
                this.tick,
                1000);
            this.setState({
                timerHasBeenStarted: true
            });
        }
    }

    render() {
        let timeLeft = timeToString(this.state.minutes) + ':' + timeToString(this.state.seconds);
        return (
            <div className="container">
                <audio id="beep" src="https://goo.gl/65cBl1"/>
                <h1>Pomodoro clock</h1>
                <div className="length-container">
                    <div className="length-item">
                        <div id="break-label">Break Length</div>
                        <div className="length">
                            <button id="break-decrement" onClick={this.handleBreakDecrement}><i
                                className="fas fa-arrow-down"></i></button>
                            <div id="break-length">{this.state.breakLength}</div>
                            <button id="break-increment" onClick={this.handleBreakIncrement}><i
                                className="fas fa-arrow-up"></i></button>
                        </div>
                    </div>
                    <div className="length-item">
                        <div id="session-label">Session Length</div>
                        <div className="length">
                            <button id="session-decrement" onClick={this.handleSessionDecrement}><i
                                className="fas fa-arrow-down"></i></button>
                            <div id="session-length">{this.state.sessionLength}</div>
                            <button id="session-increment" onClick={this.handleSessionIncrement}><i
                                className="fas fa-arrow-up"></i></button>
                        </div>
                    </div>
                </div>
                <div id="clock">
                    <div id="timer-label">{this.state.isSession ? "Session" : "Break"}</div>
                    <div id="time-left">{timeLeft}</div>
                </div>
                <button id="start_stop" onClick={this.handleStartStop}>start_stop</button>
                <button id="reset" onClick={this.handleReset}><i className="fas fa-sync-alt"></i></button>
            </div>);
    }
}

export default App;
