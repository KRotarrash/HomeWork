import styled from 'styled-components';
import { ColorService } from '../../../../../services/ColorService';

interface IMenuButton {
  state?: boolean;
}

export const HamburgerButton = ({ state }: IMenuButton) => (
  <Wrapper>
    <ButtonIcon state={state}></ButtonIcon>
  </Wrapper>
);

const ButtonIcon = styled.div<{ state?: boolean }>`
  display: block;
  background-color: ${ColorService.WHITE};
  height: 2px;
  width: 20px;
  border-radius: 2px;
  content: '';
  visibility: ${({ state }) => (state ? 'visible' : 'hidden')};

  ::after {
    visibility: visible;
    position: absolute;
    margin-top: ${({ state }) => (state ? '6px' : '0px')};
    display: block;
    background-color: ${ColorService.WHITE};
    height: 2px;
    width: 20px;
    border-radius: 2px;
    content: '';
    transform: ${({ state }) => (state ? 'none' : 'rotate(-45deg)')};
  }

  ::before {
    visibility: visible;
    position: absolute;
    margin-top: ${({ state }) => (state ? '-6px' : '0px')};
    display: block;
    background-color: ${ColorService.WHITE};
    height: 2px;
    width: 20px;
    border-radius: 2px;
    content: '';
    transform: ${({ state }) => (state ? 'none' : 'rotate(45deg)')};
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
