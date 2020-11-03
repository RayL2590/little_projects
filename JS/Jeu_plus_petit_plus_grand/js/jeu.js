// on génére notre nombre aléatoire.
var aleatoire = getRandom();
// on appelle sa fonction log (qui prend une chaîne de caractère en argument)
console.log('nombre aléatoire : ' + aleatoire);

var reponse;
var answerIsValid = false
var tentative = 0;

var game = {
  init: function () {
    while (answerIsValid == false && tentative < 10) {
      reponse = getUserAnswer();
      if (reponse === false) {
        break;
      }

      console.log('réponse', reponse);
      answerIsValid = checkAnswer();
      tentative++;
    }

    var messageContainer = document.getElementById('message');
    if (tentative == 10) {
      messageContainer.innerHTML = 'Le jeu est fini, tu as perdu !';
    } else if (answerIsValid === true) {
      messageContainer.innerHTML = 'Le jeu est fini, bravo !';
    } else {
      messageContainer.innerHTML = 'Vous partez déjà ? tant pis :(';
    }
  }
}

game.init();

// on prévoit une fonction pour récupérer un entier aléatoire entre 1 et 1000
function getRandom() {
  // on génère un nombre aléatoire entre 0 et 1
  // on multiplie ce nombre, par ex. 0.8465 par notre maximum
  // => on peut obtenir un nombre entre 0 et 999.99999999999999999
  // On arrondit ce nombre à l'entier inférieur
  // on ajoute minimum (1) => on peut avoir entre 1 et 1000
  return Math.floor(Math.random() * 1000) + 1;
}

function getUserAnswer() {

  var reponseUtilisateur = prompt('Saisir un nombre entier entre 1 et 1000. Il vous reste ' + (10 - tentative) + ' essais !');

  if (reponseUtilisateur === null) {
    return false;
  }

  reponseUtilisateur = Number(reponseUtilisateur);
  while (isNaN(reponseUtilisateur) || reponseUtilisateur < 1 || reponseUtilisateur > 1000) {
    alert('Vous devez répondre un nombre !');
    reponseUtilisateur = prompt('Saisir un nombre entier entre 1 et 1000. Il vous reste ' + (10 - tentative) + ' essais !');
    reponseUtilisateur = Number(reponseUtilisateur);
  }

  return reponseUtilisateur;
}

function checkAnswer() {
  if (reponse < aleatoire) {
    alert('Dommage, le nombre à trouver est plus grand !');
    return false;
  }
  else if (reponse > aleatoire) {
    alert('Dommage, le nombre à trouver est plus petit !');
    return false;
  }
  else {
    alert('Bravo, vous avez trouvé le bon numéro !!!  ' + aleatoire);
    return true;
  }
}


