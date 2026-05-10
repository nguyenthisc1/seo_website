import { initHeaderScroll } from './modules/header-scroll';
import { highlightCurrentLink, initNavigation } from './modules/navigation';

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    highlightCurrentLink();
    initHeaderScroll();
});
