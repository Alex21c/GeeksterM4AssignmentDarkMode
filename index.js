'use strict';
let wrapperMoonAndSun = document.querySelector('#wrapperMoonAndSun');
let circleMask = document.querySelector('.circleMask');
let body = document.querySelector('body');
wrapperMoonAndSun.addEventListener('click', function(e){
  if(body.className==='dayMode'){
    body.className='nightMode';
    circleMask.classList.remove('circleCoverSun');
    circleMask.classList.add('circleCoverMoon');
  }else{  
    body.className='dayMode';
    circleMask.classList.remove('circleCoverMoon');
    circleMask.classList.add('circleCoverSun');
  }
});

