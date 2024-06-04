// En footer.js
class FooterComponent extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <footer>
          <div class="logo">
            <img src="./img/logo.png " alt="Logo" />
          </div>
          <div class="footer-content">
            <span>
              Profesor <strong>Ronald Palacios</strong> | Curso:
              <u>Api HTML y JavaScript</u> © 2024
            </span>
            <span>
              Nombre: <strong>SANTIAGO MALDONADO</strong> | CI: <strong>30.407.730</strong>
            </span>
          </div>
        </footer>
      `;
    }
  }
  customElements.define('footer-component', FooterComponent);
  