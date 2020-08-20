var mijnAfbeelding = document.querySelector('img');

mijnAfbeelding.onclick = function() {
    var mijnSrc = mijnAfbeelding.getAttribute('src');
    if(mijnSrc === 'afbeeldingen/arminius-statue.jpg') {
      mijnAfbeelding.setAttribute ('src','afbeeldingen/Arminius_satue.jpg');
    } else {
      mijnAfbeelding.setAttribute ('src','afbeeldingen/arminius-statue.jpg');
    }
}

var mijnKnop = document.querySelector('button');
var mijnHoofding= document.querySelector('h1');

function stelNaamIn() {
  var mijnNaam = prompt('Voer uw naam in');
  localStorage.setItem('naam', mijnNaam);
  mijnHoofding.textContent = 'Goedemiddag, ' + mijnNaam;
}

if(!localStorage.getItem('naam')) {
  stelNaamIn();
} else {
  var opgeslagenNaam = localStorage.getItem('naam');
  mijnHoofding.textContent = 'Goedemiddag, ' + opgeslagenNaam;
}

mijnKnop.onclick = function() {
  stelNaamIn();
}