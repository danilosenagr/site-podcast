// Menu Mobile
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const closeMenu = document.querySelector('.close-menu');
    
    if (mobileMenuToggle && mobileMenu && closeMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            mobileMenu.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
        
        closeMenu.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    }
    
    // FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    if (faqQuestions) {
        faqQuestions.forEach(question => {
            question.addEventListener('click', function() {
                const answer = this.nextElementSibling;
                
                // Toggle active class
                this.classList.toggle('active');
                answer.classList.toggle('active');
            });
        });
    }
    
    // Events Tabs
    const eventsTabs = document.querySelectorAll('.events-tab');
    const eventsContents = document.querySelectorAll('.events-content');
    
    if (eventsTabs && eventsContents) {
        eventsTabs.forEach((tab, index) => {
            tab.addEventListener('click', function() {
                // Remove active class from all tabs and contents
                eventsTabs.forEach(tab => tab.classList.remove('active'));
                eventsContents.forEach(content => content.classList.remove('active'));
                
                // Add active class to clicked tab and corresponding content
                this.classList.add('active');
                eventsContents[index].classList.add('active');
            });
        });
    }
    
    // Episodes Filter
    const filterButtons = document.querySelectorAll('.filter-button');
    const episodeItems = document.querySelectorAll('.episode-item');
    
    if (filterButtons && episodeItems) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                const filter = this.getAttribute('data-filter');
                
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                // Filter episodes
                episodeItems.forEach(item => {
                    if (filter === 'all' || item.classList.contains(filter)) {
                        item.style.display = 'flex';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }
    
    // Animate numbers in metrics section
    function animateNumbers() {
        const numbers = document.querySelectorAll('.metric-number, .impact-number');
        
        numbers.forEach(number => {
            const target = number.textContent;
            const suffix = target.includes('+') ? '+' : '';
            const numTarget = parseInt(target.replace(/\D/g, ''));
            let count = 0;
            const duration = 2000; // 2 segundos
            const interval = Math.floor(duration / numTarget);
            
            const counter = setInterval(() => {
                count += 1;
                number.textContent = count + suffix;
                
                if (count >= numTarget) {
                    clearInterval(counter);
                    number.textContent = target;
                }
            }, interval > 0 ? interval : 20);
        });
    }
    
    // Check if element is in viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    // Start animation when metrics section is visible
    function checkIfVisible() {
        const metricsSection = document.querySelector('.metrics-section');
        const impactSection = document.querySelector('.impact-section');
        
        if ((metricsSection && isElementInViewport(metricsSection)) || 
            (impactSection && isElementInViewport(impactSection))) {
            animateNumbers();
            window.removeEventListener('scroll', checkIfVisible);
        }
    }
    
    window.addEventListener('scroll', checkIfVisible);
    checkIfVisible(); // Check on initial load
});
