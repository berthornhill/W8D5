class Clock {
  
    constructor() {
      // 1. Create a Date object.
      // 2. Store the hours, minutes, and seconds.
      // 3. Call printTime.
      // 4. Schedule the tick at 1 second intervals.

      let date = new Date();
      this.hours = date.getHours();
      this.minutes = date.getMinutes(); 
      this.seconds = date.getSeconds();
      setInterval(this._tick.bind(this), 1000);
      // let timePrinting = this.printTime
      // console.log(this.printTime);
      // console.log("constructor", this)
      // this._tick();

  
    }
  
    printTime() {
      // Format the time in HH:MM:SS
      // Use console.log to print it.
      // this.setInterval(_tick, 1000);
      console.log(`${this.hours}:${this.minutes}:${this.seconds}`);

    }
  
    _tick() {
      // 1. Increment the time by one second.
      // 2. Call printTime.
        
      this.seconds += 1;

      if (this.seconds === 60) {
        this.seconds = 0;
        this.minutes += 1;
      }

      if (this.minutes === 60) {
        this.minutes = 0;
        this.hours += 1;
      }
      // timePrinting()
      this.printTime();
      // console.log(this.printTime);
      // console.log("tick", this)
    }
  }
  
  const clock = new Clock();
  // console.log(Clock.prototype._tick)
  // console.log(clock)
  // console.log(clock._tick)

