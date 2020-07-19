const card1 = document.querySelector('.card:nth-child(1)')
const card2 = document.querySelector('.card:nth-child(2)')
const card3 = document.querySelector('.card:nth-child(3)')

const aboutMe = document.querySelector('.about-me')
const tools = document.querySelector('.tools')
const goals = document.querySelector('.goals')


card1.addEventListener('click', function(){
    aboutMe.style.display = 'block'
    tools.style.display = 'none'
    goals.style.display = 'none'
})

card2.addEventListener('click', function(){
    aboutMe.style.display = 'none'
    tools.style.display = 'block'
    goals.style.display = 'none'
})

card3.addEventListener('click', function(){
    aboutMe.style.display = 'none'
    tools.style.display = 'none'
    goals.style.display = 'block'
})