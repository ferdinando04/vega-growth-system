// Main JavaScript for Fernando Vega Landing Page
// Interactividad y animaciones premium

document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scroll for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Apply fade-in to sections
    const fadeElements = document.querySelectorAll('section');
    fadeElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(el);
    });
    
    // Navbar background on scroll
    const nav = document.querySelector('nav');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 50) {
            nav.style.backgroundColor = 'rgba(10, 10, 10, 0.95)';
        } else {
            nav.style.backgroundColor = 'rgba(10, 10, 10, 0.85)';
        }
        
        lastScroll = currentScroll;
    });
    
    // WhatsApp button pulse effect enhancement
    const whatsappBtn = document.querySelector('a[href*="wa.me"]');
    if (whatsappBtn) {
        setInterval(() => {
            whatsappBtn.style.transform = 'scale(1.05)';
            setTimeout(() => {
                whatsappBtn.style.transform = 'scale(1)';
            }, 200);
        }, 3000);
    }
    
    // Track CTA clicks (opcional - para analytics)
    const ctaButtons = document.querySelectorAll('a[href*="wa.me"], a[href="#agenda"]');
    ctaButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const ctaType = this.textContent.trim();
            console.log('CTA clicked:', ctaType);
            // Aquí podrías añadir Google Analytics o tracking
        });
    });
    
    // Add staggered animation to case cards
    const caseCards = document.querySelectorAll('#casos-exito .bg-surface');
    caseCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s`;
        
        const cardObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });
        
        cardObserver.observe(card);
    });
    
    console.log('✅ Fernando Vega Landing Page - JavaScript loaded successfully');
});
