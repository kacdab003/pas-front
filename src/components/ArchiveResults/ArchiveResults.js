import React from 'react';
import CenteredLoader from '../UI/CenteredLoader/CenteredLoader';
import { archiveEndpoints, exchangeReportEndpoints } from '../../shared/config/endpoints';
import Message from '../../components/Message/Message';
import { SecondaryHeader } from '../UI/Headers/Headers';
import useRequest, { REQUEST_METHODS } from '../../hooks/useRequest';
import ExchangeReports from './ExchangeReports/ExchangeReports';
import Reports from './Reports/Reports';

const ArchiveResults = () => {
  const [exchangeReports, exchangeReportsError, exchangeReportsLoading] = useRequest(
    exchangeReportEndpoints.get,
    null,
    REQUEST_METHODS.GET
  );
  const [reports, reportsError, reportsLoading] = useRequest(archiveEndpoints.get, null, REQUEST_METHODS.GET);

  if (reportsError || exchangeReportsError) {
    return <Message message={'Błąd wczytywania danych!'} messageType={'ERROR'} />;
  }

  if (reportsLoading || exchangeReportsLoading) {
    return <CenteredLoader />;
  }
  console.log(reports);
  return (
    <>
      <SecondaryHeader>Raporty</SecondaryHeader>
      <Reports reportsArray={reports} />
      <SecondaryHeader>Raporty wymiany</SecondaryHeader>
      <ExchangeReports exchangeReportsArray={exchangeReports} />
    </>
  );
};

export default ArchiveResults;
