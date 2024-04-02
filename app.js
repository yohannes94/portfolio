const humburger = document.querySelector('.humburger');
const exitButton = document.querySelector('.exit-button');
const sideBar = document.querySelector('.aside');
const anchor = document.querySelectorAll('a li');
const aboutRight = document.querySelector('.about-right');
const profile = document.querySelector('.profile');
const services = document.querySelectorAll('.service-1');
const portfolio = document.querySelectorAll('.portfolio-1');
const skill = document.querySelector('.skill');
const skill1 = document.querySelector('.skill1');
const skill2 = document.querySelector('.skill2');
const skill3 = document.querySelector('.skill3');


humburger.addEventListener('touchstart', (event) => {
  sideBar.classList.add('show'); 
})
exitButton.addEventListener('touchstart', () => {
  sideBar.classList.remove('show');
})
 
for(let i = 0; i < anchor.length; i++){
  anchor[i].addEventListener('touchstart', ()=>{
    sideBar.classList.remove('show');
  })
}

window.addEventListener('scroll', () => {
  if(aboutRight.getBoundingClientRect().top < window.innerHeight * 5 / 5){
    aboutRight.classList.add('show');
  } else {
    aboutRight.classList.remove('show');
  }
})

window.addEventListener('scroll', () => {
  if(profile.getBoundingClientRect().top < window.innerHeight * 5 / 5){
    profile.classList.add('show');
  } else {
    profile.classList.remove('show');
  }
})

window.addEventListener('scroll', () => {
  for(let i = 0; i < services.length; i++){
    if(services[i].getBoundingClientRect().top < window.innerHeight * 5 / 4){
      services[i].classList.add('show');
    } else {
      services[i].classList.remove('show');
    }
  }
})

window.addEventListener('scroll', () => {
  for(let i = 0; i < portfolio.length; i++){
    if(portfolio[i].getBoundingClientRect().top < window.innerHeight * 5 / 4){
      portfolio[i].classList.add('show');
    } else {
      portfolio[i].classList.remove('show');
    }
  }
})

window.addEventListener('scroll', () => {
  if(skill.getBoundingClientRect().top < window.innerHeight * 5 / 4) {
    skill.classList.add('skill-1');
  } else {
    skill.classList.remove('skill-1');
  }
})
window.addEventListener('scroll', () => {
  if(skill1.getBoundingClientRect().top < window.innerHeight * 5 / 4) {
    skill1.classList.add('skill-2');
  } else {
    skill1.classList.remove('skill-2');
  }
})
window.addEventListener('scroll', () => {
  if(skill2.getBoundingClientRect().top < window.innerHeight * 5 / 4) {
    skill2.classList.add('skill-3');
  } else {
    skill2.classList.remove('skill-3');
  }
})
window.addEventListener('scroll', () => {
  if(skill3.getBoundingClientRect().top < window.innerHeight * 5 / 4) {
    skill3.classList.add('skill-4');
  } else {
    skill3.classList.remove('skill-4');
  }
})



