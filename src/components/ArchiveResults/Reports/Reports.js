import React from 'react';
import moment from 'moment';
import Report from './Report/Report';
import { ReportsTable } from './StyledReports';
import ReportHeader from '../ArchiveResultsHeader/ArchiveResultsHeader';
import SearchBar from '../../SearchBar/SearchBar';

const Reports = ({ reportsArray }) => {
  const mappedReportsArray = reportsArray.data.map((result) => ({
    key: result._id,
    id: result.nr,
    date: moment(result.createdAt).format('YYYY-MM-DD hh:mm'),
    configuration: result.configuration,
    fullName: result.workers[0]?.fullName,
    office: result.workers[0]?.position === 'ENGINEER' ? 'INŻYNIER' : 'TECHNIK',
  }));
  const mappedReportsElements = mappedReportsArray.map((report) => <Report {...report} />);

  return (
    <>
      <SearchBar label={'WYSZUKAJ'} placeholder={'Wpisz wyszukiwaną frazę'} />
      <ReportsTable>
        <ReportHeader />
        <tbody>{mappedReportsElements}</tbody>
      </ReportsTable>
    </>
  );
};

export default Reports;
