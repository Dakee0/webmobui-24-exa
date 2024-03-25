import { loadCategories } from "../api";

const categoriesList = document.querySelector('.categories')
const sectionCategories = document.querySelector('#section-categories h4')

const displayCategories = () => loadCategories().then((categories) => {
    //Vide la liste
    categoriesList.replaceChildren()

    categories.forEach((categorie) => {
        const newElement = document.createElement('categorie-element')
        newElement.setAttribute('href', `#categories-${categorie.id}`)
        newElement.setAttribute('icon', categorie.icon)
        newElement.setAttribute('name', categorie.name)
        newElement.setAttribute('count', categorie.count)

        categoriesList.appendChild(newElement)

        sectionCategories.innerHTML = `Catégories`
    });

    
})

export {displayCategories}