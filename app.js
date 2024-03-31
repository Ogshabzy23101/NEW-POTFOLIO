import './src/utilities.js'

gsap.from(".contact-tittle", { x: -1000, duration: 2, stagger: 3 })
gsap.from(".contact-info article", { opacity: 0, y: 100, duration: 1, stagger: 1 })
gsap.from(".contact-us-form article", {
 duration: 1,
 scale: 0.1,
 y: 40,
 ease: "power1.inOut",
 stagger: {
  grid: [7, 15],
  from: "end",
  axis: "x",
  ease: "power3.inOut",
  amount: 1.5
 }
});

// Create the observer like the examples above
const observer = new IntersectionObserver(entries => {
 entries.forEach(entry => {
  if (entry.isIntersecting) {
   entry.target.classList.add('scroll-animation');
   return;
  }

  entry.target.classList.remove('scroll-animation');
 });
});

// Get multiple elements instead of a single one using "querySelectorAll"
const squares = document.querySelectorAll('.about-section');
// const title = document.querySelectorAll('.about-title');
// const para = document.querySelectorAll('.about-para');
// const images = document.querySelectorAll('.about-image');

// Loop over the elements and add each one to the observer
squares.forEach((element) => observer.observe(element));
// title.forEach((element) => observer.observe(element));
// para.forEach((element) => observer.observe(element));
// images.forEach((element) => observer.observe(element));