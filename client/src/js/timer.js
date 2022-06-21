class Counter {
  constructor(element) {
    this.element = element; 
    this.currentTime = null; 
    this.running = false; 
    this.counter = null; 
  }


  async start(untilDate) {
    const step = 1000; 

    this.currentTime = Date.now(); 
    this.deadline = Date.parse(new Date(untilDate)); 

    this.counter = setInterval(async () => {
      const isTimeOver = this.currentTime >= this.deadline;
      if (isTimeOver) {
        return this.stop();
      }

      await this.stepForward(step);

      this.updateView();
    }, step);
  }

  async stop() {
    clearInterval(this.counter);

    this.running = false;
    this.counter = null;
  }


  async stepForward(step) {
    this.currentTime += step;
  }

  async updateView() {
    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');

    const remainingTime = await this._getRemainingTime();

    const {
      days,
      hours,
      minutes,
      seconds,
    } = remainingTime;
    function getZero(num) {
      if (num >= 0 && num < 10) {
        return '0' + num;
      } else {
        return num;
      }
    }

    daysElement.textContent = getZero(days);
    hoursElement.textContent = getZero(hours);
    minutesElement.textContent = getZero(minutes);
    secondsElement.textContent = getZero(seconds);
  }

  async _getRemainingTime() {
    const ms = 1;
    const second = ms * 1000; 
    const minute = second * 60; 
    const hour = minute * 60; 
    const day = hour * 24; 

    const remainingTime = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    let remainingTimeMs = this.deadline - this.currentTime; 

    const daysLeft = Math.floor(remainingTimeMs / day); 
    remainingTime.days = daysLeft;
    remainingTimeMs -= daysLeft * day; 

    const hoursLeft = Math.floor(remainingTimeMs / hour);
    remainingTime.hours = hoursLeft;
    remainingTimeMs -= hoursLeft * hour;

    const minutesLeft = Math.floor(remainingTimeMs / minute);
    remainingTime.minutes = minutesLeft;
    remainingTimeMs -= minutesLeft * minute;

    const secondsLeft = Math.floor(remainingTimeMs / second);
    remainingTime.seconds = secondsLeft;
    remainingTimeMs -= secondsLeft * second;

    return remainingTime;
  }
}


const deadline = '2022.10.10 00:00:00';
const counterElement = document.getElementById('counter');

const counter = new Counter(counterElement);

counter.start(deadline);
