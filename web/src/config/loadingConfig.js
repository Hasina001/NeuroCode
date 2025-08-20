// Configuration pour l'animation de chargement
export const loadingConfig = {
  // Messages affichés pendant le chargement
  messages: [
    "INITIALISATION DU SYSTÈME...",
    "CHARGEMENT DES MODULES...",
    "VÉRIFICATION DE LA MÉMOIRE...",
    "CONNEXION ÉTABLIE...",
    "PRÊT !"
  ],

  // Durée entre chaque message (en millisecondes)
  messageInterval: 600,

  // Délai avant de marquer le chargement comme terminé
  completionDelay: 800,

  // Délai avant de masquer l'écran de chargement
  hideDelay: 500,

  // Configuration des animations
  animations: {
    scanLines: {
      count: 50,
      duration: '2s'
    },
    pixels: {
      count: 8,
      delay: 0.2,
      duration: '1.5s'
    }
  },

  // Textes personnalisables
  texts: {
    title: {
      line1: "SYSTÈME",
      line2: "DE CHARGEMENT"
    },
    progressLabel: "PROGRESSION",
    completionMessage: "✓ CHARGEMENT TERMINÉ"
  }
};

export default loadingConfig;