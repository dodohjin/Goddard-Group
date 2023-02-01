const focusBtn = document.querySelectorAll('.focus-btn');
const focusText = document.querySelectorAll('.focus-text');


for (let i=0; i<focusBtn.length; i++){
  focusBtn[i].addEventListener('click', () => {  
    focusText[i].classList.toggle('text-show');
});
}
