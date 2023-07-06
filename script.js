
// appearing project titles on scrolling
const projectBoxTitles = document.querySelectorAll('.project-box-title')
window.addEventListener('scroll',()=>{
    projectBoxTitles.forEach(title=>{
        if(title.offsetTop-window.scrollY<600){
            title.classList.add('project-box-title-rise')
        } else {
            title.classList.remove('project-box-title-rise')
        }
    })
})

// appearing project details on scrolling
const projectInfoBoxes = document.querySelectorAll('.project-info-box')
window.addEventListener('scroll',()=>{
    projectInfoBoxes.forEach(title=>{
        if(title.offsetTop-window.scrollY<600){
            title.classList.add('project-info-box-fall')
        } else {
            title.classList.remove('project-info-box-fall')
        }
    })
})

// addding animation to skill section header
const header = document.querySelector('#skills-section-main-header')
window.addEventListener('scroll',()=>{
        if(header.offsetTop-window.scrollY<400){
            header.classList.add('skills-section-main-header-anim')
        } else {
            header.classList.remove('skills-section-main-header-anim')
        }
})

// skill pop animation
const skills = document.querySelectorAll('.skill')
window.addEventListener('scroll', () => {
    skills.forEach(skill=>{
        if(skill.offsetTop-window.scrollY<500){
            skill.classList.add('skill-pop')
        } else {
            skill.classList.remove('skill-pop')
        }
    })
})

// skill header pop animation
const skillHeaders = document.querySelectorAll('.skills-type')
window.addEventListener('scroll', () => {
    skillHeaders.forEach(skillH=>{
        if(skillH.offsetTop-window.scrollY<500){
            skillH.classList.add('skill-header-pop')
        } else {
            skillH.classList.remove('skill-header-pop')
        }
    })
})

// projects section title animation
const projectHeader = document.querySelector('#s2-header-border')
window.addEventListener('scroll', () => {

    if (projectHeader.offsetTop - window.scrollY < 600) {
            projectHeader.classList.add('s2-header-border-anim')
    } else {
            projectHeader.classList.remove('s2-header-border-anim')
        }
    
})

//menu for mobile devices
const crossSrc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABKElEQVR4nO2YzU7CQBRGz+PogldAZYE/rJSCO3CJoLj0kX0A5SeAlDShhpAZ2tA6nU6+k3TXuZmT2+nce0EIIYQQQvhIA3guMV4LuMExl8AXsAGGJcRrAt/AzKVMKhHvn9+CMlfAz0G8GXCNA/r7TMQlyLSB+VGsLfCGIxKZtWEDoxIkPnBMzyLzmmPtLbAwrJ1SERGwMmxofGLNnW8S58h4K5HStchM/t6Ae4vEO57RAZaWP1BtJFIeLZnJypaXPBgyU9k98V8ytZIIRqST49Py9pAHddifTmy4Nr/fbo7b3ftbPQqhRInOqIBtla/z8j2rjB/l7EW8kOkbJJIu8aVgYxUDnzgimFb34mj4UHSS0qxq+HAok0gMqOk4KKgBnRBCCCGEIJMdXBTwCqWDRf4AAAAASUVORK5CYII="

const menu = document.querySelector("#menu");
const nav = document.querySelector("nav"); 
if (window.innerWidth < 600) {
    nav.style.display = "none";
}
const toggleMenu = () => {
    
    if (nav.style.display == "none") {
        nav.style.display = "flex";
        menu.src="https://img.icons8.com/ios-filled/50/392572/multiply.png"
        
    } else{
        menu.src="https://img.icons8.com/ios-filled/50/392572/menu--v1.png"
        nav.style.display = "none";
    }
}

// contact section illustration moving animation 
const image = document.querySelector('#greeting-box img')
window.addEventListener('scroll', () => {
    if (image.offsetTop - window.scrollY < -5700) {
            image.classList.add('greeting-box-anim')
    } else {
            image.classList.remove('greeting-box-anim')
        }
    
})

//typewriting effect for intro

let i = 0;
const txt = 'I love to craft eye-catching, interactive things with code, and love what i do.';
var speed = 10;
window.onload= function(){
    typeWriter()
}
const typeWriter = () => {
    if (i < txt.length) {
        document.getElementById("intro").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    } else if (i == txt.length) {
        afterType()
    }
}
const afterType=()=>{
    document.getElementById('hi-headline').classList.add('appear-hi-headline')
}
