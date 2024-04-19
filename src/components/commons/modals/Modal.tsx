import React from 'react';
import {
  ModalDim,
  ModalOverlay,
  ModalContainer,
  MapModalOverlay,
  InvitationModalOverlay,
  DetailMapModalOverlay,
  LoginModalOverlay,
  VoteModalOverlay,
  CreateVoteModalOverlay,
  CreateVoteModalContainer,
} from './Modal.style';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <ModalDim onClick={onClose}>
      <ModalOverlay onClick={(e) => e.stopPropagation()}>
        <ModalContainer>{children}</ModalContainer>
      </ModalOverlay>
    </ModalDim>
  );
};

export default Modal;

export const MapModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
}) => {
  if (!isOpen) return null;

  return (
    <ModalDim onClick={onClose}>
      <MapModalOverlay onClick={(e) => e.stopPropagation()}>
        <ModalContainer>{children}</ModalContainer>
      </MapModalOverlay>
    </ModalDim>
  );
};

export const InvitationModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
}) => {
  if (!isOpen) return null;

  return (
    <ModalDim onClick={onClose}>
      <InvitationModalOverlay onClick={(e) => e.stopPropagation()}>
        <ModalContainer>{children}</ModalContainer>
      </InvitationModalOverlay>
    </ModalDim>
  );
};

export const DetailMapModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
}) => {
  if (!isOpen) return null;

  return (
    <ModalDim onClick={onClose}>
      <DetailMapModalOverlay onClick={(e) => e.stopPropagation()}>
        <ModalContainer>{children}</ModalContainer>
      </DetailMapModalOverlay>
    </ModalDim>
  );
};

export const LoginModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
}) => {
  if (!isOpen) return null;

  return (
    <ModalDim onClick={onClose}>
      <LoginModalOverlay onClick={(e) => e.stopPropagation()}>
        <ModalContainer>{children}</ModalContainer>
      </LoginModalOverlay>
    </ModalDim>
  );
};

export const VoteModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
}) => {
  if (!isOpen) return null;

  return (
    <ModalDim onClick={onClose}>
      <VoteModalOverlay onClick={(e) => e.stopPropagation()}>
        <ModalContainer>{children}</ModalContainer>
      </VoteModalOverlay>
    </ModalDim>
  );
};

export const CreateVoteModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
}) => {
  if (!isOpen) return null;

  return (
    <ModalDim onClick={onClose}>
      <CreateVoteModalOverlay onClick={(e) => e.stopPropagation()}>
        <CreateVoteModalContainer>{children}</CreateVoteModalContainer>
      </CreateVoteModalOverlay>
    </ModalDim>
  );
};

// 모달 사용 예시로 해둔거 일단 주석처리로 둠

// import Modal from '@/components/commons/modals/Modal';
// import { useState } from 'react';

// const [isModalOpen, setIsModalOpen] = useState(false);
// const openModal = () => setIsModalOpen(true);
// const closeModal = () => setIsModalOpen(false);

{
  /* <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div>
          <h2>모달 완료!</h2>
          <p>안녕하세요 김모달입니다!</p>
          <Button text="닫기" onClick={closeModal} />
        </div>
      </Modal> */
}
