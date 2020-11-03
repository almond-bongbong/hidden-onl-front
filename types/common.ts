import { isBrowser } from '../libs/validation';
import { Address, RoadAddress } from './kakaoMap';

const kakao = isBrowser() && window.kakao;

export type Map = typeof kakao.maps.Map;
export type Marker = typeof kakao.maps.Marker;
export type MarkerClusterer = typeof kakao.maps.MarkerClusterer;

export interface AddressValues {
  address?: Address;
  roadAddress?: RoadAddress;
  latitude?: number;
  longitude?: number;
}
