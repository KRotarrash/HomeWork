import styled from 'styled-components';
import { Url } from 'url';
import { ColorService, getFontFamily } from '../../../../services';
import { LikeButton } from '../../../atoms/Buttons/Like';

import { ReactComponent as LikeIcon } from './../../../../assets/icons/like.svg';
import { ReactComponent as DislikeIcon } from './../../../../assets/icons/dislike.svg';
import { ReactComponent as FavoriteIcon } from './../../../../assets/icons/favoritesIcon.svg';
import { ReactComponent as EllipsisIcon } from './../../../../assets/icons/ellipsis.svg';
import { Link } from '../../../atoms/Link/Link';

interface IMainPost {
  id: number;
  imgUri: string;
  text: string;
  date: Date;
  title: string;
  size: 'large' | 'medium' | 'small';
}

function getDateWithFormat(date: Date) {
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

export const MainPost = ({ id, imgUri, text, date, title, size }: IMainPost) => {
  if (size == 'large') {
    return (
      <MainPostStyled size={size}>
        <ContentMain>
          <ContentLeft size={size}>
            <DateStyled size={size}>{getDateWithFormat(date)}</DateStyled>
            <HeaderStyled href={'/posts/' + id} size={size}>
              {title}
            </HeaderStyled>
            <TextStyled size={size}>{text}</TextStyled>
          </ContentLeft>
          <ContentRight>
            <ImageStyled size={size} src={imgUri}></ImageStyled>
          </ContentRight>
        </ContentMain>
        <ContentFooter size={size}>
          <FlexContainer>
            <LikeIconStyled></LikeIconStyled>
            <LikeNumber>20</LikeNumber>
            <DislikeIconStyled></DislikeIconStyled>
          </FlexContainer>
          <FlexContainer>
            <FavoriteIconStyled />
            <EllipsisIconStyled />
          </FlexContainer>
        </ContentFooter>
      </MainPostStyled>
    );
  }

  if (size == 'small') {
    return (
      <MainPostStyled size={size}>
        <ContentMain>
          <ContentLeft size={size}>
            <DateStyled size={size}>{getDateWithFormat(date)}</DateStyled>
            {/* <Link text={title} url={'/posts/' + id} disabled={false}></Link> */}
            <HeaderStyled href={'/posts/' + id} size={size}>
              {title}
            </HeaderStyled>
          </ContentLeft>
          <ContentRight>
            <ImageStyled size={size} src={imgUri}></ImageStyled>
          </ContentRight>
        </ContentMain>
        <ContentFooter size={size}>
          <FlexContainer>
            <LikeIconStyled></LikeIconStyled>
            <LikeNumber>20</LikeNumber>
            <DislikeIconStyled></DislikeIconStyled>
          </FlexContainer>
          <FlexContainer>
            <FavoriteIconStyled></FavoriteIconStyled>
            <EllipsisIconStyled></EllipsisIconStyled>
          </FlexContainer>
        </ContentFooter>
      </MainPostStyled>
    );
  }

  return (
    <MainPostStyled size={size}>
      <ContentMain>
        <ContentLeft size={size}>
          <ImageStyled size={size} src={imgUri}></ImageStyled>
          <DateStyled size={size}>{getDateWithFormat(date)}</DateStyled>
          <HeaderStyled href={'/posts/' + id} size={size}>
            {title}
          </HeaderStyled>
        </ContentLeft>
      </ContentMain>
      <ContentFooter size={size}>
        <FlexContainer>
          <LikeIconStyled></LikeIconStyled>
          <LikeNumber>20</LikeNumber>
          <DislikeIconStyled></DislikeIconStyled>
        </FlexContainer>
        <FlexContainer>
          <FavoriteIconStyled></FavoriteIconStyled>
          <EllipsisIconStyled></EllipsisIconStyled>
        </FlexContainer>
      </ContentFooter>
    </MainPostStyled>
  );
};

const ImageStyled = styled.img<{ size: 'large' | 'medium' | 'small' }>`
  width: ${({ size }) =>
    size == 'large' ? '256px' : size == 'medium' ? '352px' : size == 'small' ? '96px' : '0px'};
  height: ${({ size }) => (size == 'large' || size == 'medium' ? '244px' : '96px')};
  margin: ${({ size }) => (size == 'large' || size == 'small' ? '0 0 0 0' : '0 0 24px 0')};
`;

const LikeIconStyled = styled(LikeIcon)`
  margin: 0 8px 0 0;
`;

const LikeNumber = styled.span`
  font-size: 16px;
  color: ${ColorService.SECONDARY};
  font-family: ${getFontFamily('bold')};
  margin: 0 25px 0 0;
`;

const DislikeIconStyled = styled(DislikeIcon)``;

const FavoriteIconStyled = styled(FavoriteIcon)`
  margin: 0 30px 0 0;
`;

const EllipsisIconStyled = styled(EllipsisIcon)``;

const MainPostStyled = styled.div<{ size: 'large' | 'medium' | 'small' }>`
  height: ${({ size }) =>
    size == 'large' ? '464px' : size == 'medium' ? '464px' : size == 'small' ? '212px' : '0px'};
  width: ${({ size }) => (size == 'medium' ? '352px' : '100%')};
  border-bottom: 1px solid ${ColorService.MEDIUM};
  font-family: ${getFontFamily()};
  margin: ${({ size }) => (size == 'large' || size == 'small' ? '0 0 40px 0' : '0 0px 40px 0')};
`;

const DateStyled = styled.span<{ size: 'large' | 'medium' | 'small' }>`
  font-size: 16px;
  color: ${ColorService.GRAY};
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ContentMain = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ContentFooter = styled.div<{ size: 'large' | 'medium' | 'small' }>`
  margin: ${({ size }) =>
    size == 'large' ? '33px 0 0 0' : size == 'medium' ? '29px 0 0 0' : '21px 0 0 0'};
  display: flex;
  justify-content: space-between;
  svg path {
    fill: ${ColorService.GRAY2};
  }
`;

const ContentLeft = styled.div<{ size: 'large' | 'medium' | 'small' }>`
  width: ${({ size }) => (size == 'medium' ? '352px' : '448px')};
  margin-bottom: 20px;
`;

const ContentRight = styled.div`
  display: flex;
  justify-content: end;
  align-items: flex-start;
  width: 256px;
  margin-bottom: 20px;
  display: flex;
`;

const HeaderStyled = styled.a<{ size: 'large' | 'medium' | 'small' }>`
  margin: 8px 0 0 0;
  color: ${ColorService.SECONDARY};
  display: -webkit-box;
  -webkit-line-clamp: ${({ size }) => (size == 'large' || size == 'small' ? '3' : '2')};
  -webkit-box-orient: vertical;
  overflow: hidden;

  font-family: ${getFontFamily()};
  font-style: normal;
  font-size: ${({ size }) => (size == 'large' ? '32px' : '18px')};
  font-weight: ${({ size }) => (size == 'large' ? '700' : '600')};
  line-height: ${({ size }) => (size == 'large' ? '44px' : '28px')};
`;

const TextStyled = styled.p<{ size: 'large' | 'medium' | 'small' }>`
  display: -webkit-box;
  margin: 24px 0 0 0;
  color: ${ColorService.GRAY};
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  overflow: hidden;

  font-family: ${getFontFamily()};
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
`;
