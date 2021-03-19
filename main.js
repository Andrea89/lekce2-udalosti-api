// tady je místo pro náš program

function priNajeti() {
    document.querySelector('#odstavec').style.fontWeight = 'bold';
}


//-----úkol 1------

  function zmenBarvu() {
    let cervenyText
    cervenyText = document.querySelector('#odstavec');
    cervenyText.classList.toggle("cerveny");
  }


//-----úkol 2------

function zvetsiPismo() {
var stylPisma = window.getComputedStyle(document.getElementById("odstavec")).fontSize;
var velikostPisma = parseFloat(stylPisma); 
odstavec.style.fontSize = (velikostPisma + 1) + 'px';
}


//----kód z hodiny----

/**
 * funkce, která přehraje předaný prvek
 * @param {string} elementSelector 
 */
function prehraj() {
    let audioElement = document.querySelector('#js-audio');
    audioElement.play();
  }

  /**
 * funkce, která pozastaví předaný prvek
 * @param {string} elementSelector 
 */
function zastav(elementSelector) {
    let audioElement = document.querySelector(elementSelector);
    audioElement.pause();
  }

//-----úkol 3------

  function minimalniHlasitost () {
    let hlasitost = document.getElementById("js-audio");
    hlasitost.volume = 0;
  }

  function polovicniHlasitost () {
    let hlasitost = document.getElementById("js-audio");
    hlasitost.volume = 0.5;
  }

  function maximalniHlasitost () {
    let hlasitost = document.getElementById("js-audio");
    hlasitost.volume = 1;
  }
  
  function zpetNaZacatek () {
    document.getElementById("js-audio").currentTime = 0;
  }