window.onload = function() {
    document.getElementById('goBack').onclick = function() {
        window.location.href = 'doidoi.html'; 
    };

    let form = document.getElementById('suggestionForm');
    let thankYouMessage = document.createElement('div');
    thankYouMessage.innerText = "Mulțumim pentru sugestie!";
    thankYouMessage.style.display = "none";
    thankYouMessage.style.color = "white";
    thankYouMessage.style.fontSize = "2em";
    document.body.appendChild(thankYouMessage);

    form.onsubmit = function(event) {
        event.preventDefault();  

        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let phone = document.getElementById('phone').value;
        let age = document.getElementById('age').value;
        let recipeName = document.getElementById('recipeName').value;
        let recipeIngredients = document.getElementById('recipeIngredients').value;
        let recipeInstructions = document.getElementById('recipeInstructions').value;

        let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        let namePattern = /^[a-zA-Z ]{2,30}$/;
        let phonePattern = /^\+?\d{10,12}$/;
        let agePattern = /^\d{1,3}$/;

        if (!email.match(emailPattern)) {
            alert('Te rugăm să introduci o adresă de email validă.');
            return false;
        }

        if (!name.match(namePattern)) {
            alert('Te rugăm să introduci un nume valid (doar litere și spații, între 2 și 30 de caractere).');
            return false;
        }

        if (!phone.match(phonePattern)) {
            alert('Te rugăm să introduci un număr de telefon valid (între 10 și 15 cifre).');
            return false;
        }

        if (!age.match(agePattern) || age < 1 || age > 130) {
            alert('Te rugăm să introduci o vârstă validă (număr întreg între 1 și 130).');
            return false;
        }

        console.log(`Sugestie primită de la ${name} (${email}):
                     Telefon: ${phone}
                     Vârstă: ${age}
                     Numele rețetei: ${recipeName}
                     Ingredientele rețetei: ${recipeIngredients}
                     Instrucțiunile rețetei: ${recipeInstructions}`);

        form.remove();  
        thankYouMessage.style.display = "block";

        anime({
            targets: document.body,
            backgroundColor: ['#9CCCb7', '#9C9Cb7'],
            duration: 5000,
            easing: 'linear'
        });
    };  


     
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


};
