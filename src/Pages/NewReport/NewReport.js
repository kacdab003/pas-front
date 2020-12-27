import React from 'react';
import { MainHeader } from '../../components/UI/Headers/Headers';

import NewReportForm from './NewReportForm/NewReportForm';

const NewReport = () => {
  return (
    <div>
      <MainHeader>Nowy Raport</MainHeader>
      <NewReportForm />
    </div>
  );
};

export default NewReport;
