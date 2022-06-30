import styled from 'styled-components';

interface ITitle {
  text: string;
}

export const Title = ({ text }: ITitle) => <TitleModel>{text}</TitleModel>;

const TitleModel = styled.title<{ valid?: boolean }>`
  width: 186px;
  height: 80px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 56px;
  line-height: 80px;
  display: flex;
  align-items: center;
  color: #313037;
  flex: none;
  order: 1;
  flex-grow: 0;
`;
