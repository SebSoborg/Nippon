function burger() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  

  }

  let counterDisplayElem = document.querySelector('.counter-display');
  let counterMinusElem = document.querySelector('.counter-minus');
  let counterPlusElem = document.querySelector('.counter-plus');
  
  let count = 1;
  
  updateDisplay();
  
  counterPlusElem.addEventListener("click",()=>{
      count++;
      updateDisplay();
  }) ;
  
  counterMinusElem.addEventListener("click",()=>{
      count--;
      updateDisplay();
  });
  
  function updateDisplay(){
      counterDisplayElem.innerHTML = count;
  };

  let counterDisplayElem1 = document.querySelector('.counter-display1');
  let counterMinusElem1 = document.querySelector('.counter-minus1');
  let counterPlusElem1 = document.querySelector('.counter-plus1');
  
  let count1 = 1;
  
  updateDisplay1();
  
  counterPlusElem1.addEventListener("click",()=>{
      count1++;
      updateDisplay1();
  }) ;
  
  counterMinusElem1.addEventListener("click",()=>{
      count1--;
      updateDisplay1();
  });
  
  function updateDisplay1(){
      counterDisplayElem1.innerHTML = count1;
  }; 

  let counterDisplayElem2 = document.querySelector('.counter-display2');
  let counterMinusElem2 = document.querySelector('.counter-minus2');
  let counterPlusElem2 = document.querySelector('.counter-plus2');
  
  let count2 = 1;
  
  updateDisplay2();
  
  counterPlusElem2.addEventListener("click",()=>{
      count2++;
      updateDisplay2();
  }) ;
  
  counterMinusElem2.addEventListener("click",()=>{
      count2--;
      updateDisplay2();
  });
  
  function updateDisplay2(){
      counterDisplayElem2.innerHTML = count2;
  };

  let counterDisplayElem3 = document.querySelector('.counter-display3');
  let counterMinusElem3 = document.querySelector('.counter-minus3');
  let counterPlusElem3 = document.querySelector('.counter-plus3');
  
  let count3 = 1;
  
  updateDisplay3();
  
  counterPlusElem3.addEventListener("click",()=>{
      count3++;
      updateDisplay3();
  }) ;
  
  counterMinusElem3.addEventListener("click",()=>{
      count3--;
      updateDisplay3();
  });
  
  function updateDisplay3(){
      counterDisplayElem3.innerHTML = count3;
  };
  knap1.addEventListener("click", vegetar)
function vegetar() {
    let x = document.getElementById("vegetar");
    if (x.style.opacity == "0") {
        x.style.opacity = "100";
    }
    else {
        x.style.opacity = "0";
    }
}
knap2.addEventListener("click", hurtig)
function hurtig() {
    let x = document.getElementById("hurtig");
    if (x.style.opacity == "0") {
        x.style.opacity = "100";
    }
    else {
        x.style.opacity = "0";
    }
}
knap3.addEventListener("click", kød)
function kød() {
    let x = document.getElementById("kød");
    if (x.style.opacity == "0") {
        x.style.opacity = "100";
    }
    else {
        x.style.opacity = "0";
    }
}
knap4.addEventListener("click", fisk)
function fisk() {
    let x = document.getElementById("fisk");
    if (x.style.opacity == "0") {
        x.style.opacity = "100";
    }
    else {
        x.style.opacity = "0";
    }
}