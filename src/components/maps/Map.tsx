import { useEffect } from 'react';
import { DetailMapModal } from '@/components/commons/modals/Modal';
import * as S from './Map.style';
import { SlLocationPin } from 'react-icons/sl';

interface MapModalProps {
  isOpen: boolean;
  onClose: () => void;
  address: string; // 주소 prop 추가
}

declare global {
  interface Window {
    kakao: any;
  }
}

const Map: React.FC<MapModalProps> = ({ isOpen, onClose, address }) => {
  useEffect(() => {
    if (isOpen) {
      const container = document.getElementById('map'); // 지도를 담을 영역의 DOM 레퍼런스

      if (container && window.kakao) {
        // 카카오 API 초기화가 완료되었는지 확인
        const geocoder = new window.kakao.maps.services.Geocoder();

        // 주소를 좌표로 변환
        geocoder.addressSearch(address, (result: any, status: any) => {
          if (status === window.kakao.maps.services.Status.OK) {
            const coords = new window.kakao.maps.LatLng(
              result[0].y,
              result[0].x,
            ); // 위도와 경도로 좌표 설정
            const options = {
              center: coords, // 변환된 좌표를 지도의 중심으로 설정
              level: 3, // 지도의 확대 레벨
            };

            // 카카오 지도 생성
            const map = new window.kakao.maps.Map(container, options);

            // 마커 생성 및 지도에 추가
            const marker = new window.kakao.maps.Marker({
              position: coords,
            });
            marker.setMap(map);
          }
        });
      }
    }
  }, [isOpen, address]); // 주소가 변경되면 useEffect 재실행

  return (
    <>
      <DetailMapModal isOpen={isOpen} onClose={onClose}>
        <S.MapTitle>
          <S.MapTitleLeft>
            <div
              style={{
                backgroundColor: '#C5F1FF',
                width: '35px',
                height: '35px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <SlLocationPin size="25px" color="black" />
            </div>
            <div>위치보기</div>
          </S.MapTitleLeft>
          <div>{address}</div>
          <S.MapCloseButton onClick={onClose}>X</S.MapCloseButton>
        </S.MapTitle>
        {/* 지도 영역  */}
        {/* 추후 지도에 마크업으로 표기한 데이터를 갖고 오기  */}
        <div
          id="map"
          style={{
            width: '480px',
            height: '480px',
            borderRadius: '5px',
            marginBottom: '5px',
            borderStyle: 'none',
          }}
        />
      </DetailMapModal>
    </>
  );
};

export default Map;
