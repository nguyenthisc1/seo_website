export const initNavigation = () => {
    // const header = document.querySelector('.header');
    const toggle = document.querySelector('.header__toggle');
    const nav = document.querySelector('.nav');
    const body = document.body;

    if (!toggle || !nav) return;

    const toggleMenu = (forceClose = false) => {
        const isOpen = forceClose ? true : nav.classList.contains('is-open');
        nav.setAttribute('aria-hidden', isOpen);

        if (isOpen) {
            nav.classList.remove('is-open');
            toggle.setAttribute('aria-expanded', 'false');
            body.style.overflow = '';
        } else {
            nav.classList.add('is-open');
            toggle.setAttribute('aria-expanded', 'true');
            body.style.overflow = 'hidden';
        }
    };

    toggle.addEventListener('click', () => toggleMenu());

    globalThis.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && nav.classList.contains('is-open')) {
            toggleMenu(true);
        }
    });

    const mql = globalThis.matchMedia('(min-width: 1024px)');
    mql.addEventListener('change', (e) => {
        if (e.matches && nav.classList.contains('is-open')) {
            toggleMenu(true);
        }
    });
};

export const highlightCurrentLink = () => {
    const currentPath = globalThis.location.pathname;
    const links = document.querySelectorAll('.nav__link, .header__link');

    for (const link of links) {
        const linkPath = link.getAttribute('href');
        if (currentPath === linkPath || (linkPath !== '/' && currentPath.startsWith(linkPath))) {
            link.classList.add('is-active');
            link.setAttribute('aria-current', 'page');
        }
    }
};
