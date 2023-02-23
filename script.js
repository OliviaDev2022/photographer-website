// CODE ET EXPLICATIONS
// Dans le html j'ai créé une div contenant toutes le photos de la galerie, subdivisée en plusieurs divs 
// avec des id liés à la catégorie de photos qu'on veut voir. 
// L'idée est d'afficher la div #toutesphotos par défaut quand l'utilisateur arrive sur la page. 
// Ensuite, au clic sur chaque catégorie, la div de photos correspondante apparait.
// j'essaye avec la div #photosbapteme pour commencer mais le code ne fonctionne deja pas. 
// Comment le corriger puis le factoriser pour tous les autres liens ?


// Récupérer tous les liens affichant les catégories de photos
const links = document.querySelectorAll('.photos a');

// Au "clic" sur chaque lien
links.forEach(link => {
  link.addEventListener('click', function(event) {
    // Empêcher le navigateur de quitter la page
    event.preventDefault();

    // Récupérer l'id de la catégorie du lien cliqué par l'utilisateur
    const category = this.getAttribute('id');

    // Afficher les images correspondantes à chaque catégorie sélectionnée selon l'id
    if (category === 'bapteme') {
     //Masquer toutes les images
     const images = document.getElementById('#toutesphotos');
      images.forEach(image => {
       image.style.display = 'none';
      });
     // puis afficher celles de #photosbapteme
      let PhotosBapteme = document.getElementById('#photosbapteme');
      PhotosBapteme.forEach(PhotosBapteme => {
       PhotosBapteme.style.display = 'block';
       });
     } 
  });
});

