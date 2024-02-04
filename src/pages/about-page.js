import { LitElement, html, css } from 'lit';

export class AboutPage extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];

    render() {
        return html`
          <h2>About About About!</h2>
          <a href="/form">Form Page</a>
        `;
    }
}
customElements.define('about-page', AboutPage);
