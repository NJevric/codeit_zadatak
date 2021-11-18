export const printSocials = () => {
    const socials = [
        {
            href:'#',
            iClass: 'fab fa-facebook'
        },
        {
            href:'#',
            iClass: 'fab fa-twitter'
        },
        {
            href:'#',
            iClass: 'fab fa-instagram'
        },
        {
            href:'#',
            iClass: 'fab fa-linkedin'
        }
    ]

    var socialBlock = document.querySelector('.footer__social');

    socials.forEach( social => {
        socialBlock.innerHTML+=` <a href="${social.href}"><i class="${social.iClass}"></i></a>`
    })
}