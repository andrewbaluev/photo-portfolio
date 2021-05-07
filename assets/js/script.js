window.onload = () => {

    const onscroll = (el, listener) => {
        el.addEventListener('scroll', listener)
    }

    const backtotop = document.querySelector('.back-to-top')
    if (backtotop) {
        const toggleBacktotop = () => {
            if (window.scrollY > 100) {
                backtotop.classList.add('active')
            } else {
                backtotop.classList.remove('active')
            }
        }
        window.addEventListener('load', toggleBacktotop);
        onscroll(document, toggleBacktotop);
    }


    const grid = document.querySelector('.grid');

    const masonry = new Masonry(grid, {
        itemSelector: '.grid-item',
        columnWidth: '.grid-item'
    });

    const lightbox = GLightbox({
        touchNavigation: true,
        loop: true,
        autoplayVideos: true
    });

    AOS.init({
        once: true
    });
};