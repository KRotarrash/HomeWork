import { ReactNode, ChangeEvent, useState, useEffect } from 'react';
import { useSearchParams, useParams, useLocation } from 'react-router-dom';

import styled from 'styled-components';
import { FavoriteButton } from '../../atoms/Buttons/Favorite';
import { LikeButton } from '../../atoms/Buttons/Like';
import { Title } from '../../templates/FormTemplate/Title';
import { ColorService } from '../../../services/ColorService';

interface IPost {
  author: number;
  date: string;
  id: number;
  image: string;
  lesson_num: number;
  text: string;
  title: string;
}

export const PostPage = () => {
  // const [sendedUser, setSendedUser] = useState(false);

  const [post, setPost] = useState<IPost>();

  const params = useParams();

  useEffect(() => {
    const id = params?.postID;
    if (id) {
      fetch(`https://studapi.teachmeskills.by/blog/posts/${id}`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          setPost(data);
        });
    }
  }, [params?.postID]);

  return (
    <>
      <ContentMain>
        <Title title={post?.title ?? ''} />
        <ContentContainer>
          <ImageStyled src={post?.image ?? ''} />
          <TextContainer>{post?.text ?? ''}</TextContainer>
        </ContentContainer>
        <ContentFooter>
          <FlexContainer>
            <LikeButton
              type="like"
              key={post?.id}
              onClick={() => console.log('like click')}></LikeButton>
            <DislikeButtonContainer>
              <LikeButton
                type="dislike"
                key={post?.id}
                onClick={() => console.log('dislike click')}></LikeButton>
            </DislikeButtonContainer>
          </FlexContainer>
          <FlexContainer>
            <FavoriteButton
              text="Add favorites"
              onClick={() => console.log('favorite click')}></FavoriteButton>
          </FlexContainer>
        </ContentFooter>
      </ContentMain>
    </>
  );
};

const InputWrapper = styled.div`
  margin-bottom: 20px;
`;

const ContentMain = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const ContentContainer = styled.div`
  margin: 48px 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ImageStyled = styled.img`
  display: flex;
  align-items: center;
  width: 992px;
  height: 518px;
`;

const TextContainer = styled.span`
  width: 920px;
  margin: 48px 0 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContentFooter = styled.div`
  padding: 48px 0 72px 0;
  width: 920px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${ColorService.MEDIUM};
`;

const FlexContainer = styled.div`
  display: flex;
`;

const DislikeButtonContainer = styled.div`
  margin: 0 0 0 6px;
`;
