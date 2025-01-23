import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

class NavComponent extends LitElement {
  static styles = css`
    .nav {
      background-color: white;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    }
    .nav a {
      color: #4b5563;
      text-decoration: none;
      padding: 16px;
    }
    .dropdown {
      position: relative;
      display: inline-block;
    }
    .dropdown-content {
      display: none;
      position: absolute;
      background-color: white;
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
      z-index: 1;
      opacity: 0;
      transition: opacity 0.3s ease;
    }
    .dropdown:hover .dropdown-content {
      display: block;
      opacity: 1;
    }
    .dropdown-content a {
      color: black;
      padding: 12px 16px;
      text-decoration: none;
      display: block;
    }
    .dropdown-content a:hover {
      background-color: #f1f1f1;
    }
    .icon-buttons {
      display: flex;
      align-items: center;
    }
    .icon-buttons a {
      margin-left: 16px;
      color: #4b5563;
    }
  `;

  render() {
    return html`
      <nav class="nav">
        <div class="max-w-8xl mx-auto px-4 flex justify-between items-center">
          <div class="flex justify-center">
            <div class="dropdown">
              <a href="#" class="flex items-center px-2 py-4 font-medium hover:text-custom">전체메뉴</a>
              <div class="dropdown-content">
                <a href="#">카테고리 1</a>
                <a href="#">카테고리 2</a>
                <a href="#">카테고리 3</a>
                <a href="#">카테고리 4</a>
              </div>
            </div>
            <a href="#" class="flex items-center px-2 py-4 font-medium hover:text-custom">메인메뉴 1</a>
            <a href="#" class="flex items-center px-2 py-4 font-medium hover:text-custom">메인메뉴 2</a>
            <a href="#" class="flex items-center px-2 py-4 font-medium hover:text-custom">메인메뉴 3</a>
          </div>
          <div class="icon-buttons">
            <a href="#" class="hover:text-custom"><i class="fas fa-heart"></i></a>
            <a href="#" class="hover:text-custom"><i class="fas fa-shopping-cart"></i></a>
          </div>
        </div>
      </nav>
    `;
  }
}

customElements.define('nav-component', NavComponent);