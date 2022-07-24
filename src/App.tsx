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
import { FavoritesPage } from './components/pages/Favorites/Favorites';

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
            }></Route>
          <Route
            path="/posts/:postID"
            element={
              // <div></div>
              <ContentTemplate title="">
                <PostPage />
              </ContentTemplate>
            }></Route>
          <Route
            path="/"
            element={
              <FormTemplate title="text2">
                <RegistrationPage />
              </FormTemplate>
            }></Route>
          <Route
            path="/favorites"
            element={
              // <div></div>
              <FormTemplate title="favorites">
                <FavoritesPage />
              </FormTemplate>
            }></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
