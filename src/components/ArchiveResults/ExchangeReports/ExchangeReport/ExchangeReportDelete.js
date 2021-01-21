import React, { useState, useEffect } from 'react';
import { exchangeReportEndpoints } from '../../../../shared/config/endpoints';
import axios from '../../../../axios';
import CenteredLoader from '../../../UI/CenteredLoader/CenteredLoader';
import Message from '../../../Message/Message';
import { useHistory } from 'react-router';
import SubmitButton from '../../../SubmitButton/SubmitButton';

const ExchangeReportDelete = (props) => {
  const reportId = props.location.state;
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const deleteReport = async (reportId) => {
      try {
        await axios.delete(exchangeReportEndpoints.delete + reportId).then((response) => {
          console.log(response);
        });
        setIsLoading(false);
      } catch (error) {
        setError(error?.response?.data || error.message);
        setIsLoading(false);
      }
    };
    deleteReport(reportId);
  }, []);

  const backButtonHandler = () => {
    history.push({
      pathname: '/archive',
    });
  };

  if (isLoading) {
    return <CenteredLoader />;
  }

  if (error) {
    return <Message message={'Błąd wczytywania danych!'} messageType={'ERROR'} />;
  }

  return (
    <>
      <center>
        <h2>POMYŚLNIE USUNIĘTO RAPORT</h2>
      </center>
      <br />
      <SubmitButton title="WRÓĆ" buttonProps={{ onClick: backButtonHandler }} />
    </>
  );
};

export default ExchangeReportDelete;
