const btn = document.querySelector('#switch');
btn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    btn.classList.toggle('active');
});