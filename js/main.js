


const navbar = document.getElementById('navbar-fixed');
const falseicon =document.getElementById('false-icon');
const items = document.querySelectorAll(' .nav-item a');
const navbarcollapse =document.getElementById('navbarSupportedContent');
 const navbarToggler =document.getElementById('navbar-toggler');
const navbarHeightPx = 90;

window.addEventListener('scroll', reveal);

function reveal(){
  var reveals = document.querySelectorAll('.reveal');

  for(var i = 0; i < reveals.length; i++){

	var windowheight = window.innerHeight;
	var revealtop = reveals[i].getBoundingClientRect().top;
	var revealpoint = 150;

	if(revealtop < windowheight - revealpoint){
	  reveals[i].classList.add('active');
	}
	else{
	  reveals[i].classList.remove('active');
	}
  }
}

window.addEventListener('scroll', () => {
  if (
    document.body.scrollTop > navbarHeightPx ||
    document.documentElement.scrollTop > navbarHeightPx
  ) {
    navbar.style.backgroundColor='#040c61';
  } else {
    navbar.style.backgroundColor='transparent';

  }
});
items.forEach((item, idx) => {  
  item.addEventListener('click', () => {   
    ToggleActive(item,idx);
  });
});

function ToggleActive(el,index) {
  el.classList.toggle('active');
  items.forEach((item,idx) => {
    if(idx !== index){
      item.classList.remove("active");
    }
  });
}

const swiper = new Swiper('.js-testimonals-slider', {
  // Optional parameters
grabCursor:true,
spaceBetween:30,

  pagination: {
    el: '.js-testimonals-pagination',
    clickable:true
  },
  breakpoints:{
    767:{
      slidesPerView:2
    }
  }
}
)



const  count = document.querySelectorAll(".count  #counter");
const section =document.querySelector(".about-section-part4 .row ");
let started =false;

window.onscroll =function (){
  if (window.scrollY >= section.offsetTop){
    if(!started){
      count.forEach((con) =>startCount(con))
    }
    started=true;
  }
}


function startCount(el) {
  let goal =el.dataset.goal;
  let counts =setInterval(() =>{
    el.textContent++;
    if(el.textContent == goal){
      clearInterval(counts);
    }
  },1000 / goal)
}

falseicon.addEventListener('click',() =>{
  navbarcollapse.style.display='none';
})
navbarToggler.addEventListener('click',() =>{
  navbarcollapse.style.display='block';
})