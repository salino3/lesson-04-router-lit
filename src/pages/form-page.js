import { LitElement, html, css } from 'lit';

export class FormPage extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];

    render() {
        return html`
          <div>
            <h2>
              Hello Form Second Page!
              <a href="/">Home Page!</a>
            </h2>
          </div>
        `;
    }
}
customElements.define('form-page', FormPage);
