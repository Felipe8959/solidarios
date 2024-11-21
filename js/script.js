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



function sendEmail() {
    const name = document.getElementById('contactName').value;
    const email = document.getElementById('contactEmail').value;
    const message = document.getElementById('contactMessage').value;

    // Validando se todos os campos foram preenchidos
    if (!name || !email || !message) {
        alert('Por favor, preencha todos os campos antes de enviar!');
        return;
    }

    // Criando o link mailto com os dados
    const subject = encodeURIComponent('Contato do site Solidários');
    const body = encodeURIComponent(
        `${message}`
    );
    const mailtoLink = `mailto:solidarios.rc@gmail.com?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;
}
