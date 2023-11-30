document.getElementById('contact').addEventListener('submit', function (event) {
    // Validation du formulaire
    var name = document.getElementById('name').value.trim();//validation du champ nom
    var email = document.getElementById('email').value.trim();//validation du champ email
    var message = document.getElementById('message').value.trim();//validation du champ message

    if (name === '' || email === '' || message === '') {//si les trois champs nom,email et msg sont vide alors il faut remplir obligatoirement ces champs 
        alert('Veuillez remplir tous les champs.');
        event.preventDefault();
    } else if (!isValidEmail(email)) {//verification de validite de l'email(on fait appel de la fonction  isValidEmail(email) developee a la fin de ce script)
        alert('Veuillez entrer une adresse e-mail valide.');
        event.preventDefault();
    } else if (message.length > 1000) {//condition pour que la longueur du message ne depasse pas 1000 caracteres
        alert('Le message ne peut pas dépasser 1000 caractères.');
        event.preventDefault();
    }
});

function isValidEmail(email) {
    // Validation de l'adresse e-mail simple
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;// la forme d'un email 
    return emailRegex.test(email);
}