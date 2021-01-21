import React from 'react';
import { Route } from 'react-router';
import Archive from '../../Pages/Archive/Archive';
import NewExchangeReport from '../../Pages/NewExchangeReport/NewExchangeReport';
import NewReport from '../../Pages/NewReport/NewReport';
import ReportView from '../ArchiveResults/Reports/Report/ReportView';
import ReportEdit from '../ArchiveResults/Reports/Report/ReportEdit';
import ReportRemove from '../ArchiveResults/Reports/Report/ReportRemove';
import Logout from '../Logout/Logout';
import ExchangeReportEdit from '../ArchiveResults/ExchangeReports/ExchangeReport/ExchangeReportEdit';
import ExchangeReportDelete from '../ArchiveResults/ExchangeReports/ExchangeReport/ExchangeReportDelete';

const AuthRoutes = () => {
  return (
    <>
      <Route path={'/new-report'} component={NewReport} />
      <Route path={'/new-exchange-report'} component={NewExchangeReport} />
      <Route path={'/report'} component={ReportView} />
      <Route path={'/report-edit'} component={ReportEdit} />
      <Route path={'/report-remove'} component={ReportRemove} />
      <Route path={'/archive'} component={Archive} />
      <Route path={'/exchange-report-edit'} component={ExchangeReportEdit} />
      <Route path={'/exchange-report-delete'} component={ExchangeReportDelete} />
      <Route path={'/logout'} render={() => <Logout />} />
    </>
  );
};

export default AuthRoutes;
