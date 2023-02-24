// Récupérer tous les liens affichant les catégories de photos
const links = document.querySelectorAll('.photos a');

// Stocker le contenu de chaque catégorie de photos
let PhotosBapteme = document.getElementById('photosbapteme');
let PhotosBébé = document.getElementById('photosbébé');
let PhotosCouple = document.getElementById('photoscouple');
let PhotosFamille = document.getElementById('photosfamille');
let PhotosGrossesse = document.getElementById('photosgrossesse');
let PhotosMariage = document.getElementById('photosmariage');
let PhotosPortrait = document.getElementById('photosportrait');

// Au "clic" sur chaque lien de catégorie de photos : 
links.forEach(link => {
 link.addEventListener('click', function(event) {
  // Empêcher le navigateur de quitter la page
  event.preventDefault();

  // Récupérer l'id de la catégorie du lien cliqué par l'utilisateur
  const category = this.getAttribute('id');

  //Masquer toutes les images d'abord
  const images = document.querySelectorAll('#toutesphotos div');
   images.forEach(image => {
    image.style.display = 'none';
  });
   
  // Puis afficher les images correspondantes à chaque catégorie sélectionnée selon l'id du lien cliqué
  switch (category) {
   case 'bapteme' : 
    PhotosBapteme.style.display = 'block';
    break;
   case 'bébé' : 
    PhotosBébé.style.display = 'block';
    break ;
   case 'couple' : 
    PhotosCouple.style.display = 'block';
    break ;
   case 'famille' : 
    PhotosFamille.style.display = 'block';
    break ;
   case 'grossesse' : 
    PhotosGrossesse.style.display = 'block';
    break ;
   case 'mariage' : 
    PhotosMariage.style.display = 'block';
    break ;
   case 'portrait' : 
    PhotosPortrait.style.display = 'block';
    break ;
   
   default : 
    //ToutVoir.style.display = 'block';
    images.forEach(image => {
     image.style.display = 'block';
    })
   }
  })
});



