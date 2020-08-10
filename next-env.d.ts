/// <reference types="next" />
/// <reference types="next/types/global" />

declare global {
  interface Window {
    kakao: any;
  }
}

window.kakao = window.kakao || {};
