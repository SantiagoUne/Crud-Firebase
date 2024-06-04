class HeaderComponent extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <header>
          <time datetime="2024-05-30">
            <i> ACTIVIDAD LAPSO </i>
            Mayo - 31 - 2024
            <span>
              <u> CRUD FIREBASE</u>
            </span>
          </time>
        </header>
      `;
    }
  }
  customElements.define('header-component', HeaderComponent);