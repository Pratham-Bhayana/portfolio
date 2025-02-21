gsap.registerPlugin(ScrollTrigger)

gsap.from('.logo div',{
    opacity:0,
    delay:1,
    x:20
} )

const menu_items = document.querySelector('.menu-items')
gsap.from(menu_items.children ,{
    opacity:0,
    x:0,
    duration:1,
    delay:1.5,
    stagger:{
        amount:1
    }
})


gsap.utils.toArray('.star').forEach(star=>{
    gsap.fromTo(star,{
        rotation:450,
        opacity:0,
        y:100
    },{
        rotation:0,
        opacity:1,
        y:0,
        duration:1,
        delay:1.5,
        scrollTrigger:star
    })
})


gsap.utils.toArray('.title').forEach(title=>{
    gsap.fromTo(title,{
        letterSpacing:'10px',
        opacity:0,
        x:300,
        skewX:65
    },{
        letterSpacing:'0',
        opacity:1,
        x:0,
        skewX:0,
        duration:1,
        delay:.5,
        scrollTrigger:title
    })
})

gsap.utils.toArray('p', ).forEach(p=>{
    gsap.fromTo(p,{
        opacity:0,
        x:150,
        stagger : 2,
        skewX:30
    },{
        opacity:1,
        x:0,
        skewX:0,
        duration:1,
        delay:.5,
        scrollTrigger:p,
        scrub:2

    })
})


gsap.utils.toArray('button').forEach(button=>{
    gsap.fromTo(button,{
        opacity:0,
    },{
        opacity:1,
        duration:1,
        delay:1,
        scrollTrigger:button

    })
})


gsap.from('.pyramid' ,{
    opacity:0,
    scale:.5,
    duration:1,
    delay:.5
})

gsap.fromTo('.hand',{
    scale:.2,
    opacity:0,
    skewY:30
},{
    scale:1,
    opacity:1,
    skewY:0,
    duration:1,
    delay:.5,
    scrollTrigger:'.hand'
})



gsap.utils.toArray('.line').forEach(line=>{
    gsap.fromTo(line,{
        opacity:0,
        width:'0%'
    },{
        opacity:1,
        width:'100%',
        duration:1,
        delay:1,
        scrollTrigger:line

    })
})


gsap.utils.toArray('.rotation').forEach(rotate=>{
    gsap.fromTo(rotate,{
        opacity:0,
        
        scale:.2
    },{
        opacity:1,
        rotation:0,
        scale:1,
        duration:1,
        delay:1,
        scrollTrigger:rotate

    })
})


gsap.fromTo('.card' ,{
    opacity:0,
    scale:.1,
},{
    opacity:1,
    scale:1,
    duration:1,
    delay:.5,
    stagger:{
        amount:1
    },
    scrollTrigger:'.card'
})

gsap.from('span',{
    markers:true,
    scrollTrogger:{
        trigger : ('span'),
        opacity : 2,
        duration : 1,
        x:150,
        scrub:1,
        stagger : 2,
        markers : true
    }
})

// Select all the spans inside the .ok element
const spans = document.querySelectorAll('.ok span');

// Create a timeline for the animation
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.ok', // The element that triggers the animation
    start: 'top 80%', // The animation starts when the top of the element is 80% from the top of the viewport
    end: 'bottom 20%', // The animation ends when the bottom of the element is 20% from the bottom of the viewport
    toggleActions: 'play none none reset' // The animation plays when the element is scrolled into view, and resets when it's scrolled out of view
  }
});

// Animate each span one by one
spans.forEach((span, index) => {
  tl.from(span, {
    opacity: 0, // Start with an opacity of 0
    y: 20, // Move the span 20px up
    duration: 0.5, // The animation duration
    delay: index * 0.2 // Delay the animation by 0.2 seconds for each span
  });
});



const menu = document.querySelector('.menu')


gsap.from(menu.children,{
    opacity:0,
    x:50,
    duration:1,
    delay:.5,
    stagger:{
        amount:1
    },
    scrollTrigger:{
        trigger:menu.children
    }
});

const knowMore = document.getElementById('know');
knowMore.addEventListener('click', () =>{
    const url = "/projects.html";
    window.location.href = url;
});

const downloadButton = document.getElementById('pdf');

downloadButton.addEventListener('click', ()=> {
    const link = document.createElement('a')
    link.href = "/files/Resume.pdf" ;
    link.download = 'resume.pdf' ;
    link.click();
});



const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('click', () => {
    const url = card.getAttribute('data-url');
    window.location.href = url;
  });
});