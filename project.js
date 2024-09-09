

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Animate the title
gsap.from('.title', {
  duration: 1,
  y: 100,
  opacity: 0,
  ease: 'power2.inOut',
  scrollTrigger: {
    trigger: '.title',
    start: 'top 80%',
    end: 'bottom 20%',
    toggleActions: 'play none none reset',
  },
});

// Animate the cards
gsap.from('.cards', {
  duration: 1,
  y: 100,
  opacity: 0,
  ease: 'power2.inOut',
  stagger: 0.2,
  scrollTrigger: {
    trigger: '.cards-container',
    start: 'top 80%',
    end: 'bottom 20%',
    toggleActions: 'play none none reset',
  },
});

// Animate the images
gsap.from('.c-1, .c-2', {
  duration: 1,
  scale: 0.5,
  opacity: 0,
  ease: 'power2.inOut',
  scrollTrigger: {
    trigger: '.cards-container',
    start: 'top 80%',
    end: 'bottom 20%',
    toggleActions: 'play none none reset',
  },
});

// Animate the navigation
gsap.from('.nav-bar', {
  duration: 1,
  y: -100,
  opacity: 0,
  ease: 'power2.inOut',
  scrollTrigger: {
    trigger: '.nav-bar',
    start: 'top 80%',
    end: 'bottom 20%',
    toggleActions: 'play none none reset',
  },
});

// Animate the menu items
gsap.from('.menu-items li', {
  duration: 1,
  y: 100,
  opacity: 0,
  ease: 'power2.inOut',
  stagger: 0.2,
  scrollTrigger: {
    trigger: '.nav-bar',
    start: 'top 80%',
    end: 'bottom 20%',
    toggleActions: 'play none none reset',
  },
});

gsap.from('.cards',{
scrollTrigger :{
    trigger : '#three',
    x:-500,
    opacity :0,
    duration :1,
    start :"top 80%",
    end : "bottom 80%",
 

}

})