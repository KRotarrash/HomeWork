// import { ReactNode } from 'react';
import styled from 'styled-components';

import { ColorService } from '../../../../services/ColorService';
import { ReactComponent as DislikeIcon } from './../../../../assets/icons/dislike.svg';

const getTheme = (theme: 'primary' | 'secondary' | 'delete' | 'default'): IButtonStyled => {
  if (theme === 'delete') {
    return {
      bgDefault: ColorService.ERROR,
      bgHover: ColorService.ERROR,
      colorBorderDefault: ColorService.ERROR,
      colorBorderHover: ColorService.ERROR,
      bgDisabled: ColorService.TRANSPARENT,
      color: ColorService.WHITE,
      colorHover: ColorService.WHITE,
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

  if (theme === 'primary') {
    return {
      bgDefault: ColorService.PRIMARY,
      bgHover: ColorService.PRIMARY2,
      colorBorderDefault: ColorService.PRIMARY,
      colorBorderHover: ColorService.PRIMARY2,
      bgDisabled: ColorService.LIGHT,
      color: ColorService.WHITE,
      colorHover: ColorService.WHITE,
    };
  }

  return {
    bgDefault: ColorService.LIGHT,
    bgHover: ColorService.ERROR,
    colorBorderDefault: ColorService.LIGHT,
    colorBorderHover: ColorService.ERROR,
    bgDisabled: ColorService.LIGHT,
    color: ColorService.GRAY,
    colorHover: ColorService.WHITE,
  };
};

interface IButtonStyled {
  bgDefault: string;
  bgHover: string;
  colorBorderDefault: string;
  colorBorderHover: string;
  bgDisabled: string;
  color: string;
  colorHover: string;
}

interface IButton {
  disabled?: boolean;
  onClick: () => void;
  state: boolean;
  theme: 'primary' | 'secondary' | 'delete' | 'default';
}

interface IIcon {
  theme: 'primary' | 'secondary' | 'delete' | 'default';
}

const DislikeIconStyled = styled(DislikeIcon)<IIcon>`
  path {
    fill: ${(prop) =>
      prop.theme == 'secondary' || prop.theme == 'default' ? '#4C4B5E' : '#FFFFFF'};
  }
`;

export const DislikeButton = ({ disabled, onClick, theme }: IButton) => {
  const selectedTheme = getTheme(theme);
  return (
    <ButtonStyled onClick={onClick} disabled={disabled} {...selectedTheme}>
      <DislikeIconStyled theme={theme} />
    </ButtonStyled>
  );
};

const ButtonStyled = styled.button<IButtonStyled>`
  padding: 17px 32px;
  border-radius: 2px;
  display: flex;
  align-items: center;
  background: ${({ bgDefault }) => bgDefault};
  border: ${({ colorBorderDefault }) => `1px solid  ${colorBorderDefault}`};
  color: ${({ color }) => color};
  :disabled {
    background: ${({ bgDisabled }) => bgDisabled};
    border: ${({ bgDisabled }) => `1px solid  ${bgDisabled}`};
    pointer-events: none;
    color: ${ColorService.GRAY};
    svg path {
      fill: ${ColorService.GRAY};
    }
  }
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
