document.querySelectorAll('.flip-button').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelector('.container').classList.toggle('flipped');
    });
});
