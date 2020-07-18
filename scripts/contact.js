const phoneButton = document.querySelector('.phone-btn')
const emailButton = document.querySelector('.email-btn')
const githubButton = document.querySelector('.github-btn')
const linkedinButton = document.querySelector('.linkedin-btn')
const iconImage = document.querySelector('.icons img')

phoneButton.addEventListener('mouseover', function() {
    iconImage.src = 'assets/phone-icon.svg'
})

emailButton.addEventListener('mouseover', function() {
    iconImage.src = 'assets/email-icon.svg'
})

githubButton.addEventListener('mouseover', function() {
    iconImage.src = 'assets/github-icon.svg'
})

linkedinButton.addEventListener('mouseover', function() {
    iconImage.src = 'assets/linkedin-icon.svg'
})