// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date automatically ************
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

// ********** close links ************
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function(){
     // linksContainer.classList.toggle('show-links'); - Aqui o codigo funciona no entando nao leva em consideracao o css, ou seja, precisa ser feito com css dinamico caso seja necessario adicionar ou retirar links e o css automaticamente ser ajustado. 
    
    //aqui estamos ajustando dinamicamente o tamanho do menu lateral direito
     const containerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;
    if (containerHeight ===0){
        linksContainer.style.height = `${linksHeight}px`;
    }else {
        linksContainer.style.height =0;
    }
});

const navbar= document.getElementById('nav');
const topLink = document.querySelector('.top-link');

// ********** fixed navbar ************

window.addEventListener('scroll', function() {
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;

    if (scrollHeight > navHeight) {
        navbar.classList.add('fixed-nav');
    }
    else {
        navbar.classList.remove('fixed-nav');
    }

    if (scrollHeight > 589) {
        topLink.classList.add('show-link')
    }
    else {
        topLink.classList.remove('show-link');
    }

});

// ********** smooth scroll ************
// select links
