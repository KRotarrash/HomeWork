import styled from 'styled-components';

export const Header = () => <HeaderSite></HeaderSite>;

const HeaderSite = styled.div<{ valid?: boolean }>`
  position: absolute;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;
  height: 84px;
  background: #2231aa;
`;
