// Initialize Lucide Icons
lucide.createIcons();

// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Sticky Header Logic
    const header = document.getElementById("header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
            header.classList.remove("glass");
        } else {
            header.classList.remove("scrolled");
            header.classList.add("glass");
        }
    });

    // 2. Mobile Menu Toggle
    const mobileBtn = document.getElementById("mobile-menu-btn");
    // (Implementation for mobile menu sliding out can be added here)
    
    // 3. GSAP Animations
    // Hero Animations
    const heroTl = gsap.timeline();
    
    heroTl.from(".hero-content > *", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.2
    });

    heroTl.from(".hero-image .glass", {
        scale: 0.9,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    }, "-=0.6");
    
    heroTl.from(".hero-image .absolute", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: "back.out(1.7)"
    }, "-=0.4");

    // Number Counter Animation for Statistics
    const counters = document.querySelectorAll(".counter");
    
    counters.forEach(counter => {
        ScrollTrigger.create({
            trigger: counter,
            start: "top 80%",
            once: true,
            onEnter: () => {
                const target = parseInt(counter.getAttribute("data-target"));
                gsap.to(counter, {
                    innerHTML: target,
                    duration: 2,
                    snap: { innerHTML: 1 },
                    ease: "power1.out",
                    onUpdate: function() {
                        counter.innerHTML = Math.ceil(this.targets()[0].innerHTML);
                    }
                });
            }
        });
    });

    // Stat cards stagger fade in
    gsap.from(".stat-card", {
        scrollTrigger: {
            trigger: ".stat-card",
            start: "top 85%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out"
    });
});
