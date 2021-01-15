import React from 'react';
import { IconButton } from '../../../IconButton/IconButton';
import { ReportContainer, ReportElement } from './StyledReport';
import editIcon from '../../../../assets/icons/edit.png';

const Report = ({ id, date, configuration, fullName, office, editHandler }) => {
  return (
    <>
      <ReportContainer>
        <ReportElement>{id}</ReportElement>
        <ReportElement>{date}</ReportElement>
        <ReportElement>{configuration}</ReportElement>
        <ReportElement>{fullName}</ReportElement>
        <ReportElement>{office}</ReportElement>
        <ReportElement>
          <IconButton src={editIcon} />
        </ReportElement>
      </ReportContainer>
    </>
  );
};

export default Report;
