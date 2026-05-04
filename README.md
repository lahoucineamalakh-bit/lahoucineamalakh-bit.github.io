# Lahoucine Amalakh — Portfolio Développeur Web Freelance

Site vitrine personnel hébergé sur GitHub Pages.

## Technologies

- HTML / CSS / JavaScript vanilla
- Jest + jsdom (tests unitaires)

## Lancer les tests

```bash
npm install
npm test
```

## Structure du projet

```
├── index.html        # Page principale
├── style.css         # Styles et responsive
├── script.js         # Logique du formulaire de contact
└── script.test.js    # Tests unitaires
```

## Tests

11 tests couvrant la fonction `envoyerMessage()` :

- Validation des champs (nom, email, message)
- Message de succès personnalisé
- Protection contre les injections XSS et HTML
- Robustesse face aux entrées extrêmes
