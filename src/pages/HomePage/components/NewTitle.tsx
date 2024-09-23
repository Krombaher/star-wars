import React from 'react';
import { MainSelect } from './MainSelect';
import { MainInput } from './MainInput';

export const NewTitle = () => {
  return (
    <>
      <div>NewTitle</div>
      <MainInput />
      <p>this is new title</p>
      <MainSelect />
      <button>Click</button>
    </>
  );
};
