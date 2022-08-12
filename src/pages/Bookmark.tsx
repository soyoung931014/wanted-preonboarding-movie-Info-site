import React from 'react';
import { getMovieInBookmark } from 'src/api/movieApi';
import styled from 'styled-components';
import PostList from '../components/post/PostList';

const Bookmark = () => {
  const bookmark = getMovieInBookmark();
  const { data } = bookmark;

  return (
    <>
      <Container>
        {data === null ? (
          <div>즐겨찾기 내용이 없습니다.</div>
        ) : (
          <PostList movieList={data} />
        )}
      </Container>
    </>
  );
};

export default Bookmark;

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 100px;
  @media ${({ theme }) => theme.deviceSize.max.mobile} {
    position: relative;
    right: 17px;
  }
`;
