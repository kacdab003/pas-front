import React from 'react';
import { IconButton } from '../../../IconButton/IconButton';
import { ReportContainer, ReportElement } from './StyledReport';

import openIcon from '../../../../assets/icons/open.svg';
import editIcon from '../../../../assets/icons/edit.png';
import deleteIcon from '../../../../assets/icons/delete.png';

const Report = ({ id, date, configuration, fullName, office, openHandler, editHandler, deleteHandler }) => {
  return (
    <>
      <ReportContainer>
        <ReportElement>{id}</ReportElement>
        <ReportElement>{date}</ReportElement>
        <ReportElement>{configuration}</ReportElement>
        <ReportElement>{fullName}</ReportElement>
        <ReportElement>{office}</ReportElement>
        <ReportElement>
          <IconButton src={openIcon} onClick={openHandler} />
        </ReportElement>
        <ReportElement>
          <IconButton src={editIcon} onClick={editHandler} />
        </ReportElement>
        <ReportElement>
          <IconButton src={deleteIcon} onClick={deleteHandler} />
        </ReportElement>
      </ReportContainer>
    </>
  );
};

export default Report;
