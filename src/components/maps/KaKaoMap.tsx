import React, { useState } from 'react';
import { MapModal } from '../commons/modals/Modal';
// import Button from '../commons/buttons/Button';
import { KaKaoMapResult, MapSearchType } from './KaKaoMapResult';
import * as S from './Map.style';
import { FiSearch } from 'react-icons/fi';
interface PlaceType {
  place_name: string;
  road_address_name: string;
  x: string;
  y: string;
  address_name: string;
  phone: string;
  place_url: string;
  location?: string;
}

interface KaKaoMapSearchModalProps {
  searchKeyword: string;
  isOpen: boolean;
  onClose: () => void;
  onSelect?: (place: PlaceType) => void; // 선택된 장소를 처리하는 콜백 함수
}

const KaKaoMap: React.FC<KaKaoMapSearchModalProps & MapSearchType> = ({
  isOpen,
  onClose,
  onSelect, // onSelectPlace prop 추가
}) => {
  // 입력 폼 변화 감지하여 입력 값 관리
  const [Value, setValue] = useState('');
  // 제출한 검색어 관리
  const [Keyword, setKeyword] = useState('');

  // const [_, setIsModalOpen] = useState(false);
  // 검색어를 입력하지 않고 검색 버튼을 눌렀을 경우
  const valueChecker = () => {
    if (Value === '') {
      alert('검색어를 입력해주세요.');
    }
  };

  // 입력 폼 변화 감지하여 입력 값을 state에 담아주는 함수
  const keywordChange = (e: {
    preventDefault: () => void;
    target: { value: string };
  }) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  // 제출한 검색어 state에 담아주는 함수
  const submitKeyword = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setKeyword(Value);
  };

  return (
    <>
      <MapModal isOpen={isOpen} onClose={onClose}>
        <form onSubmit={submitKeyword}>
          <label htmlFor="place">
            <S.MapSearchBar>
              <S.MapSearchInput
                type="text"
                onChange={keywordChange}
                placeholder="장소를 검색해주세요."
                required
              />
              <S.MapSearchButton onClick={valueChecker}>
                <FiSearch size="1.5em" />
              </S.MapSearchButton>
              <S.MapCloseButton onClick={onClose}>X</S.MapCloseButton>
            </S.MapSearchBar>
          </label>
        </form>
        <KaKaoMapResult searchKeyword={Keyword} onSelect={onSelect} />
        {/* 제출한 검색어 넘기기 */}
      </MapModal>
    </>
  );
};

export default KaKaoMap;
