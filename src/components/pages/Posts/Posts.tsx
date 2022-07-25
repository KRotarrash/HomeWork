import { url } from 'inspector';
import { ReactNode, ChangeEvent, useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styled from 'styled-components';
import { URL } from 'url';
import { Input } from '../../atoms/Input/Input';
import { Tabs } from '../../atoms/Tabs';
import { MainPost } from '../../molecules/Post/MainPost';
import {
  showPosts,
  getPostsAsync,
  removePosts,
  toggleFavorite,
  selectedPost,
} from '../../../core/slices/postsSlice';
import Modal from '../../atoms/Modal/Modal';
import { Button } from '../../atoms/Buttons/Button';

interface IPost {
  author: number;
  date: string;
  id: number;
  image: string;
  lesson_num: number;
  text: string;
  title: string;
}

interface IPostsInfo {
  count: number;
  next: string | null;
  previous: string | null;
  results: IPost[];
}

export const PostsPage = () => {
  const postsStore = useSelector(showPosts);
  console.log({ postsStore });
  const dispatch = useDispatch();

  const firstPosts = postsStore?.results.slice(0, 1);
  const mediumPosts = postsStore?.results.slice(1, 5);
  const smallPosts = postsStore?.results.slice(5, 11);
  const [searchValue, setSearchValue] = useState<string>('');
  const [orderingValue, setOrderingValue] = useState<string>('');

  const onBlur = () => {};
  const onChange = (event: ChangeEvent<HTMLInputElement>, field: string) => {
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    dispatch(getPostsAsync(searchValue, orderingValue) as any);
  }, [searchValue, orderingValue, dispatch]);

  const searchInput = {
    value: searchValue,
    error: '',
    type: 'text' as 'text',
    labelText: 'Search',
    placeholder: 'Placeholder',
    disabled: false,
  };

  const [show, setShow] = useState(false);
  const [imageModalSrc, setImageModalSrc] = useState('');

  const imageOnClick = () => {
    let selectedStore = postsStore?.results.find((x) => x.isSelected);
    setImageModalSrc(selectedStore?.image ?? '');
    setShow(true);
  };

  return (
    <>
      <Tabs
        list={[
          { title: 'All', url: 'all' },
          { title: 'My favorites', url: 'favorites' },
          { title: 'Popular', url: 'popular' },
        ]}
        activeTabUrl="all"></Tabs>
      <ContentBox>
        <Modal show={show} onClose={() => setShow(false)}>
          <ImageModal src={imageModalSrc} />
        </Modal>
        {/* <Button text="Show modal" onClick={() => setShow(true)} theme="primary"></Button> */}
      </ContentBox>
      <ContentBox>
        <Input
          {...searchInput}
          onChange={(event) => onChange(event, 'searchValue')}
          onBlur={onBlur}
        />
      </ContentBox>
      <ContentWrapper>
        <ContentLeftWrapper>
          {firstPosts?.map(({ date, title, id, text, image }) => (
            <MainPost
              imageOnClick={() => imageOnClick()}
              key={id}
              size="large"
              imgUri={image}
              date={new Date(date)}
              id={id}
              text={text}
              title={title}></MainPost>
          ))}
          <ContentLefMediumBoxWrapper>
            {mediumPosts?.map(({ date, title, id, text, image }) => (
              <MainPost
                imageOnClick={() => imageOnClick()}
                key={id}
                size="medium"
                imgUri={image}
                date={new Date(date)}
                id={id}
                text={text}
                title={title}></MainPost>
            ))}
          </ContentLefMediumBoxWrapper>
        </ContentLeftWrapper>
        <ContentRightWrapper>
          {smallPosts?.map(({ date, title, id, text, image }) => (
            <MainPost
              imageOnClick={() => imageOnClick()}
              key={id}
              size="small"
              imgUri={image}
              date={new Date(date)}
              id={id}
              text={text}
              title={title}></MainPost>
          ))}
        </ContentRightWrapper>
      </ContentWrapper>
    </>
  );
};

const ContentWrapper = styled.div`
  padding: 64px 0;
  display: flex;
  justify-content: space-between;
`;

const ContentLeftWrapper = styled.div`
  width: 736px;
  margin: 0 32px 20px 0;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
`;

const ContentLefMediumBoxWrapper = styled.div`
  width: 736px;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;

  div:nth-child(odd) {
    margin-right: 30px;
  }
`;

const ContentRightWrapper = styled.div`
  width: 354px;
  margin-bottom: 0 0 20px 0;
`;

const ContentBox = styled.div`
  margin: 64px 0 20px 0;
`;

const ImageModal = styled.img`
  max-height: 350px;
  max-width: 700px;
`;
