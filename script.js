function envoyerMessage() {
  let nom = document.querySelector('#nom').value
  let email = document.querySelector('#email').value
  let texte = document.querySelector('#messageTexte').value
  let message = document.querySelector('#message')

  if (nom === '' || email === '' || texte === '') {
    message.textContent = "Merci de remplir tous les champs !"
    message.style.color = "red"
  } else {
    message.textContent = "Merci " + nom + ", je vous réponds sous 24h !"
    message.style.color = "green"
  }
}