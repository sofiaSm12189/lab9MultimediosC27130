class PosterCampaign extends HTMLElement {
  constructor() {
    super();

    this._titulo1 = "";
    this._titulo2 = "";
    this._frase = "";
    this._accion = "";
    this._imagen = "";
  }

  set titulo1(value) {
    this._titulo1 = value;
    this.render();
  }

  set titulo2(value) {
    this._titulo2 = value;
    this.render();
  }

  set frase(value) {
    this._frase = value;
    this.render();
  }

  set accion(value) {
    this._accion = value;
    this.render();
  }

  set imagen(value) {
    this._imagen = value;
    this.render();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="afiche afiche-izquierdo">
            <div class="afiche-contenido">

                <div class="encabezado-ucr">
                    <div class="logo-ucr">
                        <img
                            src="./assets/images/logoucr.png"
                            class="logo-imagen"
                        >
                    </div>
                    <div class="raya-decorativa"></div>
                </div>

                <div class="titulo-principal">
                    <h1 class="la-sede">
                        ${this._titulo1}
                    </h1>

                    <h1 class="acompana">
                        ${this._titulo2}
                    </h1>
                </div>

                <div class="zona-personas">
                    <img
                        src="${this._imagen}"
                        class="imagen-personas"
                    >
                </div>

                <div class="mensaje-central">
                    <p class="frase-fuerte">
                        ${this._frase}
                    </p>

                    <p class="frase-accion">
                        ${this._accion}
                    </p>
                </div>

            </div>
        </div>
        `;
  }
}

customElements.define("poster-campaign", PosterCampaign);
