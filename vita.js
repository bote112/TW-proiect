window.onload = function() {
  // Creează butonul de wishlist
  let wishListButton = document.createElement('button');
  wishListButton.innerText = "Vezi wishlist";
  document.querySelector('nav').after(wishListButton);

  // Creează butonul de ștergere wishlist
  let clearWishlistButton = document.createElement('button');
  clearWishlistButton.innerText = "Șterge wishlist";
  wishListButton.after(clearWishlistButton);

  // Încarcă wishlist-ul din localStorage la început
  let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
  wishlist = wishlist.map(item => item.toLowerCase());

  // Ascunde butonul de ștergere wishlist dacă lista este goală
  clearWishlistButton.style.display = wishlist.length > 0 ? "inline" : "none";

  // Functie care afișează wishlist-ul
  wishListButton.onclick = function() {
    let removeItem = prompt("Wishlist: " + wishlist.join(', ') + "\n Scrie numele rețetei pe care dorești să o ștergi sau lasă gol pentru a închide.");
    if (removeItem !== null) {
      removeItem = removeItem.toLowerCase();
      let index = wishlist.indexOf(removeItem);
      if (index !== -1) {
        wishlist.splice(index, 1);
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        document.querySelectorAll('.poze div').forEach(function(recipeDiv) {
          let recipeName = recipeDiv.querySelector('.nume').innerText;
          if (recipeName.toLowerCase() === removeItem) {
            let recipeImage = recipeDiv.querySelector('img');
            recipeImage.style.border = "none"; // Șterge bordura roșie
          }
        });
      }
      clearWishlistButton.style.display = wishlist.length > 0 ? "inline" : "none";
    }
  }
  

  // Functie care șterge wishlist-ul
  clearWishlistButton.onclick = function() {
      document.querySelectorAll('.poze div img').forEach(function(recipeImage) {
          recipeImage.style.border = "none"; // Șterge bordura roșie
      });
      wishlist = [];
      localStorage.setItem('wishlist', JSON.stringify(wishlist));
      alert("Wishlist-ul a fost șters.");
      clearWishlistButton.style.display = "none";
  }

  // Adaugă butoanele de "Adauga la wishlist" la fiecare rețetă
  document.querySelectorAll('.poze div').forEach(function(recipeDiv) {
      let button = document.createElement('button');
      button.innerText = "Adauga la wishlist";
      let recipeName = recipeDiv.querySelector('.nume').innerText;
      let recipeImage = recipeDiv.querySelector('img');
      if (wishlist.includes(recipeName.toLowerCase())) {
          recipeImage.style.border = "3px solid red"; // Adaugă bordura roșie la încărcarea paginii
      }
      button.onclick = function() {
          if (!wishlist.includes(recipeName.toLowerCase())) {
              wishlist.push(recipeName.toLowerCase());
              localStorage.setItem('wishlist', JSON.stringify(wishlist));
              recipeImage.style.border = "3px solid red"; // Adaugă o bordură roșie la imaginea produsului
              alert('Rețeta "' + recipeName + '" a fost adăugată în wishlist.');
          } else {
              alert('Rețeta "' + recipeName + '" este deja în wishlist.');
          }
          clearWishlistButton.style.display = wishlist.length > 0 ? "inline" : "none";
      }
      recipeDiv.parentNode.insertBefore(button, recipeDiv.nextSibling);
  });


  let keysPressed = {};
    let keysComboPressed = false;
    
    window.addEventListener('keydown', function(event) {
      keysPressed[event.key] = true;
    
      if (keysPressed['p'] && keysPressed['s'] && keysPressed['d'] && !keysComboPressed) {
        keysComboPressed = true;
        window.open('https://www.youtube.com/watch?v=VpFP8zKR5ZE&ab_channel=LiviuDragnea', '_blank');
      }
    });
    
    window.addEventListener('keyup', function(event) {
      delete keysPressed[event.key];
    
      if (!keysPressed['p'] || !keysPressed['s'] || !keysPressed['d']) {
        keysComboPressed = false;
      }
    });
  
    let navbar = document.querySelector('.navbar');

function changeColorInterval() {
  let colors = ['#4e3d42', '#4e3d68', '#5e5f6b']; 
  let index = 0;

  setInterval(function() {
    navbar.style.backgroundColor = colors[index]; 

    index++;

    if (index >= colors.length) {
      index = 0; 
    }
  }, 1000);
}

changeColorInterval();



  
  var logoAnimation = {};
logoAnimation.opacityIn = [0,1];
logoAnimation.scaleIn = [0.2, 1];
logoAnimation.scaleOut = 3;
logoAnimation.durationIn = 800;
logoAnimation.durationOut = 600;
logoAnimation.delay = 500;

anime.timeline({loop: false})
.add({
  targets: '.logo .letters-1',
  opacity: logoAnimation.opacityIn,
  scale: logoAnimation.scaleIn,
  duration: logoAnimation.durationIn
}).add({
  targets: '.logo .letters-1',
  opacity: 0,
  scale: logoAnimation.scaleOut,
  duration: logoAnimation.durationOut,
  easing: "easeInExpo",
  delay: logoAnimation.delay
}).add({
  targets: '.logo .letters-2',
  opacity: logoAnimation.opacityIn,
  scale: logoAnimation.scaleIn,
  duration: logoAnimation.durationIn
}).add({
  targets: '.logo .letters-2',
  opacity: 0,
  scale: logoAnimation.scaleOut,
  duration: logoAnimation.durationOut,
  easing: "easeInExpo",
  delay: logoAnimation.delay
}).add({
  targets: '.logo .letters-3',
  opacity: logoAnimation.opacityIn,
  scale: logoAnimation.scaleIn,
  duration: logoAnimation.durationIn
}).add({
  targets: '.logo .letters-3',
  opacity: 0,
  scale: logoAnimation.scaleOut,
  duration: logoAnimation.durationOut,
  easing: "easeInExpo",
  delay: logoAnimation.delay
}).add({
  targets: '.logo',
  opacity: 0,
  duration: 500,
  delay: 500
}).add({
  targets: '.logo',
  textContent: ['CMA?'],
  opacity: 1,
  duration: 1000,
  delay: 500
});

  
let images = document.querySelectorAll('.poza');

let selectedImage = null;

images.forEach(function(image) {
  image.addEventListener('click', function() {
    if (selectedImage === image) {
      image.classList.remove('rounded-image');
      selectedImage = null;
    } else {
      if (selectedImage) {
        selectedImage.classList.remove('rounded-image');
      }
      image.classList.add('rounded-image');
      selectedImage = image;
    }
  });
});


}
