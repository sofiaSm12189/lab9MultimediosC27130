import "./LocationCard.js";

class DirectionPoster extends HTMLElement {
  constructor() {
    super();

    this._ubicaciones = [];
  }

  set ubicaciones(value) {
    this._ubicaciones = value;
    this.render();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="afiche afiche-derecho">

            <div class="afiche-contenido">

                <div class="grid-ubicaciones">
                </div>

                <div class="footer-ucr-derecho">
                    <span class="ucr-texto-footer">
                        UCR
                    </span>
                </div>

            </div>

        </div>
        `;

    const grid = this.querySelector(".grid-ubicaciones");

    if (!grid) return;

    this._ubicaciones.forEach((ubicacion, index) => {
      const card = document.createElement("location-card");

      card.texto = ubicacion;

      if (index === this._ubicaciones.length - 1) {
        card.destacado = true;
      }

      grid.appendChild(card);
    });
  }
}

customElements.define("direction-poster", DirectionPoster);
