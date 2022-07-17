// import { ReactNode } from 'react';
import styled from 'styled-components';

import { ColorService } from '../../../../services/ColorService';
import { ReactComponent as LikeIcon } from './../../../../assets/icons/like.svg';
import { ReactComponent as DislikeIcon } from './../../../../assets/icons/dislike.svg';

const getTheme = (type: string): IButtonStyled => {
  if (type == 'like') {
    return {
      bgDefault: ColorService.LIGHT,
      bgHover: ColorService.PRIMARY2,
      colorBorderDefault: ColorService.LIGHT,
      colorBorderHover: ColorService.LIGHT,
      bgDisabled: ColorService.LIGHT,
      color: ColorService.GRAY2,
      colorHover: ColorService.WHITE,
    };
  }

  return {
    bgDefault: ColorService.LIGHT,
    bgHover: ColorService.ERROR,
    colorBorderDefault: ColorService.LIGHT,
    colorBorderHover: ColorService.ERROR,
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
  type: 'like' | 'dislike';
}

const LikeIconStyled = styled(LikeIcon)`
  path {
  }
`;

const DislikeIconStyled = styled(DislikeIcon)`
  path {
  }
`;

export const LikeButton = ({ disabled, onClick, type }: IButton) => {
  const selectedTheme = getTheme(type);

  if (type == 'like') {
    return (
      <ButtonStyled onClick={onClick} disabled={disabled} {...selectedTheme}>
        <LikeIconStyled />
      </ButtonStyled>
    );
  }

  return (
    <ButtonStyled onClick={onClick} disabled={disabled} {...selectedTheme}>
      <DislikeIconStyled />
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
