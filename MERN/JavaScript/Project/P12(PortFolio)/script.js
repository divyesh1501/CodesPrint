// let dayNight = document.querySelector('.dayNight');
// let dark = document.querySelector('.dark');

// dayNight.addEventListener('click',()=>{
//     dark.classList.toggle('night');
// })

let dayNight = document.querySelector('.dayNight');

dayNight.addEventListener('click', () => {
    document.body.classList.toggle('night');
});

let typingEffect = new Typed('#text',{strings:["Coder","ReactJS Devloper"],
    loop:true,
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    showCursor: false
})