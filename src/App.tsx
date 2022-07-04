import React, { ChangeEvent } from 'react';
import './App.css';
import { ReactComponent as FavoriteIcon } from './assets/icons/favoritesIcon.svg';
import { ColorService } from './services/ColorService';
import { Button } from './components/atoms/Buttons/Button';
import { Input } from './components/atoms/Input';
import { Tabs } from './components/atoms/Tabs';
import styled from 'styled-components';

function App() {
  const onClick = () => {
    console.log('click');
  };

  // const users = [
  //   { id: 0, name: 'Lucas' },
  //   { id: 1, name: 'William' },
  // ];

  const tabs = [
    { title: 'All', url: '/all' },
    { title: 'My favorites', url: '/my' },
    { title: 'Popular', url: '/popular' },
  ];

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log({ event });
  };

  const inputValues = {
    value: 'Text',
    type: 'text' as 'text',
    error: '',
    labelText: 'User name',
    placeholder: 'Placeholder',
    disabled: false,
    // onChange,
  };

  return (
    <div className="App">
      <header className="App-header">
        <Tabs list={tabs} activeTabUrl={'/my'} />
        <Input onChange={onChange} {...inputValues} error={'Text error'} />
        <Input onChange={onChange} {...inputValues} disabled />
        <Input onChange={onChange} {...inputValues} value={''} />
        <Input onChange={onChange} {...inputValues} value={'password'} type={'password'} />
        <Button theme={'primary'} text="Button example" onClick={onClick} />
        <Button theme={'secondary'} text="Button example" onClick={onClick} />
        <Button theme={'primary'} text="Button example" onClick={onClick} disabled={true} />
        <Button theme={'delete'} text="Button example" onClick={onClick} />
        <Button
          theme={'icon'}
          text="Button example"
          onClick={onClick}
          icon={<FavoriteIconStyled />}
        />
      </header>
    </div>
  );
}

const FavoriteIconStyled = styled(FavoriteIcon)`
  path {
    fill: ${ColorService.SECONDARY};
  }
`;

export default App;
