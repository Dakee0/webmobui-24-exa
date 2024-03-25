class categorieElement extends HTMLElement {
    connectedCallback() {
      const newContent = document.querySelector('.categories')
      const newElement = newContent.content.cloneNode(true)
      newElement.querySelector('a').href = this.getAttribute('href')
      newElement.querySelector('.categories__box__icon').src = this.getAttribute('icon')
      newElement.querySelector('.categories__box__name').innerText = this.getAttribute('name')
      newElement.querySelector('.categories__box__count').innerText = this.getAttribute('count')

      this.replaceChildren(newElement)
      
    }
}
customElements.define('categorie-element', categorieElement)