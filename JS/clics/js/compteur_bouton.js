// on a 2 boutons à "écouter"
var btnYes = document.querySelector('#yes');
var btnNo = document.querySelector('#no');

// on a 2 affichages de compteurs
var cntYes = btnYes.querySelector('#counter-yes');
var cntNo = btnNo.querySelector('#counter-no');

// on a 2 compteurs à incrémenter
var yesCount = 0;
var noCount = 0;

// on prépare nos 2 fonctions de callback
function countYes() {
  yesCount++;
  cntYes.textContent = yesCount;
}
function countNo() {
  noCount++;
  cntNo.textContent = noCount;
}

// enfin, on met en place nos écouteurs d'événements sur chaque bouton
btnYes.addEventListener('click', countYes);
btnNo.addEventListener('click', countNo);
