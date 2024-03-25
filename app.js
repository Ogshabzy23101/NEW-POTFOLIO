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