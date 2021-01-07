const exchangeReportConfig = {
  inputs: [
    {
      label: 'Data wymiany',
      name: 'exchangeDate',
      type: 'date',
      required: true,
    },
    { label: 'Numer obiektu', name: 'objectNumber', type: 'number', required: true },
    { label: 'Gniazdo', name: 'socket', type: 'number', placeholder: '', required: true },
  ],
  selects: [
    {
      label: 'Pracownik dokonujący wymiany',
      name: 'exchangeWorker',
      placeholder: 'Imię i nazwisko pracownika',
      required: true,
    },
    {
      label: 'Nr ewidencyjny uszkodzonego modułu',
      name: 'damagedModule',
      placeholder: '',
      required: true,
    },
    { label: 'Nr ewidencyjny nowego modułu', name: 'newModule', placeholder: '', required: true },
  ],
};

export default exchangeReportConfig;
