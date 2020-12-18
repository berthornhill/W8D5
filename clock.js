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
             
    //   printTime();


    }
  
    printTime() {
      // Format the time in HH:MM:SS
      // Use console.log to print it.
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
      
      this.printTime();
    }
  }
  
  const clock = new Clock();
  console.log(Clock.prototype._tick)
//   console.log(clock)
