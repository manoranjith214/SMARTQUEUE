document.addEventListener('DOMContentLoaded', () => {
    
   
    const predictBtn = document.getElementById('predictBtn');
    const resultArea = document.getElementById('resultArea');
    const posValue = document.getElementById('posValue');
    const timeValue = document.getElementById('timeValue');

    predictBtn.addEventListener('click', () => {
        const tokenInput = document.getElementById('tokenNumber').value;
        const avgServiceTime = parseInt(document.getElementById('serviceType').value);

        if (!tokenInput || tokenInput <= 0) {
            alert('Please enter a valid Token Number.');
            return;
        }

        
        const currentServing = Math.max(1, tokenInput - Math.floor(Math.random() * 15 + 1));
        const queuePosition = tokenInput - currentServing;

      
        const estimatedWait = queuePosition * avgServiceTime;

     
        predictBtn.innerText = "Processing...";
        predictBtn.disabled = true;

        setTimeout(() => {
            posValue.innerText = queuePosition + " people ahead";
            timeValue.innerText = estimatedWait + " minutes";
            
            resultArea.classList.remove('hidden');
            predictBtn.innerText = "Predict Wait Time";
            predictBtn.disabled = false;
            
           
            resultArea.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 800);
    });

    
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you! Your message has been sent successfully (Demo only).');
        contactForm.reset();
    });

   
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        alert('Menu toggled! In a full build, this would open a mobile sidebar.');
    });
});