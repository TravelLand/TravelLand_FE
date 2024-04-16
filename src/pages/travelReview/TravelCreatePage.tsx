import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import ToggleButton from '@/components/commons/buttons/ToggleButton';
import Header from '@/components/layouts/Header';
import * as S from './TravelReview.styles';
import { createTrip } from '@/api/reviewAxios';
import { useMutation } from '@tanstack/react-query';
// import { AxiosResponse } from 'axios';
import { TripData } from '@/api/interfaces/reviewInterface';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import Button from '@/components/commons/buttons/Button';

interface TravelCreateFormProps {
  // email: string;
  tripData: TripData;
  imageList: File[];
}

export interface CreateTripRequest {
  // email: string;
  formData: FormData;
}

const TravelCreateForm: React.FC<TravelCreateFormProps> = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [tripStartDate, setTripStartDate] = useState<string>('');
  const [tripEndDate, setTripEndDate] = useState<string>('');
  const [cost, setCost] = useState<string>('');
  const [hashtags, setHashtags] = useState<string[]>([]);
  const [area, setArea] = useState<string>('');
  const [isPublic, setIsPublic] = useState<boolean>(true);
  const [imageFiles, setImageFiles] = useState<File[]>([]);

  // const email = 'test@test.com';

  const createReviewMutation = useMutation({
    mutationFn: createTrip,
    onSuccess: (data: TripData) => {
      console.log(data);
      alert('여행 정보 작성 성공!');
      navigate('/travelReview');
    },
    onError: (error: AxiosError) => {
      const message = error.response?.data;
      alert(`여행 정보 등록 실패! 오류: ${message}`);
      console.error(error.response?.data);
    },
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // tripData 객체 생성
    const tripData: TripData = {
      title,
      content,
      tripStartDate,
      tripEndDate,
      cost: parseFloat(cost),
      hashTag: hashtags,
      address: 'string',
      isPublic,
    };

    const formData = new FormData();
    formData.append('requestDto', JSON.stringify(tripData));
    // 첫 번째 이미지 파일을 'thumbnail'로 추가
    // imageFiles 배열은 이미지 파일들을 담고 있다고 가정
    if (imageFiles.length > 0) {
      formData.append('thumbnail', imageFiles[0]);
    }
    // 나머지 이미지 파일들을 'imageList'로 추가
    imageFiles.slice(1).forEach((file) => {
      formData.append('imageList', file);
    });

    // mutate 함수에 전달할 객체 생성
    const request: CreateTripRequest = {
      formData,
    };
    // mutate 호출 //
    createReviewMutation.mutate(request);
  };

  // 토글
  const toggleIsPublic = () => setIsPublic(!isPublic);

  // 해시태그를 추가
  const handleAddHashtag = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && event.currentTarget.value !== '') {
      setHashtags([...hashtags, event.currentTarget.value]);
      event.currentTarget.value = '';
      event.preventDefault();
    }
  };
  // 해시태그를 삭제
  const handleRemoveHashtag = (index: number) => {
    setHashtags(hashtags.filter((_, i) => i !== index));
  };

  // 이미지 파일 리스트를 이미지 미리보기
  const imagePreviews = imageFiles.map((file, index) => (
    <S.ImagePreview key={index}>
      <S.FaTimesCircle onClick={() => handleRemoveImage(index)} />
      <img src={URL.createObjectURL(file)} alt={`preview ${index}`} />
    </S.ImagePreview>
  ));

  // 이미지
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const fileList = Array.from(event.target.files).slice(
        0,
        5 - imageFiles.length,
      );
      setImageFiles([...imageFiles, ...fileList]);
    }
  };

  const handleRemoveImage = (index: number) => {
    setImageFiles(imageFiles.filter((_, i) => i !== index));
  };

  const handleNavigate = () => {
    navigate('/travelReview');
  };

  return (
    <>
      <Header />
      <S.BackBox>
        <Button text="돌아가기" onClick={handleNavigate} />
      </S.BackBox>
      <S.Form onSubmit={handleSubmit}>
        <S.FieldContainer>
          <S.ImageUploadSection>
            <S.ImageUploadContainer>
              <S.ImageUploadInput
                id="image-upload"
                type="file"
                multiple
                onChange={handleImageChange}
                accept="image/*"
              />
              <S.ImageUploadLabel htmlFor="image-upload">
                <S.FaCameraIcon />
              </S.ImageUploadLabel>
            </S.ImageUploadContainer>
          </S.ImageUploadSection>
          <S.ImagePreviewSection>
            <S.ImagePreviewContainer>{imagePreviews}</S.ImagePreviewContainer>
          </S.ImagePreviewSection>
        </S.FieldContainer>

        <S.FieldContainer>
          <S.Label>제목</S.Label>
          <S.Input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="여행의 제목을 입력하세요"
          />
        </S.FieldContainer>

        <S.FieldContainer>
          <S.Label>내용</S.Label>
          <S.Textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="여행에 대한 내용을 입력해주세요!"
          />
        </S.FieldContainer>

        <S.DateFieldsContainer>
          <S.FieldContainer>
            <S.Label>여행 시작일</S.Label>
            <S.Input
              type="date"
              value={tripStartDate}
              onChange={(e) => setTripStartDate(e.target.value)}
            />
          </S.FieldContainer>
          <S.FieldContainer>
            <S.Label>여행 종료일</S.Label>
            <S.Input
              type="date"
              value={tripEndDate}
              onChange={(e) => setTripEndDate(e.target.value)}
            />
          </S.FieldContainer>
        </S.DateFieldsContainer>

        <S.FieldContainer>
          <S.Label>여행 비용</S.Label>
          <S.Input
            type="text"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
            placeholder="여행의 예상 비용을 입력해주세요."
          />
        </S.FieldContainer>

        <S.FieldContainer>
          <S.Label>여행 지역</S.Label>
          <S.Input
            type="text"
            value={area}
            onChange={(e) => setArea(e.target.value)}
            placeholder="여행 지역을 입력해주세요."
          />
        </S.FieldContainer>

        <S.FieldContainer>
          <S.Label># 해시태그</S.Label>
          <S.Input
            type="text"
            onKeyPress={handleAddHashtag}
            placeholder="#해시태그 입력 후 엔터!"
          />
          <S.HashtagContainer>
            {hashtags.map((tag, index) => (
              <S.Hashtag key={index}>
                {tag}
                <FaTimes onClick={() => handleRemoveHashtag(index)} />
              </S.Hashtag>
            ))}
          </S.HashtagContainer>
        </S.FieldContainer>

        <S.FieldContainer>
          <S.FieldContainer>
            <S.Label>공개/비공개:</S.Label>
            <ToggleButton isChecked={isPublic} onToggle={toggleIsPublic} />
          </S.FieldContainer>
        </S.FieldContainer>

        <S.SubmitButton type="submit">후기 작성하기</S.SubmitButton>
      </S.Form>
    </>
  );
};

export default TravelCreateForm;
