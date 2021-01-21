import React, { useState } from 'react';
import moment from 'moment';
import Report from './Report/Report';
import { ReportsTable } from './StyledReports';
import ReportHeader from '../ArchiveResultsHeader/ArchiveResultsHeader';
import SearchBar from '../../SearchBar/SearchBar';
import Message from '../../Message/Message';
import { ErrorResults } from '../StyledArchiveResults';
import { archiveEndpoints } from '../../../shared/config/endpoints';
import axios from '../../../axios';
import { useHistory } from 'react-router';

const Reports = ({ reportsArray }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const history = useHistory();

  const reportsArrayData = reportsArray.data;

  let mappedReportsElements = reportsArrayData.map((result) => ({
    key: result._id,
    id: result.nr,
    date: moment(result.createdAt).format('YYYY-MM-DD hh:mm'),
    configuration: result.configuration,
    fullName: result.workers[0]?.fullName,
    office: result.workers[0]?.position === 'ENGINEER' ? 'INŻYNIER' : 'TECHNIK',
  }));

  if (searchQuery) {
    mappedReportsElements = mappedReportsElements.filter((report) => {
      const isSearchResult =
        report?.key?.toString?.().includes?.(searchQuery) ||
        report?.date?.toString?.().includes?.(searchQuery) ||
        report?.configuration?.toString?.().includes?.(searchQuery) ||
        report?.fullName?.toString?.().includes?.(searchQuery) ||
        report?.office?.toString?.().includes?.(searchQuery);
      return isSearchResult;
    });
  }

  const openReportHandler = async (reportId) => {
    history.push({
      pathname: '/report',
      state: reportId,
    });
  };

  const editReportHandler = async (reportId) => {
    history.push({
      pathname: '/report-edit',
      state: reportId,
    });
  };

  const deleteReportHandler = async (reportId) => {
    history.push({
      pathname: '/report-remove',
      state: reportId,
    });
  };

  const reportsToRender = mappedReportsElements.map((report) => (
    <Report
      {...report}
      openHandler={() => openReportHandler(report.key)}
      editHandler={() => editReportHandler(report.key)}
      deleteHandler={() => deleteReportHandler(report.key)}
    />
  ));

  let results =
    reportsToRender.length === 0 ? (
      <ErrorResults>
        <Message messageType={'ERROR'} message={'Brak wyników'} />
      </ErrorResults>
    ) : (
      <ReportsTable>
        <ReportHeader />
        <tbody>{reportsToRender}</tbody>
      </ReportsTable>
    );

  return (
    <>
      <SearchBar
        value={searchQuery}
        setValue={(event) => setSearchQuery(event.target.value)}
        label={'WYSZUKAJ'}
        placeholder={'Wpisz wyszukiwaną frazę'}
      />
      {results}
    </>
  );
};

export default Reports;
