export const initHeaderScroll = () => {
    const header = document.querySelector('.header');
    if (!header) return;

    let lastScroll = 0;

    window.addEventListener(
        'scroll',
        () => {
            const currentScroll = window.pageYOffset;

            if (currentScroll <= 0) {
                header.classList.remove('is-scroll-up', 'is-scroll-down');
                return;
            }

            if (currentScroll > lastScroll && !header.classList.contains('is-scroll-down')) {
                header.classList.remove('is-scroll-up');
                header.classList.add('is-scroll-down');
            } else if (currentScroll < lastScroll && header.classList.contains('is-scroll-down')) {
                header.classList.remove('is-scroll-down');
                header.classList.add('is-scroll-up');
            }

            lastScroll = currentScroll;
        },
        { passive: true }
    );
};
