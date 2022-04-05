window.addEventListener('DOMContentLoaded' , () => {
    const nav = document.querySelector('nav'),
    menu = document.querySelector('.none'),
    linksContainer = document.querySelector('.links'),
    links = document.querySelectorAll('.links ul li a');

    // scroll event start

    window.addEventListener('scroll', () =>  {
        nav.classList.toggle('active' , window.scrollY > 0);
    });

    // scroll event end

    // menu start

    menu.addEventListener('click' , () => {
        linksContainer.classList.toggle('active');
        menu.classList.toggle('active');
    });



    links.forEach(item => {
        item.addEventListener('click' , () => {
            linksContainer.classList.toggle('active');
        });
    });
    // menu start
});