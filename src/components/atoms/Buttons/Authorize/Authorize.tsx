import styled from 'styled-components';
import { getFontFamily } from '../../../../services';
import { ColorService } from '../../../../services/ColorService';
import { ReactComponent as NoAuthIcon } from './../../../../assets/icons/noAuth.svg';

const getTheme = (theme: 'primary' | 'secondary' | 'delete' | 'icon'): IAuthorizeButtonStyled => {
  if (theme === 'icon') {
    return {
      bgDefault: ColorService.LIGHT,
      bgHover: ColorService.PRIMARY2,
      colorBorderDefault: ColorService.LIGHT,
      colorBorderHover: ColorService.PRIMARY2,
      bgDisabled: ColorService.LIGHT,
      color: ColorService.SECONDARY,
      colorHover: ColorService.WHITE,
    };
  }

  if (theme === 'delete') {
    return {
      bgDefault: ColorService.TRANSPARENT,
      bgHover: ColorService.TRANSPARENT,
      colorBorderDefault: ColorService.TRANSPARENT,
      colorBorderHover: ColorService.MEDIUM,
      bgDisabled: ColorService.TRANSPARENT,
      color: ColorService.ERROR,
      colorHover: ColorService.ERROR,
    };
  }

  if (theme === 'secondary') {
    return {
      bgDefault: ColorService.LIGHT,
      bgHover: ColorService.MEDIUM,
      colorBorderDefault: ColorService.LIGHT,
      colorBorderHover: ColorService.MEDIUM,
      bgDisabled: ColorService.LIGHT,
      color: ColorService.SECONDARY,
      colorHover: ColorService.SECONDARY,
    };
  }

  return {
    bgDefault: ColorService.PRIMARY,
    bgHover: ColorService.PRIMARY2,
    colorBorderDefault: ColorService.PRIMARY,
    colorBorderHover: ColorService.PRIMARY2,
    bgDisabled: ColorService.LIGHT,
    color: ColorService.WHITE,
    colorHover: ColorService.WHITE,
  };
};

const getSymbolName = (name: string) => {
  if (name.length <= 0) return '';
  let requisites = name.split(' ');
  if (requisites.length <= 1) return requisites[0].charAt(0);
  return requisites[0].charAt(0) + requisites[1].charAt(0);
};

interface IAuthorizeButtonStyled {
  bgDefault: string;
  bgHover: string;
  colorBorderDefault: string;
  colorBorderHover: string;
  bgDisabled: string;
  color: string;
  colorHover: string;
}

interface IAuthorize {
  userName: string;
  onClick: () => void;
  theme: 'primary' | 'secondary' | 'delete' | 'icon';
}

const NoAuthIconStyled = styled(NoAuthIcon)`
  path {
  }
`;

export const Authorize = ({ userName, onClick, theme }: IAuthorize) => {
  const selectedTheme = getTheme(theme);
  // const icon = getIcon(userName);
  if (userName.length <= 0) {
    return (
      <AuthorizeButton onClick={onClick} {...selectedTheme}>
        {<NoAuthIconStyled />}
        {userName}
      </AuthorizeButton>
    );
  }
  const symbolName = getSymbolName(userName);
  return (
    <AuthorizeButton onClick={onClick} {...selectedTheme}>
      <AuthIconStyled>{symbolName}</AuthIconStyled>
      {userName}
    </AuthorizeButton>
  );
};

const AuthorizeButton = styled.button<IAuthorizeButtonStyled>`
  padding: 15px 16px 14px 16px;
  display: flex;
  align-items: center;
  background: ${({ bgDefault }) => bgDefault};
  border: ${({ colorBorderDefault }) => `1px solid  ${colorBorderDefault}`};
  color: ${({ color }) => color};
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 0.05em;
  font-family: ${getFontFamily()};

  :hover {
    background: ${({ bgHover }) => bgHover};
    border: ${({ colorBorderHover }) => `1px solid  ${colorBorderHover}`};
    color: ${({ colorHover }) => colorHover};
    cursor: pointer;
    svg path {
      fill: ${({ colorHover }) => colorHover};
    }
  }
`;

const AuthIconStyled = styled.span`
  background-color: ${ColorService.PRIMARY2};
  padding: 7px 11px;
  margin: 0 16px 0 0;
  border-radius: 2px;
`;
