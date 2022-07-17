import styled from 'styled-components';
import { ColorService } from '../../../../../services/ColorService';

interface IMenuButton {
  isVisible?: boolean;
}

export const HamburgerButton = ({ isVisible: isVisible }: IMenuButton) => (
  <Wrapper>
    <ButtonIcon isVisible={isVisible}></ButtonIcon>
  </Wrapper>
);

const ButtonIcon = styled.div<{ isVisible?: boolean }>`
  display: block;
  background-color: ${ColorService.WHITE};
  height: 2px;
  width: 20px;
  border-radius: 2px;
  content: '';
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};

  ::after {
    visibility: visible;
    position: absolute;
    margin-top: ${({ isVisible }) => (isVisible ? '6px' : '0px')};
    display: block;
    background-color: ${ColorService.WHITE};
    height: 2px;
    width: 20px;
    border-radius: 2px;
    content: '';
    transform: ${({ isVisible }) => (isVisible ? 'none' : 'rotate(-45deg)')};
  }

  ::before {
    visibility: visible;
    position: absolute;
    margin-top: ${({ isVisible }) => (isVisible ? '-6px' : '0px')};
    display: block;
    background-color: ${ColorService.WHITE};
    height: 2px;
    width: 20px;
    border-radius: 2px;
    content: '';
    transform: ${({ isVisible }) => (isVisible ? 'none' : 'rotate(45deg)')};
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: ${ColorService.PRIMARY};
  padding: 35px 32px;
  cursor: pointer;

  :hover {
    background-color: ${ColorService.PRIMARY2};
  }
`;
