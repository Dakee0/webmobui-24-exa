// URL de base du serveur
const BASE_URL = 'https://webmobui-24-exa-backend-0e9cf2cbd0e5.herokuapp.com'

const loadJson = (url) => fetch(url).then((response) => response.json())

const loadAnnonces = () => loadJson(`${BASE_URL}/api/annonces`)

const loadCategories = () => loadJson(`${BASE_URL}/api/categories`)

const loadAnnonce = (id) => loadJson(`${BASE_URL}/api/annonces/${id}`)

const loadAnnoncesCategories = (id) => loadJson(`${BASE_URL}/api/categories/${id}/annonces`)

export {loadAnnonces, loadCategories, loadAnnonce, loadAnnoncesCategories}