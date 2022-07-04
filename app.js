
  
const d=document,
      $slidesContainer = d.querySelector('.slides-cntr'),
      $slide = d.querySelectorAll('.slide')


// TÁCTIL CARDS Swipe Left / Right
let initialX = null;
const startTouch = (e)=> initialX = e.touches[0].clientX;  
const moveTouch = (e)=>{
  if (initialX === null) {
    return;
  };
  let currentX = e.touches[0].clientX; 
  let diffX = initialX - currentX; 
  if (Math.abs(diffX)) {
    if (diffX > 0) {
      btnLeft()  
    };
    if (diffX < 0) {
      btnRight()
    };
  };
  initialX = null;
};      

// PARA TODOS LOS BTN ******
const btnOn = (btn)=>{
  btn.classList.add('btn-on');
  setTimeout(() => {
    btn.classList.remove('btn-on');
  }, 200)
}
// CAROUSEL ******
let i_L=$slide.length-1, i_C=0, i_R=1;
$slide[i_C].style.opacity = '1';  
$slide[i_L].classList.add('center-to-left');
$slide[i_L].style.opacity = '1';  
$slide[i_R].classList.add('center-to-right');
$slide[i_R].style.opacity = '1';

const btnLeft = ()=>{
  $slide.forEach(slid=>{
    if(slid.classList.contains('to-left-2')){
      slid.classList.remove('to-left-2');
      slid.style.opacity = '0';
    };      
    if(slid.classList.contains('to-right-2')){
      slid.classList.remove('to-right-2');
    };      
  });
  //----------------------------------------------
  $slide[i_R].classList.remove('center-to-right', 'right-2-to-right');
  $slide[i_R].classList.add('right-to-center');    
  if(i_R===$slide.length-1){
    i_R=-1;
  };    
  i_R++;    
  $slide[i_R].classList.add('right-2-to-right');
  $slide[i_R].style.opacity = '1';
  //----------------------------------------------
  $slide[i_C].classList.remove('left-to-center', 'right-to-center');
  $slide[i_C].classList.add('center-to-left');    
  if(i_C===$slide.length-1){
    i_C=-1;
  };   
  i_C++;
  //----------------------------------------------
  $slide[i_L].classList.remove('center-to-left', 'left-2-to-left');
  $slide[i_L].classList.add('to-left-2');    
  if(i_L===$slide.length-1){
    i_L=-1;
  };
  i_L++;
  //----------------------------------------------    
}; 
//--------------------------------------------------------------------------

const btnRight = ()=>{   
  $slide.forEach(slid=>{
    if(slid.classList.contains('to-right-2')){
      slid.classList.remove('to-right-2');
      slid.style.opacity = '0';
    };
    if(slid.classList.contains('to-left-2')){
      slid.classList.remove('to-left-2');
    };      
  });
  //----------------------------------------------
  $slide[i_L].classList.remove('center-to-left', 'left-2-to-left');
  $slide[i_L].classList.add('left-to-center');    
  if(i_L===0){
    i_L=$slide.length;
  };
  i_L--;    
  $slide[i_L].classList.add('left-2-to-left');
  $slide[i_L].style.opacity = '1';
  //----------------------------------------------
  $slide[i_C].classList.remove('left-to-center', 'right-to-center');
  $slide[i_C].classList.add('center-to-right');
  if(i_C===0){
    i_C=$slide.length;
  };    
  i_C--;
  //----------------------------------------------
  $slide[i_R].classList.remove('center-to-right', 'right-2-to-right');
  $slide[i_R].classList.add('to-right-2');    
  if(i_R===0){
    i_R=$slide.length;
  };   
  i_R--;
  //----------------------------------------------    
};    

// LLAMADORES       
d.addEventListener('click', (e)=>{
  if(e.target.matches('.btn-crsl-l *')){
    btnLeft();
    btnOn(d.querySelector('.btn-crsl-l'));
  };
  if(e.target.matches('.btn-crsl-r *')){
    btnRight();
    btnOn(d.querySelector('.btn-crsl-r'));
  };
});

// touch del carousel
$slidesContainer.addEventListener("touchstart", startTouch, false); 
$slidesContainer.addEventListener("touchmove", moveTouch, false);  

