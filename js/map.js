// if (matchMedia("screen and (min-width: 781px)").matches) {
    
   
//   } else {
    
//   }
  


// Button function - MAP//

    let asiaBtn = document.querySelector('#asia');
    let europeBtn = document.querySelector('#europe');
    let usaBtn = document.getElementById('usa');
    let mideastBtn = document.querySelector('#mideast');
    let norameBtn = document.querySelector('#northamerica');
    
    asiaBtn.addEventListener('click', getAsia);
    europeBtn.addEventListener('click', getEurope);
    mideastBtn.addEventListener('click', getMideast);
    norameBtn.addEventListener('click', getNorAme);
    usaBtn.addEventListener('click', getNorAme);
   
// Button function - TAB//

    let tab1Btn = document.querySelector('.tab1');
    let tab2Btn = document.querySelector('.tab2');
    let tab3Btn = document.querySelector('.tab3');
    let tab4Btn = document.querySelector('.tab4');
    
    tab1Btn.addEventListener('click', getAsia);
    tab2Btn.addEventListener('click', getEurope);
    tab3Btn.addEventListener('click', getMideast);
    tab4Btn.addEventListener('click', getNorAme);
    
