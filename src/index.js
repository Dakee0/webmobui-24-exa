import "./elements/annonce-element"
import "./elements/categorie-element"

import { displaySection, activateLink } from './helpers.js'

import { displayAnnonces, displayDetailsAnnonce, displayDetailsAnnonce, displayAnnoncesCategories, displayStarredAnnonces } from './sections/annonces.js'
import { displayCategories } from "./sections/categories.js"


const routeur = () => {
  const hash = window.location.hash || '#home'
  const hashs = hash.split('-')

  // Colorie le lien
  activateLink(hashs[0])

  switch (hashs[0]) {
    case '#latest':

      if (hashs[1]) {
        displaySection('annonce-details')
        displayDetailsAnnonce(hashs[1])
      }
      else {
        displaySection('annonces')
        displayAnnonces()
      }
      
      break;

    case '#categories':
      
    if (hashs[1]) {
      displaySection('annonces')
      displayAnnoncesCategories(hashs[1])
    }
    else {
      displaySection('categories')
      displayCategories()
    }

      break;

    case '#starred':
      displaySection('annonces')
      break;

    case '#account':
      displaySection('account')
      displayStarredAnnonces()
      break;
  }
}

// On veut être averti des changements
window.addEventListener('hashchange', routeur)

// on exécute une première fois au chargement de la page pour afficher la bonne section
routeur()

navigator.serviceWorker.register(new URL('worker.js', import.meta.url))
