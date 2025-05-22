// Animation utilities for scroll effects
export function initScrollAnimations() {
  if (typeof window === 'undefined') return;
  
  // Get all elements that need to animate on scroll
  const animatedElements = document.querySelectorAll('.fadeIn');
  
  const animateOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.8;
    
    animatedElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      
      if (elementTop < triggerBottom) {
        element.classList.add('visible');
      }
    });
  };
  
  // Run once to check for elements already in view on page load
  animateOnScroll();
  
  // Add scroll event listener
  window.addEventListener('scroll', animateOnScroll);
  
  // Return a cleanup function
  return () => {
    window.removeEventListener('scroll', animateOnScroll);
  };
}
