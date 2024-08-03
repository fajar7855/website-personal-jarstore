document.addEventListener('DOMContentLoaded', () => {
    
    const contactForm = document.getElementById('contact-form');
    const menuToggle = document.querySelector('.menu-toggle');
    const navUl = document.querySelector('nav ul');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            alert(`Pesan dari ${name} (${email}) telah dikirim:\n\n${message}`);
            
            contactForm.reset();
        });
    }

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navUl.classList.toggle('showing');
        });
    }
});
