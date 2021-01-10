import React from 'react';

import { MainHeader } from '../../components/UI/Headers/Headers';
import NewObjectForm from './NewObjectForm/NewObjectForm';

const NewObject = () => {
  return (
    <>
      <MainHeader>Formularz dodawania obiektu</MainHeader>
      <NewObjectForm />
    </>
  );
};

export default NewObject;
