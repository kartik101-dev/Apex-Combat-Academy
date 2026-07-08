document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('#contact-form');
    const statusDiv = document.querySelector('#form-status');
    const submitBtn = document.querySelector('#submit-btn');
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            document.body.classList.toggle('nav-open');
            navLinks.classList.toggle('open');
        });
    }

    if (contactForm && submitBtn && statusDiv) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            submitBtn.disabled = true;
            submitBtn.style.opacity = '0.5';
            submitBtn.innerText = 'OPENING EMAIL...';

            const formData = new FormData(contactForm);
            const name = formData.get('name') || 'Unknown';
            const email = formData.get('email') || 'Not provided';
            const batch = formData.get('selected_batch') || 'Not selected';
            const message = formData.get('message') || 'No message provided';

            const mailTo = 'websitetesting191@gmail.com';
            const subject = encodeURIComponent(`APEX Fight Club submission from ${name}`);
            const body = encodeURIComponent(
                `Call Sign: ${name}\n` +
                `Email: ${email}\n` +
                `Fight Slot: ${batch}\n\n` +
                `Why You Fight:\n${message}`
            );

            const mailtoLink = `mailto:${mailTo}?subject=${subject}&body=${body}`;
            window.location.href = mailtoLink;

            setTimeout(() => {
                window.location.href = 'confirmation.html';
            }, 500);
        });
    }
});