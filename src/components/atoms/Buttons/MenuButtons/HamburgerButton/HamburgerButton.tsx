import styled from 'styled-components';

interface IMenuButton {
  state: boolean;
}

export const HamburgerButton = ({ state }: IMenuButton) => (
  <Wrapper>
    <ButtonIcon state>+</ButtonIcon>
  </Wrapper>
);

const ButtonIcon = styled.div<{ state: boolean }>`
  position: relative;
  color: #ffffff;
  font-size: 32px;
  transform: rotate(45deg);
  left: 3%;
  top: -3%;
`;

const Wrapper = styled.div`
  position: absolute;
  justify-content: center;
  align-items: center;
  display: flex;
  height: 84px;
  width: 84px;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;
`;
