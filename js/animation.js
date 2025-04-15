
  // Register ScrollTrigger with GSAP
  gsap.registerPlugin(ScrollTrigger);

  // Ensure DOM is fully loaded
  document.addEventListener("DOMContentLoaded", () => {
    // Preloader Animation


    // Navbar Animation (Subtle Drop, Always Visible)


    // Hero Section Animations
    gsap.from(".hero-text h1", {
      y: 50,
      opacity: 0,
      duration: 1,
      delay: 0.5,
      ease: "power3.out",
    });

    gsap.from(".hero-text h2", {
      y: 50,
      opacity: 0,
      duration: 1,
      delay: 0.7,
      ease: "power3.out",
    });

    gsap.from(".hero-text .custom-btn", {
      scale: 0.8,
      opacity: 0,
      duration: 0.8,
      delay: 0.9,
      ease: "elastic.out(1, 0.5)",
    });

    gsap.from(".hero-image-wrap", {
      scale: 0,
      rotationX: 90,
      opacity: 0,
      duration: 1.5,
      delay: 1,
      ease: "power3.out",
      transformOrigin: "center",
    });

    // About Section - Staggered Animation
    gsap.from(".about-thumb h2, .about-thumb h3, .about-thumb p", {
      scrollTrigger: {
        trigger: "#section_2",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      y: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.3,
      ease: "power2.out",
    });

    gsap.from("#dotlottie-player", {
      scrollTrigger: {
        trigger: "#section_2",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      rotationY: 90,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      transformOrigin: "left",
    });

    
    // Featured Section - Staggered Numbers
    gsap.from(".featured-numbers", {
      scrollTrigger: {
        trigger: ".featured",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      innerText: 0,
      duration: 1.5,
      stagger: 0.2,
      ease: "power1.out",
      snap: { innerText: 1 },
    });

    


    

    // Services Section - 3D Card Flip Effect
    gsap.utils.toArray(".services-thumb").forEach((thumb, i) => {
      gsap.from(thumb, {
        scrollTrigger: {
          trigger: thumb,
          start: "top 85%",

        },
        skewY: 10,
        x:100,
        opacity: 0,
        duration:0.3,
        delay: i * 0.1,

      });
    });

    // Updated Projects Section - New Animation (Scale and Fade with Slight Tilt)
    gsap.utils.toArray(".projects-thumb").forEach((project, i) => {
      gsap.from(project, {
        scrollTrigger: {
          trigger: project,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
        scale: 0.9, // Slight scale-up effect
        opacity: 0,
        rotation: 5, // Subtle tilt for modern feel
        duration: 0.3,
        delay: i * 0.1, // Reduced stagger for smoother flow
        ease: "power3.out",
        transformOrigin: "center bottom",
      });
    });

    // Contact Section - Form and Info Animation
    gsap.from(".contact-info", {
      scrollTrigger: {
        trigger: "#section_5",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      x: -100,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });

    gsap.from(".contact-form", {
      scrollTrigger: {
        trigger: "#section_5",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      x: 100,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });



    // Footer Animation
    gsap.from(".site-footer", {
      scrollTrigger: {
        trigger: ".site-footer",
        start: "top 95%",
        toggleActions: "play none none reverse",
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });
  });
