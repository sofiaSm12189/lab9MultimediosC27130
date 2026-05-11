class LocationCard extends HTMLElement {
  constructor() {
    super();

    this._texto = "";
    this._destacado = false;
  }

  set texto(value) {
    this._texto = value;
    this.render();
  }

  set destacado(value) {
    this._destacado = value;
    this.render();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="
            tarjeta-ubicacion
            ${this._destacado ? "tarjeta-destacada" : ""}
        ">

            <h3 class="nombre-ubicacion">
                ${this._texto}
            </h3>

        </div>
        `;
  }
}

customElements.define("location-card", LocationCard);
