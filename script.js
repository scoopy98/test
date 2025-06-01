const hamburger = document.getElementById('hamburger');
const navContainer = document.getElementById('navContainer');

hamburger.addEventListener('click', () => {
  navContainer.classList.toggle('active');
  hamburger.classList.toggle('open');

  if (hamburger.classList.contains('open')) {
    hamburger.innerHTML = '<span style="transform: rotate(45deg) translateY(11px);"></span><span style="opacity: 0;"></span><span style="transform: rotate(-45deg) translateY(-11px);"></span>';
  } else {
    hamburger.innerHTML = '<span></span><span></span><span></span>';
  }
});

// the start of the hero section down here

// script.js

// Select DOM elements
const hashrateInput = document.getElementById('hashrateInput');
const resultBTC = document.getElementById('btc-Result');
const resultUSD = document.getElementById('usd-Result');
const buttons = document.querySelectorAll('.duration-btn');

const usdToBtcrate = 0.0000001;

// Interest rates
const rates = {
  day: 0.20,   // 20% daily interest
  week: 0.20 * 7,  // 20% weekly interest
  month: 0.30 * 7 * 4  // 30% monthly interest
};

let activeDuration = 'day';

function calculateIncome() {
  const amount = parseFloat(hashrateInput.value);
  if (!isNaN(amount) && amount > 0) {
    const interest = rates[activeDuration]; 
    const profit = amount * interest;
    const total = profit * usdToBtcrate;
    resultBTC.textContent = `${total.toFixed(8)} BTC`;
    resultUSD.textContent = `$${profit.toFixed(2)} USD`;
  } else {
    resultBTC.textContent = '0.0000000 BTC';
    resultUSD.textContent = '$0.00 USD';
  }
}

hashrateInput.addEventListener('input', calculateIncome);

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    activeDuration = button.getAttribute('data-period'); // use data-period in HTML
    calculateIncome();
  });
});

calculateIncome();

// the end of the hero-calculator section up here


// the start of the hero-animation section down here

window.addEventListener("DOMContentLoaded", () => {
  const heroText = document.querySelector(".hero-text");
  const calcCard = document.getElementById("calcCard");

  heroText.classList.add("animate-left");
  calcCard.classList.add("animate-right");
});

// the end of the hero-animation section up here


// the start of the hero-section onscroll overlay section down here

window.addEventListener('scroll', () => {
  const heroBg = document.querySelector('.hero-bg');
  const scrollY = window.scrollY;

  // Fade out when scrolling down up to 200px
  if (scrollY <= 800) {
    const opacity = 1 - scrollY / 800;
    heroBg.style.opacity = opacity;
  } else {
    heroBg.style.opacity = 0;
  }
});

// the end of the hero-section onscroll overlay section up here

// the end of the entire hero-section section up here








// the start of the real-time trading section down here


const ticker = document.querySelector('.ticker-list');

// Duplicate the list items for seamless looping
const tickerContent = ticker.innerHTML;
ticker.innerHTML += tickerContent;

let scrollPosition = 0;

function animateTicker() {
  scrollPosition -= 1;
  ticker.style.transform = `translateX(${scrollPosition}px)`;

  // When the scroll has moved half the duplicated content, reset
  if (Math.abs(scrollPosition) >= ticker.scrollWidth / 2) {
    scrollPosition = 0;
  }

  requestAnimationFrame(animateTicker);
}

animateTicker();
  
  
  // ====== Simulated Price Update (for demo purposes) ======
  const cards = document.querySelectorAll('.crypto-card');
  
  function simulatePriceChange() {
    cards.forEach(card => {
      const priceElement = card.querySelector('.price');
      const changeElement = card.querySelector('p span');
  
      let price = parseFloat(priceElement.textContent.replace(/[^0-9.]/g, ''));
      let change = (Math.random() * 2 - 1).toFixed(2); // Random change between -1 and +1
  
      // Apply change
      price += (price * change) / 100;
      priceElement.textContent = `$${price.toFixed(2)}`;
  
      // Update change text and color
      changeElement.textContent = `${change > 0 ? '+' : ''}${change}%`;
      changeElement.className = change > 0 ? 'positive' : 'negative';
    });
  }
  
  setInterval(simulatePriceChange, 5000); // Every 5 seconds