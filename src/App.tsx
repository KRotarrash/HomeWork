import React, { ChangeEvent, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
// import styled from 'styled-components';

// import { Button } from './components/atoms/Button';
// import { ReactComponent as FavoriteIcon } from './assets/icons/favoritesIcon.svg';
// import { ColorService } from './services/ColorService';
import { Input } from './components/atoms/Input';
import { RegistrationPage } from './components/pages/Registration';
import { FormTemplate } from './components/templates/FormTemplate/FormTemplate';
import { PostsPage } from './components/pages/Posts/Posts';
// import { Header } from './components/molecules/Header/Header;
import { PostPage } from './components/pages/Post/Post';
import { ContentTemplate } from './components/templates/FormTemplate/ContentTemplate';

function App() {
  const onChange = async (event: ChangeEvent<HTMLInputElement>, field: string) => {
    console.log({ event, field });
    setName(event.target.value);
  };

  const [name, setName] = useState('');

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="posts"
            element={
              // <div></div>
              <ContentTemplate title="Blog">
                <PostsPage />
              </ContentTemplate>
            }>
            {/* <Route
              path=":postID"
              element={
                // <div></div>
                <FormTemplate title="text">
                  <PostPage />
                </FormTemplate>
              }></Route> */}
          </Route>
          <Route
            path="/posts/:postID"
            element={
              // <div></div>
              <FormTemplate title="Post">
                <PostPage />
              </FormTemplate>
            }></Route>
          <Route
            path="/"
            element={
              <FormTemplate title="text2">
                <RegistrationPage />
              </FormTemplate>
            }>
            {/* <Route
              path="/posts"
              element={
                // <div></div>
                <FormTemplate title="text">
                  <PostsPage />
                </FormTemplate>
              }
            /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

// const FavoriteIconStyled = styled(FavoriteIcon)`
//   path {
//     fill: ${ColorService.SECONDARY};
//   }
// `;

// fetch('https://studapi.teachmeskills.by/blog/posts/?limit=20')
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });

export default App;
