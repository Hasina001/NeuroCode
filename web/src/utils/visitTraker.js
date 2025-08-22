// Gestionnaire pour traquer les visites de l'utilisateur
class VisitTracker {
  constructor() {
    this.hasVisited = false;
  }

  // Vérifier si c'est la première visite
  isFirstVisit() {
    return !this.hasVisited;
  }

  // Marquer la visite comme effectuée
  markAsVisited() {
    this.hasVisited = true;
  }

  // Réinitialiser le tracker (utile pour le développement)
  reset() {
    this.hasVisited = false;
  }

  // Obtenir le statut actuel
  getStatus() {
    return {
      hasVisited: this.hasVisited,
      isFirstVisit: this.isFirstVisit()
    };
  }
}

// Instance singleton
const visitTracker = new VisitTracker();

export default visitTracker;