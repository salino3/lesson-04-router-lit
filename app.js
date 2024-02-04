import { LitElement, html, css } from "lit";
import { Router } from "@vaadin/router";
import { HomePage, AboutPage, FormPage } from "./src/pages";


class MyApp extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
  `;

  updated() {
    super.updated();
    const router = new Router(this.shadowRoot.querySelector("#outlet"));
    router.setRoutes([
      { path: "/", component: "home-page" },
      { path: "/about", component: "about-page" },
      { path: "/form", component: "form-page" },
      { path: "(/*)", redirect: "/" },
    ]);
  
  }


  render() {
    return html`
      <main>
        <div id="outlet"></div>
      </main>
    `;
  }
}

customElements.define("my-app", MyApp);
