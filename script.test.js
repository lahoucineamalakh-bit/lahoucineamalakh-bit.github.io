const { envoyerMessage } = require('./formValidator')

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

  describe('sécurité - injection XSS', () => {
    it('n\'exécute pas de balise <script> injectée dans le nom', () => {
      setupDOM()
      const xss = '<script>alert("xss")</script>'
      document.querySelector('#nom').value = xss
      document.querySelector('#email').value = 'test@test.com'
      document.querySelector('#messageTexte').value = 'Bonjour'
      envoyerMessage()
      const messageEl = document.querySelector('#message')
      expect(messageEl.innerHTML).not.toContain('<script>')
      expect(messageEl.textContent).toContain(xss)
    })

    it('n\'interprète pas les balises HTML injectées dans le nom', () => {
      setupDOM()
      const injection = '<img src=x onerror=alert(1)>'
      document.querySelector('#nom').value = injection
      document.querySelector('#email').value = 'test@test.com'
      document.querySelector('#messageTexte').value = 'Bonjour'
      envoyerMessage()
      const messageEl = document.querySelector('#message')
      expect(messageEl.querySelector('img')).toBeNull()
    })

    it('traite un nom très long sans planter', () => {
      const nomLong = 'A'.repeat(10000)
      setupDOM({ nom: nomLong, email: 'test@test.com', texte: 'Bonjour' })
      expect(() => envoyerMessage()).not.toThrow()
    })

    it('traite les caractères spéciaux sans planter', () => {
      setupDOM({ nom: '"><\'&;', email: 'test@test.com', texte: 'Bonjour' })
      expect(() => envoyerMessage()).not.toThrow()
    })
  })
})
