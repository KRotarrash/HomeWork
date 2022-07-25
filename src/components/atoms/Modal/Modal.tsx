import React, { useState, useEffect, ReactNode } from 'react';
import styled from 'styled-components';
import { Button } from '../Buttons/Button/Button';
import { ColorService } from '../../../services/ColorService';

import { ReactComponent as CloseIcon } from './../../../assets/icons/close.svg';

interface IModal {
  show: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const Modal = ({ show, onClose, children }: IModal) => {
  return (
    <ModalStyled show={show} onClick={onClose}>
      <ModalContentStyled show={show} onClick={(e) => e.stopPropagation()}>
        <ModalHeaderStyled>
          <ButtonCloseStyled onClick={onClose}>
            <CloseIconStyled />
          </ButtonCloseStyled>
        </ModalHeaderStyled>
        <ModalBodyStyled>{children}</ModalBodyStyled>
        <ModalFooterStyled>
          <Button text="Close modal" onClick={onClose} theme="primary"></Button>
        </ModalFooterStyled>
      </ModalContentStyled>
    </ModalStyled>
  );
};

const ModalStyled = styled.div<{ show: boolean }>`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${({ show }) => (show ? 1 : 0)};
  pointer-events: ${({ show }) => (show ? 'visible' : 'none')};
  transition: all 0.3s ease-in-out;
`;

const ModalContentStyled = styled.div<{ show: boolean }>`
  width: 700px;
  background-color: #fff;
  transform: ${({ show }) => (show ? 'translateY(-150px)' : 'translateY(50)')};
  transition: all 0.3s ease-in-out;
`;

const ModalHeaderStyled = styled.div`
  padding: 10px;
  display: flex;
  justify-content: end;
`;

const ModalFooterStyled = styled.div`
  padding: 10px;
  display: flex;
  justify-content: end;
`;

const ModalTitleStyled = styled.div`
  margin: 0;
`;

const ModalBodyStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
`;

const CloseIconStyled = styled(CloseIcon)`
  width: 20px;
  height: 20px;
  margin: 10px;
  path {
  }
`;

const ButtonCloseStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid ${ColorService.PRIMARY};
  background-color: ${ColorService.PRIMARY};

  svg path {
    fill: ${ColorService.WHITE};
  }

  :hover {
    background-color: ${ColorService.WHITE};

    svg path {
      fill: ${ColorService.PRIMARY};
    }
  }
`;

export default Modal;
