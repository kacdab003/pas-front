import axios from '../../axios';
import React, { useEffect, useState } from 'react';
import CenteredLoader from '../UI/CenteredLoader/CenteredLoader';
import ArchiveResult from './ArchiveResult/ArchiveResult';
import ArchiveResultsHeader from './ArchiveResultsHeader/ArchiveResultsHeader';
import { ErrorResults, ResultsTable } from './StyledArchiveResults';
import moment from 'moment';
import { archiveEndpoints, exchangeReportEndpoints } from '../../shared/config/endpoints';
import Message from '../../components/Message/Message';
import ExchangeReportResult from './ArchiveResult/ExchangeReportResult';
import { SecondaryHeader } from '../UI/Headers/Headers';
import SearchBar from '../SearchBar/SearchBar';
import { FormSectionWrapper } from '../../Pages/NewReport/NewReportForm/StyledNewReportForm';
import newReportForms from '../../shared/config/forms/newReport';
import SeparateLine from '../UI/SeparateLine/SeparateLine';
import SubmitButton from '../SubmitButton/SubmitButton';
import { Formik, Form } from 'formik';
import generateFormikControlsFromConfig from '../../shared/config/forms/generateFormikControlsFromConfig';
import newReportValidationSchema from '../../shared/config/forms/newReportValidationSchema';

const ArchiveResults = () => {
  const [fetchedReports, setFetchedReports] = useState([]);
  const [fetchedExchangeReports, setFetchedExchangeReports] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [reportsSearchText, setReportsSearchText] = useState('');
  const [exchangeReportsSearchText, setExchangeReportsSearchText] = useState('');
  const [filteredReports, setFilteredReports] = useState(fetchedReports);
  const [filteredExchangeReports, setFilteredExchangeReports] = useState(fetchedExchangeReports);
  const [singleReportData, setSingleReportData] = useState({});
  const [singleReportView, setSingleReportView] = useState(false);
  const [isReportEditing, setIsReportEditing] = useState(false);

  const fetchArchiveResults = async () => {
    try {
      const [reports, { data: exchangeReportsData }] = await axios.all([
        axios.get(archiveEndpoints.get),
        axios.get(exchangeReportEndpoints.get),
      ]);

      const filteredResults = reports.data.map((result) => ({
        key: result._id,
        id: result.nr,
        date: moment(result.createdAt).format('YYYY-MM-DD hh:mm'),
        configuration: result.configuration,
        fullName: result.workers[0]?.fullName,
        office: result.workers[0]?.position === 'ENGINEER' ? 'INŻYNIER' : 'TECHNIK',
      }));

      setFetchedReports(filteredResults);
      setFilteredReports(filteredResults);
      setFetchedExchangeReports(exchangeReportsData);
      setFilteredExchangeReports(exchangeReportsData);

      setIsLoading(false);
    } catch (error) {
      setError(error?.response?.data || error.message);
      setIsLoading(false);
    }
  };

  const onReportSearch = (searchPhrase = '') => {
    const searchResult = fetchedReports.filter((report) => {
      return (
        report.configuration.toLowerCase().includes(searchPhrase) ||
        report.fullName?.toLowerCase().includes(searchPhrase) ||
        report.id.toString().toLowerCase().includes(searchPhrase)
      );
    });
    setFilteredReports(searchResult);
  };

  const onExchangeReportSearch = (searchPhrase = '') => {
    const searchResult = fetchedExchangeReports.filter((exchangeReport) => {
      console.log('EXCHANGE REPORT', exchangeReport);
      return (
        exchangeReport?.newModule?.moduleNumber.toString().toLowerCase().includes(searchPhrase.toLowerCase()) ||
        exchangeReport?.exchangeWorker?.fullName?.toLowerCase().includes(searchPhrase.toLowerCase()) ||
        exchangeReport?.id?.toLowerCase().includes(searchPhrase.toLowerCase()) ||
        exchangeReport?.objectNumber?.toString().toLowerCase().includes(searchPhrase.toLowerCase())
      );
    });
    setFilteredExchangeReports(searchResult);
  };

  const reportSearchPhraseEnteredHandler = (event) => {
    setReportsSearchText(event.target.value);
    onReportSearch(event.target.value || '');
  };

  const exchangeReportSearchPhraseEnteredHandler = (event) => {
    setExchangeReportsSearchText(event.target.value);
    onExchangeReportSearch(event.target.value || '');
  };

  const openReportHandler = async (reportId) => {
    setIsReportEditing(false);

    await axios.get(archiveEndpoints.get + '/' + reportId).then((response) => {
      console.log(response.data);
      setSingleReportData(response.data);
    });

    setSingleReportView(true);
  };

  const editReportHandler = async (reportId) => {
    openReportHandler(reportId);
    setIsReportEditing(true);
  };

  const deleteReportHandler = async (reportId) => {
    await axios.delete(archiveEndpoints.delete + reportId).then((response) => {
      fetchArchiveResults();
    });
  };

  const exchangeReportEditHandler = () => {
    console.log('exchangeReportEditHandler is working');
  };

  const exchangeReportDeleteHandler = async (exchangeReportId) => {
    await axios.delete(exchangeReportEndpoints.delete + exchangeReportId).then((response) => {
      fetchArchiveResults();
    });
  };

  const onSubmit = (values) => {
    console.log('Dane: ', values);
    console.log('Dane zdżejsonowane: ', JSON.parse(JSON.stringify(values)));
  };

  const backButtonHandler = () => {
    setSingleReportView(false);
  };

  useEffect(() => {
    fetchArchiveResults();
  }, []);
  if (isLoading) {
    return <CenteredLoader />;
  }
  if (error) {
    return <Message message={'Błąd wczytywania danych!'} messageType={'ERROR'} />;
  }
  const fetchedResultsElement = filteredReports.map((result) => (
    <ArchiveResult
      key={result.key}
      id={result.id}
      date={result.date}
      configuration={result.configuration}
      fullName={result.fullName}
      office={result.office}
      openHandler={() => openReportHandler(result.key)}
      editHandler={() => editReportHandler(result.key)}
      deleteHandler={() => deleteReportHandler(result.key)}
    />
  ));
  const fetchedExchangeReportsElements = filteredExchangeReports.map((exchangeReport) => {
    return (
      <ExchangeReportResult
        key={exchangeReport._id}
        exchangeReportObject={exchangeReport}
        editHandler={exchangeReportEditHandler}
        deleteHandler={() => exchangeReportDeleteHandler(exchangeReport._id)}
      />
    );
  });

  if (singleReportView) {
    const initialValues = {
      nr: singleReportData.nr,
      workers: [singleReportData.workers[0], singleReportData.workers[1]],
      configuration: singleReportData.configuration,
      pwr_set: singleReportData.pwr_set,
      mod_set: singleReportData.mod_set,
      module: singleReportData.module,
      rms: singleReportData.rms,
      objects: singleReportData.objects,
      pump: singleReportData.pump,
      pressure: singleReportData.pressure,
      temperatureIn: singleReportData.temperatureIn,
      temperatureOut: singleReportData.temperatureOut,
      resistanceIn: singleReportData.resistanceIn,
      resistanceOut: singleReportData.resistanceOut,
      waterCounter: singleReportData.waterCounter,
      openingLevelA: singleReportData.openingLevelA,
      openingLevelB: singleReportData.openingLevelB,
      supplyAmount: singleReportData.supplyAmount,
      lighting: singleReportData.lighting,
      isCassetteOpened: singleReportData.isCassetteOpened,
      dabExciter: singleReportData.dabExciter,
      dabPowerOut: singleReportData.dabPowerOut,
      dabPowerReceived: singleReportData.dabPowerReceived,
      dabMer: singleReportData.dabMer,
      dabShoulderUp: singleReportData.dabShoulderUp,
      dabShoulderDown: singleReportData.dabShoulderDown,
      dabGeneral: singleReportData.dabGeneral,
      dabTMA: singleReportData.dabTMA,
      dabTMB: singleReportData.dabTMB,
      accidentDescription: singleReportData.accidentDescription,
    };

    return (
      <>
        <button onClick={backButtonHandler}>WRÓĆ</button>
        <Formik initialValues={initialValues} validationSchema={newReportValidationSchema} onSubmit={onSubmit}>
          {(formik) => {
            const isDisabled = !formik.isValid && !formik.dirty;

            const buttonProps = {
              type: 'submit',
              disabled: isDisabled,
            };

            return (
              <Form>
                <FormSectionWrapper rows={1} columns={2}>
                  {generateFormikControlsFromConfig(newReportForms.firstSection)}
                </FormSectionWrapper>
                <SeparateLine />
                <FormSectionWrapper rows={9} columns={3}>
                  {generateFormikControlsFromConfig(newReportForms.secondSection)}
                </FormSectionWrapper>
                <SeparateLine />
                {isReportEditing ? <SubmitButton buttonProps={buttonProps} title="Zaktualizuj" /> : null}
              </Form>
            );
          }}
        </Formik>
      </>
    );
  }

  return (
    <>
      <SecondaryHeader>Raporty</SecondaryHeader>
      <SearchBar
        value={reportsSearchText}
        setValue={reportSearchPhraseEnteredHandler}
        label={'WYSZUKAJ'}
        placeholder={'Wpisz wyszukiwaną frazę'}
      />
      {!isLoading && fetchedResultsElement.length > 0 ? (
        <ResultsTable>
          <tbody>
            <ArchiveResultsHeader />
            {fetchedResultsElement}
          </tbody>
        </ResultsTable>
      ) : (
        <ErrorResults>
          <Message messageType={'ERROR'} message={'Brak wyników'} />
        </ErrorResults>
      )}

      <SecondaryHeader>Raporty wymiany</SecondaryHeader>
      <SearchBar
        value={exchangeReportsSearchText}
        setValue={exchangeReportSearchPhraseEnteredHandler}
        label={'WYSZUKAJ'}
        placeholder={'Wpisz wyszukiwaną frazę'}
      />

      {!isLoading && fetchedExchangeReportsElements.length > 0 ? (
        fetchedExchangeReportsElements
      ) : (
        <Message messageType={'ERROR'} message={'Brak wyników'} />
      )}
    </>
  );
};

export default ArchiveResults;
