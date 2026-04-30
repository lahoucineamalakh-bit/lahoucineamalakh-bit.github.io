// Attendre que React charge
function initApp() {
    if (typeof React === 'undefined' || typeof ReactDOM === 'undefined') {
        setTimeout(initApp, 100);
        return;
    }

    const e = React.createElement;

    function Portfolio() {
        const [scrollY, setScrollY] = React.useState(0);

        React.useEffect(() => {
            const handleScroll = () => setScrollY(window.scrollY);
            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }, []);

        return e('div', { className: 'portfolio-root' },
            // Navigation
            e('nav', null,
                e('div', { className: 'logo' }, 'LA'),
                e('ul', null,
                    e('li', null, e('a', { href: '#expertise' }, 'EXPERTISE')),
                    e('li', null, e('a', { href: '#portfolio' }, 'PORTFOLIO')),
                    e('li', null, e('a', { href: '#services' }, 'SERVICES')),
                    e('li', null, e('a', { href: '#contact' }, 'CONTACT'))
                )
            ),

            // Hero
            e('section', { className: 'hero' },
                e('div', { className: 'hero-content' },
                    e('h1', null,
                        'Lahoucine Amalakh — ',
                        e('span', { className: 'gradient-gold' }, 'Développeur Web Full-Stack')
                    ),
                    e('p', { className: 'subtitle' },
                        'Node.js, React, PostgreSQL. Je construis des solutions web qui allient élégance technique et impact utilisateur.'
                    ),
                    e('div', { className: 'cta-buttons' },
                        e('a', { href: '#contact', className: 'btn btn-primary' }, 'Démarrer un projet'),
                        e('a', { href: '#portfolio', className: 'btn btn-secondary' }, 'Voir le travail')
                    )
                )
            ),

            // Expertise
            e('section', { id: 'expertise', className: 'expertise' },
                e('h2', null, 'Expertise'),
                e('div', { className: 'expertise-grid' },
                    e('div', { className: 'expertise-item' },
                        e('div', { className: 'expertise-icon' }, '🎨'),
                        e('div', null,
                            e('h3', null, 'Front-End élégant'),
                            e('p', null, 'React, TypeScript, Tailwind. Interfaces qui respirent, animations délicates, accessibilité impeccable. Chaque pixel a une raison d\'être.')
                        )
                    ),
                    e('div', { className: 'expertise-item' },
                        e('div', { className: 'expertise-icon' }, '⚙️'),
                        e('div', null,
                            e('h3', null, 'Back-End robuste'),
                            e('p', null, 'Node.js, Express, PostgreSQL. APIs sécurisées, architectures scalables, gestion de données complexes. Code qui tient la route.')
                        )
                    ),
                    e('div', { className: 'expertise-item' },
                        e('div', { className: 'expertise-icon' }, '🎯'),
                        e('div', null,
                            e('h3', null, 'Intégrations & Déploiement'),
                            e('p', null, 'Stripe, APIs tierces, GitHub, monitoring. Solutions complètes du concept à la production. Maintenance proactive, uptime garanti.')
                        )
                    )
                )
            ),

            // Portfolio
            e('section', { id: 'portfolio', className: 'portfolio' },
                e('h2', null, 'Portfolio'),
                e('div', { className: 'portfolio-grid' },
                    // Project 1
                    e('div', { className: 'portfolio-card' },
                        e('div', { className: 'portfolio-image' }, '🛒'),
                        e('div', null,
                            e('h3', null, 'E-Commerce Artisan'),
                            e('p', null, 'Système complet de boutique en ligne : catalogue dynamique, panier persistant, intégration Stripe, dashboard d\'administration avec statistiques temps réel. PostgreSQL pour la robustesse, Express pour les API.'),
                            e('div', { className: 'tech-stack' },
                                e('span', { className: 'tech-tag' }, 'Node.js'),
                                e('span', { className: 'tech-tag' }, 'React'),
                                e('span', { className: 'tech-tag' }, 'PostgreSQL'),
                                e('span', { className: 'tech-tag' }, 'Stripe'),
                                e('span', { className: 'tech-tag' }, 'Express')
                            )
                        )
                    ),
                    // Project 2
                    e('div', { className: 'portfolio-card reverse' },
                        e('div', { className: 'portfolio-image' }, '📊'),
                        e('div', null,
                            e('h3', null, 'Dashboard Admin'),
                            e('p', null, 'Interface de gestion complète : visualisation de commandes, gestion des utilisateurs, statistiques en temps réel, graphiques sophistiqués. Authentification sécurisée, permissions granulaires.'),
                            e('div', { className: 'tech-stack' },
                                e('span', { className: 'tech-tag' }, 'React'),
                                e('span', { className: 'tech-tag' }, 'Charts.js'),
                                e('span', { className: 'tech-tag' }, 'Auth0'),
                                e('span', { className: 'tech-tag' }, 'API REST'),
                                e('span', { className: 'tech-tag' }, 'Responsive')
                            )
                        )
                    ),
                    // Project 3
                    e('div', { className: 'portfolio-card' },
                        e('div', { className: 'portfolio-image' }, '🎨'),
                        e('div', null,
                            e('h3', null, 'Portfolio Personnel'),
                            e('p', null, 'Site vitrine sophistiqué avec animations subtiles, système de design cohérent, typographie soignée. Performance optimale, accessibilité WCAG, design minimaliste mais impactant.'),
                            e('div', { className: 'tech-stack' },
                                e('span', { className: 'tech-tag' }, 'React'),
                                e('span', { className: 'tech-tag' }, 'Tailwind'),
                                e('span', { className: 'tech-tag' }, 'CSS3'),
                                e('span', { className: 'tech-tag' }, 'Animations'),
                                e('span', { className: 'tech-tag' }, 'Responsive')
                            )
                        )
                    )
                )
            ),

            // Services
            e('section', { id: 'services', className: 'services' },
                e('h2', null, 'Services'),
                e('div', { className: 'services-content' },
                    e('ul', { className: 'service-list' },
                        e('li', null,
                            e('div', { className: 'service-icon' }, '🌐'),
                            e('div', null,
                                e('h3', null, 'Sites Vitrines'),
                                e('p', null, 'Présence web professionnelle, responsive, optimisée pour la conversion et le référencement.')
                            )
                        ),
                        e('li', null,
                            e('div', { className: 'service-icon' }, '🛍️'),
                            e('div', null,
                                e('h3', null, 'E-Commerce'),
                                e('p', null, 'Boutiques complètes : catalogue, panier, paiement sécurisé (Stripe), gestion de stock.')
                            )
                        ),
                        e('li', null,
                            e('div', { className: 'service-icon' }, '⚡'),
                            e('div', null,
                                e('h3', null, 'Applications Web'),
                                e('p', null, 'Solutions personnalisées, dashboards, intégrations tierces, APIs robustes.')
                            )
                        ),
                        e('li', null,
                            e('div', { className: 'service-icon' }, '🔧'),
                            e('div', null,
                                e('h3', null, 'Refonte & Optimisation'),
                                e('p', null, 'Amélioration de sites existants, performance, sécurité, design actualisé.')
                            )
                        )
                    ),
                    e('div', { className: 'pricing-box' },
                        e('h3', null, 'Tarification'),
                        e('p', null, e('strong', null, 'Devis sur mesure'), ' basé sur :'),
                        e('ul', null,
                            e('li', null, 'Complexité du projet'),
                            e('li', null, 'Délais souhaités'),
                            e('li', null, 'Fonctionnalités requises'),
                            e('li', null, 'Intégrations & support')
                        ),
                        e('p', { style: { marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-color)' } },
                            e('strong', null, 'Processus : '),
                            'Audit gratuit → Proposition → Jalons → Support post-lancement'
                        )
                    )
                )
            ),

            // Contact
            e('section', { id: 'contact', className: 'contact' },
                e('h2', null, 'Démarrons ensemble'),
                e('p', { className: 'subtitle' }, 'Vous avez une idée, un défi, un projet ? Je suis tout ouïe.'),
                e('div', { className: 'contact-info' },
                    e('div', { className: 'contact-method' },
                        e('h3', null, 'EMAIL'),
                        e('a', { href: 'mailto:contact@lahoucine.dev' }, 'contact@lahoucine.dev')
                    ),
                    e('div', { className: 'contact-method' },
                        e('h3', null, 'LINKEDIN'),
                        e('a', { href: 'https://linkedin.com', target: '_blank', rel: 'noopener noreferrer' }, 'Profil LinkedIn')
                    ),
                    e('div', { className: 'contact-method' },
                        e('h3', null, 'GITHUB'),
                        e('a', { href: 'https://github.com/lahoucineamalakh-bit', target: '_blank', rel: 'noopener noreferrer' }, 'lahoucineamalakh-bit')
                    )
                ),
                e('a', { href: 'mailto:contact@lahoucine.dev', className: 'btn btn-primary', style: { marginTop: '2rem' } }, 'Prendre contact')
            ),

            // Footer
            e('footer', null,
                e('p', null, '© 2026 Lahoucine Amalakh — Développeur Web Full-Stack')
            )
        );
    }

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(React.createElement(Portfolio));
}

// Lancer l'app quand tout est chargé
initApp();
