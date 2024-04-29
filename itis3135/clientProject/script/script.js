//Photo gallery script 

const slideshowIndices = {
    1: 0,  
    2: 0   
};


function changeSlide(slideshowNum, direction) {
    const slides = document.querySelectorAll(`#slideshow${slideshowNum} .slide`);
    const currentIndex = slideshowIndices[slideshowNum];


    slides[currentIndex].style.display = 'none';


    let newIndex = currentIndex + direction;


    if (newIndex >= slides.length) {
        newIndex = 0;
    } else if (newIndex < 0) {
        newIndex = slides.length - 1;
    }


    slideshowIndices[slideshowNum] = newIndex;


    slides[newIndex].style.display = 'block';
}

// new script for coutdown timer

const deadline = '09-06-2024';

function getTimeRemaining(endtime){
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor( (total/1000) % 60 );
    const minutes = Math.floor( (total/1000/60) % 60 );
    const hours = Math.floor( (total/(1000*60*60)) % 24 );
    const days = Math.floor( total/(1000*60*60*24) );
  
    return {
      total,
      days,
      hours,
      minutes,
      seconds
    };
  }

  const total = Date.parse(endtime) - Date.parse(new Date());

  const seconds = Math.floor( (t/1000) % 60 );

  return {
    total,
    days,
    hours,
    minutes,
    seconds
  };

  getTimeRemaining(deadline).minutes

  function initializeClock(id, endtime) {
    const clock = document.getElementById(id);
    function updateClock(){
        const t = getTimeRemaining(endtime);

        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = t.hours;
        minutesSpan.innerHTML = t.minutes;
        secondsSpan.innerHTML = t.seconds;

        clock.innerHTML = 'days: ' + t.days + '<br>' +
                          'hours: '+ t.hours + '<br>' +
                          'minutes: ' + t.minutes + '<br>' +
                          'seconds: ' + t.seconds;
        if (t.total <= 0) {
          clearInterval(timeinterval);
        }
      }
      
      updateClock(); // run function once at first to avoid delay
      var timeinterval = setInterval(updateClock,1000);
  }
  initializeClock('clockdiv', deadline);

  const daysSpan = clock.querySelector('.days');
const hoursSpan = clock.querySelector('.hours');
const minutesSpan = clock.querySelector('.minutes');
const secondsSpan = clock.querySelector('.seconds');

