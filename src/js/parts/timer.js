function timer() {
	let deadline = '2019-12-18';

    let getTimeRemaining = (endtime) => {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t/1000) % 60), 
            minutes = Math.floor((t/1000/60) % 60), 
			hours = Math.floor((t/(1000/60/60)) % 24),
            days = Math.floor((t/(1000*60*60*24)));
            console.log(hours);

        return { 
			'total' : t,
			'days' : days,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
        };
    };

    let setClock = (id, endtime) => { 
		let timer = document.getElementById(id),
			days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
			let t = getTimeRemaining(endtime);
				days.textContent = t.days;
                hours.textContent = t.hours;
                minutes.textContent = t.minutes;
				seconds.textContent = t.seconds;
				
			if (t.days < 10) {
				days.textContent = '0' + t.days;
			}
	
            if (t.hours < 10) {
                hours.textContent = '0' + t.hours;
            }

            if (t.minutes < 10) {
                minutes.textContent = '0' + t.minutes;
            }

            if (t.seconds < 10) {
                seconds.textContent = '0' + t.seconds;
            }

            if (t.total <= 0) {
				clearInterval(timeInterval);
				days.textContent = '00';
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }

    }
    setClock('timer', deadline);
}
module.exports = timer;