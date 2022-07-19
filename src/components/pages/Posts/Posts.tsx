import { url } from 'inspector';
import { ReactNode, ChangeEvent, useState, useEffect } from 'react';

import styled from 'styled-components';
import { URL } from 'url';
import { Tabs } from '../../atoms/Tabs';
import { MainPost } from '../../molecules/Post/MainPost';

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
  // const [sendedUser, setSendedUser] = useState(false);

  const [posts, setPosts] = useState<IPostsInfo>();

  useEffect(() => {
    console.log('useEffect');
    fetch('https://studapi.teachmeskills.by/blog/posts/?limit=20')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setPosts(data);
      });
  }, []);

  const firstPosts = getPosts(0, 1);
  const mediumPosts = getPosts(1, 4);
  const smallPosts = getPosts(5, 6);

  function getPosts(from: number, count: number) {
    let models = posts?.results;
    let max = from + count - 1;

    var results = models?.reduce((accumulator, item, index, array) => {
      if (index >= from && index <= max) {
        accumulator.push(item);
        return accumulator;
      }
      return accumulator;
    }, new Array());

    return results;
  }

  return (
    <>
      <Tabs
        list={[
          { title: 'All', url: 'all' },
          { title: 'My favorites', url: 'favorites' },
          { title: 'Popular', url: 'popular' },
        ]}
        activeTabUrl="all"></Tabs>
      <ContentWrapper>
        <ContentLeftWrapper>
          {firstPosts?.map(({ date, title, id, text, image }) => (
            <MainPost
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

const List = styled.ul``;

const Li = styled.li``;

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

{
  /* <List>
        {posts?.results?.map(({ date, title, id }) => (
          <Li key={id}>
            {date} - {title}
          </Li>
        ))}
      </List> */
}

{
  /* <ContentWrapper>
        <ContentLeftWrapper>
          <MainPost
            size="large"
            imgUri={'https://tms-studapi-dev.s3.amazonaws.com/media/about03.png'}
            date={new Date()}
            id={1}
            text="Ius dicat feugiat no, vix cu modo dicat principes. An nam instructior, commodo mediocrem id cum. Nec labore cetero theophrastus no, ei vero facer veritus nec. Ius dicat feugiat no, vix cu modo dicat principes. An nam debet instructior, commodo mediocrem id cum. Mandamus abhorreant deseruisse mea at, mea elit deserunt persequeris at, in putant fuisset honestatis qui."
            title="Ius dicat feugiat no, vix cu modo dicat principes. An nam instructior, commodo mediocrem id cum. Nec labore cetero theophrastus no, ei vero facer veritus nec. Ius dicat feugiat no, vix cu modo dicat principes. An nam debet instructior, commodo mediocrem id cum. Mandamus abhorreant deseruisse mea at, mea elit deserunt persequeris at, in putant fuisset honestatis qui."></MainPost>
          <ContentLefMediumBoxWrapper>
            <MainPost
              size="medium"
              imgUri={'https://tms-studapi-dev.s3.amazonaws.com/media/about03.png'}
              date={new Date()}
              id={1}
              text="Ius dicat feugiat no, vix cu modo dicat principes. An nam instructior, commodo mediocrem id cum. Nec labore cetero theophrastus no, ei vero facer veritus nec. Ius dicat feugiat no, vix cu modo dicat principes. An nam debet instructior, commodo mediocrem id cum. Mandamus abhorreant deseruisse mea at, mea elit deserunt persequeris at, in putant fuisset honestatis qui."
              title="Ius dicat feugiat no, vix cu modo dicat principes. An nam instructior, commodo mediocrem id cum. Nec labore cetero theophrastus no, ei vero facer veritus nec. Ius dicat feugiat no, vix cu modo dicat principes. An nam debet instructior, commodo mediocrem id cum. Mandamus abhorreant deseruisse mea at, mea elit deserunt persequeris at, in putant fuisset honestatis qui."></MainPost>

            <MainPost
              size="medium"
              imgUri={'https://tms-studapi-dev.s3.amazonaws.com/media/about03.png'}
              date={new Date()}
              id={1}
              text="Ius dicat feugiat no, vix cu modo dicat principes. An nam instructior, commodo mediocrem id cum. Nec labore cetero theophrastus no, ei vero facer veritus nec. Ius dicat feugiat no, vix cu modo dicat principes. An nam debet instructior, commodo mediocrem id cum. Mandamus abhorreant deseruisse mea at, mea elit deserunt persequeris at, in putant fuisset honestatis qui."
              title="Ius dicat feugiat no, vix cu modo dicat principes. An nam instructior, commodo mediocrem id cum. Nec labore cetero theophrastus no, ei vero facer veritus nec. Ius dicat feugiat no, vix cu modo dicat principes. An nam debet instructior, commodo mediocrem id cum. Mandamus abhorreant deseruisse mea at, mea elit deserunt persequeris at, in putant fuisset honestatis qui."></MainPost>

            <MainPost
              size="medium"
              imgUri={'https://tms-studapi-dev.s3.amazonaws.com/media/about03.png'}
              date={new Date()}
              id={1}
              text="Ius dicat feugiat no, vix cu modo dicat principes. An nam instructior, commodo mediocrem id cum. Nec labore cetero theophrastus no, ei vero facer veritus nec. Ius dicat feugiat no, vix cu modo dicat principes. An nam debet instructior, commodo mediocrem id cum. Mandamus abhorreant deseruisse mea at, mea elit deserunt persequeris at, in putant fuisset honestatis qui."
              title="Ius dicat feugiat no, vix cu modo dicat principes. An nam instructior, commodo mediocrem id cum. Nec labore cetero theophrastus no, ei vero facer veritus nec. Ius dicat feugiat no, vix cu modo dicat principes. An nam debet instructior, commodo mediocrem id cum. Mandamus abhorreant deseruisse mea at, mea elit deserunt persequeris at, in putant fuisset honestatis qui."></MainPost>

            <MainPost
              size="medium"
              imgUri={'https://tms-studapi-dev.s3.amazonaws.com/media/about03.png'}
              date={new Date()}
              id={1}
              text="Ius dicat feugiat no, vix cu modo dicat principes. An nam instructior, commodo mediocrem id cum. Nec labore cetero theophrastus no, ei vero facer veritus nec. Ius dicat feugiat no, vix cu modo dicat principes. An nam debet instructior, commodo mediocrem id cum. Mandamus abhorreant deseruisse mea at, mea elit deserunt persequeris at, in putant fuisset honestatis qui."
              title="Ius dicat feugiat no, vix cu modo dicat principes. An nam instructior, commodo mediocrem id cum. Nec labore cetero theophrastus no, ei vero facer veritus nec. Ius dicat feugiat no, vix cu modo dicat principes. An nam debet instructior, commodo mediocrem id cum. Mandamus abhorreant deseruisse mea at, mea elit deserunt persequeris at, in putant fuisset honestatis qui."></MainPost>
          </ContentLefMediumBoxWrapper>
        </ContentLeftWrapper>
        <ContentRightWrapper>
          <MainPost
            size="small"
            imgUri={'https://tms-studapi-dev.s3.amazonaws.com/media/about03.png'}
            date={new Date()}
            id={1}
            text="Ius dicat feugiat no, vix cu modo dicat principes. An nam instructior, commodo mediocrem id cum. Nec labore cetero theophrastus no, ei vero facer veritus nec. Ius dicat feugiat no, vix cu modo dicat principes. An nam debet instructior, commodo mediocrem id cum. Mandamus abhorreant deseruisse mea at, mea elit deserunt persequeris at, in putant fuisset honestatis qui."
            title="Ius dicat feugiat no, vix cu modo dicat principes. An nam instructior, commodo mediocrem id cum. Nec labore cetero theophrastus no, ei vero facer veritus nec. Ius dicat feugiat no, vix cu modo dicat principes. An nam debet instructior, commodo mediocrem id cum. Mandamus abhorreant deseruisse mea at, mea elit deserunt persequeris at, in putant fuisset honestatis qui."></MainPost>
          <MainPost
            size="small"
            imgUri={'https://tms-studapi-dev.s3.amazonaws.com/media/about03.png'}
            date={new Date()}
            id={1}
            text="Ius dicat feugiat no, vix cu modo dicat principes. An nam instructior, commodo mediocrem id cum. Nec labore cetero theophrastus no, ei vero facer veritus nec. Ius dicat feugiat no, vix cu modo dicat principes. An nam debet instructior, commodo mediocrem id cum. Mandamus abhorreant deseruisse mea at, mea elit deserunt persequeris at, in putant fuisset honestatis qui."
            title="Ius dicat feugiat no, vix cu modo dicat principes. An nam instructior, commodo mediocrem id cum. Nec labore cetero theophrastus no, ei vero facer veritus nec. Ius dicat feugiat no, vix cu modo dicat principes. An nam debet instructior, commodo mediocrem id cum. Mandamus abhorreant deseruisse mea at, mea elit deserunt persequeris at, in putant fuisset honestatis qui."></MainPost>
          <MainPost
            size="small"
            imgUri={'https://tms-studapi-dev.s3.amazonaws.com/media/about03.png'}
            date={new Date()}
            id={1}
            text="Ius dicat feugiat no, vix cu modo dicat principes. An nam instructior, commodo mediocrem id cum. Nec labore cetero theophrastus no, ei vero facer veritus nec. Ius dicat feugiat no, vix cu modo dicat principes. An nam debet instructior, commodo mediocrem id cum. Mandamus abhorreant deseruisse mea at, mea elit deserunt persequeris at, in putant fuisset honestatis qui."
            title="Ius dicat feugiat no, vix cu modo dicat principes. An nam instructior, commodo mediocrem id cum. Nec labore cetero theophrastus no, ei vero facer veritus nec. Ius dicat feugiat no, vix cu modo dicat principes. An nam debet instructior, commodo mediocrem id cum. Mandamus abhorreant deseruisse mea at, mea elit deserunt persequeris at, in putant fuisset honestatis qui."></MainPost>
          <MainPost
            size="small"
            imgUri={'https://tms-studapi-dev.s3.amazonaws.com/media/about03.png'}
            date={new Date()}
            id={1}
            text="Ius dicat feugiat no, vix cu modo dicat principes. An nam instructior, commodo mediocrem id cum. Nec labore cetero theophrastus no, ei vero facer veritus nec. Ius dicat feugiat no, vix cu modo dicat principes. An nam debet instructior, commodo mediocrem id cum. Mandamus abhorreant deseruisse mea at, mea elit deserunt persequeris at, in putant fuisset honestatis qui."
            title="Ius dicat feugiat no, vix cu modo dicat principes. An nam instructior, commodo mediocrem id cum. Nec labore cetero theophrastus no, ei vero facer veritus nec. Ius dicat feugiat no, vix cu modo dicat principes. An nam debet instructior, commodo mediocrem id cum. Mandamus abhorreant deseruisse mea at, mea elit deserunt persequeris at, in putant fuisset honestatis qui."></MainPost>
          <MainPost
            size="small"
            imgUri={'https://tms-studapi-dev.s3.amazonaws.com/media/about03.png'}
            date={new Date()}
            id={1}
            text="Ius dicat feugiat no, vix cu modo dicat principes. An nam instructior, commodo mediocrem id cum. Nec labore cetero theophrastus no, ei vero facer veritus nec. Ius dicat feugiat no, vix cu modo dicat principes. An nam debet instructior, commodo mediocrem id cum. Mandamus abhorreant deseruisse mea at, mea elit deserunt persequeris at, in putant fuisset honestatis qui."
            title="Ius dicat feugiat no, vix cu modo dicat principes. An nam instructior, commodo mediocrem id cum. Nec labore cetero theophrastus no, ei vero facer veritus nec. Ius dicat feugiat no, vix cu modo dicat principes. An nam debet instructior, commodo mediocrem id cum. Mandamus abhorreant deseruisse mea at, mea elit deserunt persequeris at, in putant fuisset honestatis qui."></MainPost>
          <MainPost
            size="small"
            imgUri={'https://tms-studapi-dev.s3.amazonaws.com/media/about03.png'}
            date={new Date()}
            id={1}
            text="Ius dicat feugiat no, vix cu modo dicat principes. An nam instructior, commodo mediocrem id cum. Nec labore cetero theophrastus no, ei vero facer veritus nec. Ius dicat feugiat no, vix cu modo dicat principes. An nam debet instructior, commodo mediocrem id cum. Mandamus abhorreant deseruisse mea at, mea elit deserunt persequeris at, in putant fuisset honestatis qui."
            title="Ius dicat feugiat no, vix cu modo dicat principes. An nam instructior, commodo mediocrem id cum. Nec labore cetero theophrastus no, ei vero facer veritus nec. Ius dicat feugiat no, vix cu modo dicat principes. An nam debet instructior, commodo mediocrem id cum. Mandamus abhorreant deseruisse mea at, mea elit deserunt persequeris at, in putant fuisset honestatis qui."></MainPost>
        </ContentRightWrapper>
      </ContentWrapper> */
}
