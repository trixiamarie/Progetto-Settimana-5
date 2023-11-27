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
    //console.log(m);
    
    let randomIndex = Math.floor(Math.random() * m.length);
    let randomElement = m[randomIndex];
    let randomOpacity = Math.round(Math.random());
    randomElement.setAttribute('opacity', randomOpacity);

    randomElement.classList.add('random');

    randomElement.addEventListener('animationend', function() {
        randomElement.classList.remove('random');
    });

    //console.log(`${randomOpacity}`);
}

mRandom();
setInterval(mRandom, 500);