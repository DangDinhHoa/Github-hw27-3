
document.querySelector('.get-card').addEventListener('click', () => {
    const email = document.querySelector('input[type="email"]').value;
    if (email) {
        alert(`Thank you for signing up with ${email}! Your free card is on the way.`);
    } else {
        alert('Please enter a valid email address.');
    }
});

const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
});

document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});