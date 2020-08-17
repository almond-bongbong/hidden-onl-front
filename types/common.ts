import { isBrowser } from '../libs/validation';

const kakao = isBrowser() && window.kakao;

export type Map = typeof kakao.maps.Map;
export type Marker = typeof kakao.maps.Marker;
export type MarkerClusterer = typeof kakao.maps.MarkerClusterer;
