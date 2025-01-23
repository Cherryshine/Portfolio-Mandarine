import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

class HeaderComponent extends LitElement {
  static styles = css`
    .header {
      background-color: white;
      border-bottom: 1px solid #e5e7eb;
    }
    .logo img {
      height: 32px;
    }
    .search-input {
      width: 100%;
      padding: 8px 16px;
      border: 1px solid #d1d5db;
      border-radius: 4px;
    }
    .utility-menu a {
      color: #4b5563;
      text-decoration: none;
      margin: 0 8px;
    }
    .search-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      display: none;
      opacity: 0;
      transition: opacity 0.3s ease;
    }
    .search-overlay.active {
      display: block;
      opacity: 1;
    }
    .search-popup {
      position: fixed;
      top: -100%;
      left: 50%;
      transform: translateX(-50%);
      width: 80%;
      max-width: 600px;
      background-color: white;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      transition: top 0.3s ease;
    }
    .search-popup.active {
      top: 10%;
    }
  `;

  constructor() {
    super();
    this.isSearchActive = false;
  }

  toggleSearch() {
    this.isSearchActive = !this.isSearchActive;
    this.requestUpdate();
  }

  render() {
    return html`
      <header class="header">
        <div class="max-w-8xl mx-auto">
          <div class="flex justify-between items-center px-4 py-3">
            <div class="flex-shrink-0">
              <a href="/">
                <img src="/img/logo.png" alt="만다린" class="h-8">
              </a>
            </div>
            <div class="flex flex-grow items-center justify-center space-x-8">
              <div class="flex-grow max-w-xl">
                <div class="relative">
                  <input type="text" 
                         placeholder="검색어를 입력해 주세요" 
                         class="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-custom"
                         @click="${this.toggleSearch}">
                  <button class="absolute right-0 top-0 mt-2 mr-3 text-gray-400 hover:text-custom">
                    <i class="fas fa-search"></i>
                  </button>
                </div>
              </div>
              <div class="flex items-center space-x-2">
                <a href="#" class="text-sm text-gray-600 hover:text-custom">로그인</a>
                <span class="text-gray-300">|</span>
                <a href="#" class="text-sm text-gray-600 hover:text-custom">회원가입</a>
                <span class="text-gray-300">|</span>
                <a href="#" class="text-sm text-gray-600 hover:text-custom">주문조회</a>
                <span class="text-gray-300">|</span>
                <a href="#" class="text-sm text-gray-600 hover:text-custom">고객센터</a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <!-- 전체 검색 오버레이 -->
      <div class="${this.isSearchActive ? 'search-overlay active' : 'search-overlay'}" 
           @click="${this.toggleSearch}">
        <div class="${this.isSearchActive ? 'search-popup active' : 'search-popup'}" 
             @click="${(e) => e.stopPropagation()}">
          <input type="text" 
                 placeholder="전체 검색..." 
                 class="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:border-custom">
        </div>
      </div>
    `;
  }
}

customElements.define('header-component', HeaderComponent);