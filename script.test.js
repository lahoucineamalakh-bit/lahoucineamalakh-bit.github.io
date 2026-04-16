const { envoyerMessage } = require('./script')

function setupDOM({ nom = '', email = '', texte = '' } = {}) {
  document.body.innerHTML = `
    <input id="nom" value="${nom}" />
    <input id="email" value="${email}" />
    <textarea id="messageTexte">${texte}</textarea>
    <p id="message"></p>
  `
}

describe('envoyerMessage()', () => {
  describe('quand tous les champs sont vides', () => {
    it('affiche un message d\'erreur', () => {
      setupDOM()
      envoyerMessage()
      expect(document.querySelector('#message').textContent)
        .toBe('Merci de remplir tous les champs !')
    })

    it('affiche le message en rouge', () => {
      setupDOM()
      envoyerMessage()
      expect(document.querySelector('#message').style.color).toBe('red')
    })
  })

  describe('quand le nom est vide', () => {
    it('affiche un message d\'erreur', () => {
      setupDOM({ email: 'test@test.com', texte: 'Bonjour' })
      envoyerMessage()
      expect(document.querySelector('#message').textContent)
        .toBe('Merci de remplir tous les champs !')
    })
  })

  describe('quand l\'email est vide', () => {
    it('affiche un message d\'erreur', () => {
      setupDOM({ nom: 'Lahoucine', texte: 'Bonjour' })
      envoyerMessage()
      expect(document.querySelector('#message').textContent)
        .toBe('Merci de remplir tous les champs !')
    })
  })

  describe('quand le message est vide', () => {
    it('affiche un message d\'erreur', () => {
      setupDOM({ nom: 'Lahoucine', email: 'test@test.com' })
      envoyerMessage()
      expect(document.querySelector('#message').textContent)
        .toBe('Merci de remplir tous les champs !')
    })
  })

  describe('quand tous les champs sont remplis', () => {
    it('affiche un message de succès personnalisé avec le nom', () => {
      setupDOM({ nom: 'Lahoucine', email: 'test@test.com', texte: 'Bonjour !' })
      envoyerMessage()
      expect(document.querySelector('#message').textContent)
        .toBe('Merci Lahoucine, je vous réponds sous 24h !')
    })

    it('affiche le message en vert', () => {
      setupDOM({ nom: 'Lahoucine', email: 'test@test.com', texte: 'Bonjour !' })
      envoyerMessage()
      expect(document.querySelector('#message').style.color).toBe('green')
    })
  })
})
