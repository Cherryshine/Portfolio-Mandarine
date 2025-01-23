import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

class FooterComponent extends LitElement {
  static styles = css`
    .footer {
      background-color: #1f2937;
      color: #9ca3af;
      padding: 48px 0;
    }
    .footer h3 {
      color: white;
    }
    .footer a {
      color: #9ca3af;
      text-decoration: none;
    }
  `;


  createRenderRoot() {
    return this; // Shadow DOM을 비활성화하고 light DOM 사용
  }

  render() {
    return html`
      <footer style="background-color: #1f2937; color: #9ca3af; padding: 48px 0;">
        <div class="max-w-8xl mx-auto px-4">
          <div class="grid grid-cols-4 gap-8">
            <div>
              <h3 class="text-white font-medium mb-4">고객센터</h3>
              <p class="text-2xl font-bold text-white mb-2">1234-5678</p>
              <p class="text-sm">평일 09:00 ~ 18:00</p>
              <p class="text-sm">점심 12:00 ~ 13:00</p>
            </div>
            <div>
              <h3 class="text-white font-medium mb-4">회사소개</h3>
              <ul class="space-y-2 text-sm">
                <li><a href="#" class="hover:text-white">회사소개</a></li>
                <li><a href="#" class="hover:text-white">인재채용</a></li>
                <li><a href="#" class="hover:text-white">제휴제안</a></li>
                <li><a href="#" class="hover:text-white">이용약관</a></li>
              </ul>
            </div>
            <div>
              <h3 class="text-white font-medium mb-4">고객지원</h3>
              <ul class="space-y-2 text-sm">
                <li><a href="#" class="hover:text-white">공지사항</a></li>
                <li><a href="#" class="hover:text-white">자주묻는질문</a></li>
                <li><a href="#" class="hover:text-white">1:1문의</a></li>
                <li><a href="#" class="hover:text-white">대량구매문의</a></li>
              </ul>
            </div>
            <div>
              <h3 class="text-white font-medium mb-4">Follow Us</h3>
              <div class="flex space-x-4">
                <a href="#" class="text-gray-400 hover:text-white"><i class="fab fa-facebook-f"></i></a>
                <a href="#" class="text-gray-400 hover:text-white"><i class="fab fa-instagram"></i></a>
                <a href="#" class="text-gray-400 hover:text-white"><i class="fab fa-youtube"></i></a>
                <a href="#" class="text-gray-400 hover:text-white"><i class="fab fa-twitter"></i></a>
              </div>
            </div>
          </div>
          <div class="border-t border-gray-800 mt-8 pt-8 text-sm">
            <p>상호명: 주식회사 만다린 | 대표이사: 홍길동 | 사업자등록번호: 123-45-67890</p>
            <p>주소: 서울특별시 강남구 테헤란로 123 | 통신판매업신고: 제2024-서울강남-1234호</p>
            <p class="mt-4">&copy; 2024 Mandarine. All rights reserved.</p>
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define('footer-component', FooterComponent);