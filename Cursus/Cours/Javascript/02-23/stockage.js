let nom = "Julien";

// Crér une donnée et la stocké dans le localstorage
localStorage.setItem("name", nom);
localStorage.setItem("nickname", "Number 1");

// Récupéré la donnée 
console.log(localStorage.getItem("name"));

// Récupérer la donnée et l'affiché dans le html
document.getElementById('key').innerHTML = localStorage.getItem('name');

// Supprimer une donnée
localStorage.removeItem('name', nom);

// clear() pour supprimer/nettyer toutes les données stocker
localStorage.clear();