const mobileToggle = document.querySelector('.mobile__toggler');
const primaryNav = document.querySelector('.nav__links');
//const selectLink = document.querySelector('.sub_nav');

mobileToggle.addEventListener('click', () => {
    const ifVisible = primaryNav.getAttribute('data-visible');
    if (ifVisible === 'false'){
        primaryNav.setAttribute('data-visible', true);
        mobileToggle.setAttribute('aria-expanded', true);
    } else {
        primaryNav.setAttribute('data-visible', false);
        mobileToggle.setAttribute('aria-expanded', false);
    }
})