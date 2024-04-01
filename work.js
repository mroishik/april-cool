jQuery(document).ready(function(){
  
  jQuery('.progress-bar').each(function() {
    jQuery(this).find('.progress-content').animate({
      width:jQuery(this).attr('data-percentage')
    },2000);
    
    jQuery(this).find('.progress-number-mark').animate(
      {left:jQuery(this).attr('data-percentage')},
      {
       duration: 2000,
       step: function(now, fx) {
         var data = Math.round(now);
         jQuery(this).find('.percent').html(data + '%');
       }
    });  
  });
});


// End
const changingWord = document.getElementById('changingWord');

// Array of words to loop through
const words = ['smiles', 'happiness'];

let currentWordIndex = 0;

function changeWord() {
    // Fade out the word
    changingWord.style.opacity = 0;
    
    setTimeout(() => {
        // Set the text content of the span to the current word
        changingWord.textContent = words[currentWordIndex];
        
        // Fade in the word
        changingWord.style.opacity = 1;
        
        // Increment the index to get the next word
        currentWordIndex++;
        
        // Reset the index to 0 if it exceeds the array length
        if (currentWordIndex >= words.length) {
            currentWordIndex = 0;
        }
    }, 500); // Wait for 0.5 seconds for the word to fade out
}

// Call the changeWord function initially
changeWord();

// Set an interval to call changeWord every 3 seconds (3000 milliseconds)
setInterval(changeWord, 3000);


const counter = document.getElementById('counter');
const target = 250;
const duration = 5000; // 5000 milliseconds (5 seconds) for smoother animation
let start = 1000;
let increment = Math.ceil((target - start) / (duration / 60)); // Increment value for each step

function count() {
    let startTime = null;

    function step(timestamp) {
        if (!startTime) {
            startTime = timestamp;
        }
        const progress = timestamp - startTime;
        const percentage = Math.min(progress / duration, 1);
        const currentCount = Math.floor(percentage * (target - start) + start);
        counter.textContent = currentCount.toLocaleString() + "K+"; // Format with commas and add "K+"
        if (progress < duration) {
            window.requestAnimationFrame(step);
        }
    }

    window.requestAnimationFrame(step);
}

count(); // Start counting


// end


// Function to update counter
function updateCounter(element, targetValue, increment) {
  let currentValue = 1000; // Starting value at 1K
  const counterElement = document.querySelector(element);

  // Function to format number with K
  function formatNumber(number) {
    return (number / 1000).toLocaleString() + "K";
  }

  // Function to increment the counter
  function incrementCounter() {
    if (currentValue < targetValue) {
      currentValue += increment;
      if (currentValue > targetValue) {
        currentValue = targetValue;
      }
      counterElement.textContent = formatNumber(currentValue);
      if (currentValue >= targetValue) {
        clearInterval(counterInterval);
      }
    }
  }

  // Call incrementCounter every 500ms (0.5 seconds)
  const counterInterval = setInterval(incrementCounter, 500);
}

// Call updateCounter for each element
updateCounter(".counter1", 25000, 500); // For the first item
updateCounter(".counter2", 50000, 1000); // For the second item
updateCounter(".counter3", 75000, 1500); // For the third item
updateCounter(".counter4", 100000, 2000); // For the fourth item



// Slick Slider
$('.testimonial-wrapper').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});