const starredClick = new CustomEvent('starred_click')

class AnnonceElement extends HTMLElement {
    connectedCallback() {
      const newContent = document.querySelector('#annonce-list-item-template')
      const newElement = newContent.content.cloneNode(true)
      newElement.querySelector('div').classList.add(this.getAttribute('div'));
      newElement.querySelector('a').href = this.getAttribute('href')
      newElement.querySelector('.annonces__element__image').src = this.getAttribute('image')
      newElement.querySelector('.annonces__element__title').innerText = this.getAttribute('title')
      newElement.querySelector('.annonces__element__price').innerText = this.getAttribute('price')

      const icon = this.getAttribute('starred') == 'true' ? 'star' : 'star_outlined'
      const iconElement = newElement.querySelector('.material-icons');
      iconElement.innerText = icon

      newElement.querySelector('.annonces__element__buttons starred-button').addEventListener('click', (e) => {
        e.preventDefault()
        const icon = iconElement.innerText == 'star_outlined' ? 'star' : 'star_outlined'
        iconElement.innerText = icon
        this.dispatchEvent(starredClick)
      })

      this.replaceChildren(newElement)
      
    }
}
customElements.define('annonce-element', AnnonceElement)