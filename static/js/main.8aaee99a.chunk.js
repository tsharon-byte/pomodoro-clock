(this["webpackJsonppomodoro-clock"]=this["webpackJsonppomodoro-clock"]||[]).push([[0],{13:function(e,t,s){},14:function(e,t,s){"use strict";s.r(t);var a=s(0),n=s.n(a),i=s(3),r=s.n(i),c=(s(13),s(4)),h=s(5),l=s(1),o=s(6),m=s(7);function d(e){return e<10?"0"+e:e}var u={breakLength:5,sessionLength:25,timerHasBeenStarted:!1,minutes:25,seconds:0,isSession:!0},k=function(e){Object(m.a)(s,e);var t=Object(o.a)(s);function s(e){var a;return Object(c.a)(this,s),(a=t.call(this,e)).state=u,a.handleReset=a.handleReset.bind(Object(l.a)(a)),a.handleBreakDecrement=a.handleBreakDecrement.bind(Object(l.a)(a)),a.handleBreakIncrement=a.handleBreakIncrement.bind(Object(l.a)(a)),a.handleSessionDecrement=a.handleSessionDecrement.bind(Object(l.a)(a)),a.handleSessionIncrement=a.handleSessionIncrement.bind(Object(l.a)(a)),a.handleStartStop=a.handleStartStop.bind(Object(l.a)(a)),a.tick=a.tick.bind(Object(l.a)(a)),a}return Object(h.a)(s,[{key:"handleReset",value:function(e){document.getElementById("beep").pause(),document.getElementById("beep").currentTime=0,this.state.timerHasBeenStarted&&clearInterval(this.timerID),this.setState(u)}},{key:"handleBreakDecrement",value:function(e){if(!this.state.timerHasBeenStarted&&1!==this.state.breakLength){var t=this.state.breakLength-1,s=this.state.isSession?this.state.sessionLength:t;this.setState({breakLength:t,seconds:0,minutes:s})}}},{key:"handleBreakIncrement",value:function(e){if(!this.state.timerHasBeenStarted&&60!==this.state.breakLength){var t=this.state.breakLength+1,s=this.state.isSession?this.state.sessionLength:t;this.setState({breakLength:t,seconds:0,minutes:s})}}},{key:"handleSessionDecrement",value:function(e){if(!this.state.timerHasBeenStarted&&1!==this.state.sessionLength){var t=this.state.sessionLength-1,s=this.state.isSession?t:this.state.breakLength;this.setState({sessionLength:t,seconds:0,minutes:s})}}},{key:"handleSessionIncrement",value:function(e){if(!this.state.timerHasBeenStarted&&60!==this.state.sessionLength){var t=this.state.sessionLength+1,s=this.state.isSession?t:this.state.breakLength;this.setState({sessionLength:t,seconds:0,minutes:s})}}},{key:"tick",value:function(){console.log("tick is called!");var e=this.state.seconds,t=this.state.minutes,s=this.state.isSession;0===this.state.seconds?this.state.minutes>0?(e=59,t--):(document.getElementById("beep").play(),this.state.isSession?(s=!1,t=this.state.breakLength):(s=!0,t=this.state.sessionLength)):e=this.state.seconds-1,this.setState({minutes:t,seconds:e,isSession:s})}},{key:"handleStartStop",value:function(e){if(console.log(this.state.timerHasBeenStarted),this.state.timerHasBeenStarted)clearInterval(this.timerID),this.setState({timerHasBeenStarted:!1});else{var t=this.state.isSession?this.state.sessionLength:this.state.breakLength;this.setState({minutes:t}),this.timerID=setInterval(this.tick,1e3),this.setState({timerHasBeenStarted:!0})}}},{key:"render",value:function(){var e=d(this.state.minutes)+":"+d(this.state.seconds);return n.a.createElement("div",{className:"container"},n.a.createElement("audio",{id:"beep",src:"https://goo.gl/65cBl1"}),n.a.createElement("h1",null,"Pomodoro clock"),n.a.createElement("div",{className:"length-container"},n.a.createElement("div",{className:"length-item"},n.a.createElement("div",{id:"break-label"},"Break Length"),n.a.createElement("div",{className:"length"},n.a.createElement("button",{id:"break-decrement",onClick:this.handleBreakDecrement},n.a.createElement("i",{className:"fas fa-arrow-down"})),n.a.createElement("div",{id:"break-length"},this.state.breakLength),n.a.createElement("button",{id:"break-increment",onClick:this.handleBreakIncrement},n.a.createElement("i",{className:"fas fa-arrow-up"})))),n.a.createElement("div",{className:"length-item"},n.a.createElement("div",{id:"session-label"},"Session Length"),n.a.createElement("div",{className:"length"},n.a.createElement("button",{id:"session-decrement",onClick:this.handleSessionDecrement},n.a.createElement("i",{className:"fas fa-arrow-down"})),n.a.createElement("div",{id:"session-length"},this.state.sessionLength),n.a.createElement("button",{id:"session-increment",onClick:this.handleSessionIncrement},n.a.createElement("i",{className:"fas fa-arrow-up"}))))),n.a.createElement("div",{id:"clock"},n.a.createElement("div",{id:"timer-label"},this.state.isSession?"Session":"Break"),n.a.createElement("div",{id:"time-left"},e)),n.a.createElement("button",{id:"start_stop",onClick:this.handleStartStop},"start_stop"),n.a.createElement("button",{id:"reset",onClick:this.handleReset},n.a.createElement("i",{className:"fas fa-sync-alt"})))}}]),s}(n.a.Component);r.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(k,null)),document.getElementById("root"))},8:function(e,t,s){e.exports=s(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.8aaee99a.chunk.js.map