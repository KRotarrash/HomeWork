import styled from 'styled-components';

interface ILink {
  text: string;
  url: string;
  disabled: boolean;
}

export const Link = ({ text, url, disabled }: ILink) => (
  <LinkModel disabled={disabled} href={url}>
    {text}
  </LinkModel>
);

const LinkModel = styled.a<{ disabled: boolean }>`
  font-family: 'Inter';
  font-style: normal;
  letter-spacing: 0.4px;
  text-transform: uppercase;
  font-weight: ${(props) => (props.disabled ? 400 : 600)};
  font-size: ${(props) => (props.disabled ? '18px' : '16px')};
  line-height: ${(props) => (props.disabled ? '24px' : '20px')};
  color: ${(props) => (props.disabled ? '#8D8E97' : '#bb1895')};

  :hover {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    color: #2231aa;
  }

  :default {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    color: #1e00c8;
  }
`;
