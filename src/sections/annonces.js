import { loadAnnonces, loadAnnonce, loadAnnoncesCategories } from "../api";
import { getItem, setItem, removeItem, getItems } from '../local-storage.js'

const annoncesList = document.querySelector('.annonces')
const sectionAnnonceTitle = document.querySelector('#sections-annonces h4')
const sectionCategories = document.querySelector('#section-categories h4')

const displayAnnonces = () => loadAnnonces().then((annonces) => {
    //Vide la liste
    annoncesList.replaceChildren()

    annonces.forEach((annonce) => {
        const newElement = document.createElement('annonce-element')
        newElement.setAttribute('href', `#latest-${annonce.id}`)
        newElement.setAttribute('image', annonce.image_url)
        newElement.setAttribute('title', annonce.title)
        newElement.setAttribute('price', annonce.price)

        if (getItem(annonce.id)) {
            newElement.setAttribute('starred', true)
        }
        newElement.addEventListener('starred_click', () => {
            if (getItem(annonce.id)) {
                console.log("on l'enlève")
                removeItem(annonce.id)
            } else {
                console.log("on l'ajoute")
                setItem(annonce.id, annonce)
            }

            newElement.setAttribute('starred', !!getItem(annonce.id))

        })

        annoncesList.appendChild(newElement)

        sectionTitle.innerHTML = `Dernières annonces INSERER CHIFFRES`
    });


})

const displayAnnoncesCategories = (id) => {
    loadAnnoncesCategories(id).then((annonces) => {

        annoncesList.replaceChildren()

        annonces.forEach((annonce) => {
            const newElement = document.createElement('annonce-element')
            newElement.setAttribute('href', `#latest-${annonce.id}`)
            newElement.setAttribute('image', annonce.image_url)
            newElement.setAttribute('title', annonce.title)
            newElement.setAttribute('price', annonce.price)

            if (getItem(annonce.id)) {
                newElement.setAttribute('starred', true)
            }
            newElement.addEventListener('starred_click', () => {
                if (getItem(annonce.id)) {
                    console.log("on l'enlève")
                    removeItem(annonce.id)
                } else {
                    console.log("on l'ajoute")
                    setItem(annonce.id, annonce)
                }

                newElement.setAttribute('starred', !!getItem(annonce.id))

            })

            annoncesList.appendChild(newElement)

            sectionCategories.innerHTML = `Catégories > NOM CAT & INSERER CHIFFRES`
        })
    })
}

const displayDetailsAnnonce = (id) => {
    loadAnnonce(id).then((annonce) => {
        const annonceTitle = document.querySelector('#section-annonce-details h4')
        const annonceImage = document.querySelector('#section-annonce-details img')
        const annoncePrice = document.querySelector('#section-annonce-details h6')
        const annonceContent = document.querySelector('#section-annonce-details p')

        annonceTitle.textContent = annonce.title
        annonceImage.src = annonce.image_url
        annoncePrice.textContent = annonce.price
        annonceContent.innerHTML = annonce.description

        sectionAnnonceTitle.innerHTML = `Annonces > ${annonceTitle}`
    })

}

const displayStarredAnnonces = () => {
    const annonces = getItems()
    sectionTitle.innerHTML = `Starred (${annonces.length})`

    annoncesList.replaceChildren()

    annonces.forEach((annonce) => {
        const newElement = document.createElement('annonce-element')
        newElement.setAttribute('href', `#latest-${annonce.id}`)
        newElement.setAttribute('image', annonce.image_url)
        newElement.setAttribute('title', annonce.title)
        newElement.setAttribute('price', annonce.price)

        if (getItem(annonce.id)) {
            newElement.setAttribute('starred', true)
        }
        newElement.addEventListener('starred_click', () => {
            if (getItem(annonce.id)) {
                console.log("on l'enlève")
                removeItem(annonce.id)
            } else {
                console.log("on l'ajoute")
                setItem(annonce.id, annonce)
            }

            newElement.setAttribute('starred', !!getItem(annonce.id))

        })

        annoncesList.appendChild(newElement)

        sectionCategories.innerHTML = 'Intéressant INSERT NOMBRE'
    })
}


export { displayAnnonces, displayAnnoncesCategories, displayDetailsAnnonce, displayStarredAnnonces }