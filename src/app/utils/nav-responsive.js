export const navReponsive = () => {
    const hamburger = document.querySelector('.hamburger');
    const close = document.querySelector('.close');
    
    hamburger.addEventListener('click', () => {
        document.querySelector('.overlay').classList.add('overlay--show');
        document.querySelector('.overlay').classList.remove('overlay--close');
    });
    close.addEventListener('click', () => {
        document.querySelector('.overlay').classList.remove('overlay--show');
        document.querySelector('.overlay').classList.add('overlay--close');
    });
}