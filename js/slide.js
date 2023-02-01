var on = $('.slidee').find('.activetop').index();
    console.log(on);
    var options = {
       horizontal: 1,
       itemNav: 'centered', //basic , centered,
       speed: 100,
       smart: 1,
       activateOn: 'click',
       mouseDragging: 1,
       touchDragging: 1,
       activateMiddle: 1,
       releaseSwing: 1,
       activeClass:   'activetop',
       startAt: on
      //  itemSelector:1
    };
    var frame = new Sly('.slide-frame', options).init();


/* Arrow Icon */
const preBtn = document.querySelector('.pre-arrow');
const nextBtn = document.querySelector('.next-arrow');
const slidee = document.querySelector('.slidee');
let numLi = 0;
let position = 0;
const moveWidth = 150;


function prev(){
  if(position<0){
  position += moveWidth;
  slidee.style.transform = `translateX(${position}px)`;
  }
  
}

function next(){
  if( position>-600){
  position -= moveWidth; 
  slidee.style.transform = `translateX(${position}px)`;
  }
  
  
}


preBtn.addEventListener('click', prev)
nextBtn.addEventListener('click', next)