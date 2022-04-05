window.addEventListener('DOMContentLoaded' , () => {
    const nav = document.querySelector('nav'),
    menu = document.querySelector('.none'),
    linksContainer = document.querySelector('.links'),
    links = document.querySelectorAll('.links ul li a'),
    loading = document.querySelector('.loading');

    // loading start
    window.addEventListener('load' , () => {
        loading.style.opacity = 0 ; 
        setTimeout(() => {
            loading.style.display = 'none' ;
        }, 300);
    })
    // loading end

    // scroll event start

    window.addEventListener('scroll', () =>  {
        nav.classList.toggle('active' , window.scrollY > 100);
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