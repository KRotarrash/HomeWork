// import { ReactNode } from 'react';
import styled from 'styled-components';

import { getFontFamily } from '../../../../services';
import { ColorService } from '../../../../services/ColorService';
import { ReactComponent as FavoriteIcon } from './../../../../assets/icons/favorite.svg';

const getTheme = (): IButtonStyled => {
  return {
    bgDefault: ColorService.LIGHT,
    bgHover: ColorService.PRIMARY2,
    colorBorderDefault: ColorService.LIGHT,
    colorBorderHover: ColorService.LIGHT,
    bgDisabled: ColorService.LIGHT,
    color: ColorService.GRAY2,
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
  text: string;
}

const FavoriteIconStyled = styled(FavoriteIcon)`
  margin: 0 14px 0 0;
  path {
  }
`;

export const FavoriteButton = ({ text, disabled, onClick }: IButton) => {
  const selectedTheme = getTheme();

  return (
    <ButtonStyled onClick={onClick} disabled={disabled} {...selectedTheme}>
      <FavoriteIconStyled />
      {text}
    </ButtonStyled>
  );
};

const ButtonStyled = styled.button<IButtonStyled>`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  font-family: ${getFontFamily()};

  padding: 17px 32px;
  border-radius: 2px;
  display: flex;
  align-items: center;
  background: ${({ bgDefault }) => bgDefault};
  border: ${({ colorBorderDefault }) => `1px solid  ${colorBorderDefault}`};
  color: ${({ color }) => color};
  svg path {
    fill: ${({ color }) => color};
  }
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
