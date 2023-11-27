window.addEventListener("scroll", cambioColore);

function cambioColore() {
  
  let scrollTop = window.scrollY;

  let header = document.querySelector("header");
  let button = document.querySelector("header button");
  let altezza = 350;

  if (scrollTop > altezza) {
    header.style.backgroundColor = "white";
    button.style.backgroundColor = "#1a8917"
  } else {
    header.style.backgroundColor = ""; 
    button.style.backgroundColor = ""
}
}

function mRandom() {
    let m = document.querySelectorAll('g[opacity]');
    
    m.forEach(element => {
        
        let randomOpacity = Math.random();

        
        element.setAttribute('opacity', randomOpacity);

        // console.log(`Nuovo valore di opacity per ${element.tagName}: ${randomOpacity}`);
    });
}

mRandom();
