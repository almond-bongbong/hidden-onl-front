import { Coords, SearchAddressByCoordsResult, SearchAddressByKeywordResult } from '../types/kakaoMap';
import { isBrowser } from './validation';

const placesService = new window.kakao.maps.services.Places();
const geocoder = new window.kakao.maps.services.Geocoder();

export const searchAddressByKeyword = (address: string): Promise<SearchAddressByKeywordResult[]> | null =>
  isBrowser()
    ? new Promise((resolve, reject) => {
        placesService.keywordSearch(
          address,
          (result: SearchAddressByKeywordResult[], status: typeof window.kakao.maps.services.Status) => {
            if (status === window.kakao.maps.services.Status.OK) {
              resolve(result);
            } else {
              reject(result);
            }
          },
        );
      })
    : null;

export const searchAddressByCoords = (coords: Coords): Promise<SearchAddressByCoordsResult[]> | null =>
  isBrowser()
    ? new Promise((resolve, reject) => {
        geocoder.coord2Address(
          coords.getLng(),
          coords.getLat(),
          (result: SearchAddressByCoordsResult[], status: string) => {
            if (status === window.kakao.maps.services.Status.OK) {
              resolve(result);
            } else {
              reject(result);
            }
          },
        );
      })
    : null;
