import { LitElement, html, css } from 'lit';

export class HomePage extends LitElement {
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
                Home Page
                <a href="/about">About</a>
            </h2>
        </div>
        `;
    }
}
customElements.define('home-page', HomePage);
