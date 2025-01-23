import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

class MainContentComponent extends LitElement {
  static styles = css`
    .main-content {
      max-width: 1280px;
      margin: 0 auto;
      padding: 16px;
    }
  `;

  render() {
    return html`
      <main class="main-content">
        <div class="grid grid-cols-5">
          <div class="col-span-5">
            <div id="mainCarousel" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-indicators">
                <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="0" class="active"></button>
                <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="1"></button>
                <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="2"></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div style="padding-top: 31.25%;"></div>
                  <img src="/img/banner01.png" class="d-block w-100 h-100 object-cover absolute top-0 left-0" alt="배너 1">
                </div>
                <div class="carousel-item">
                  <div style="padding-top: 31.25%;"></div>
                  <img src="/img/banner02.png" class="d-block w-100 h-100 object-cover absolute top-0 left-0" alt="배너 2">
                </div>
                <div class="carousel-item">
                  <div style="padding-top: 31.25%;"></div>
                  <img src="/img/banner03.png" class="d-block w-100 h-100 object-cover absolute top-0 left-0" alt="배너 3">
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#mainCarousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">이전</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#mainCarousel" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">다음</span>
              </button>
            </div>
          </div>
        </div>
      </main>
    `;
  }
}

customElements.define('main-content-component', MainContentComponent);