const txt = document.querySelector('.text');

txt.addEventListener('mouseenter', () => {
    txt.classList.add('animation');
})
txt.addEventListener('mouseleave', () => {
    txt.classList.remove('animation');
})