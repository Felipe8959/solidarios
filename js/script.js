// Alterar a cor da navbar ao rolar
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Efeitos de animação ao rolar
const animatables = document.querySelectorAll('.animate');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1
});

animatables.forEach(element => {
    observer.observe(element);
});

// Smooth scroll para navegadores que não suportam nativamente
document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetID = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetID);
        const offsetTop = targetSection.offsetTop - 70; // altura da navbar

        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    });
});