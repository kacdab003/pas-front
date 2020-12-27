const exchangeReportConfig = {
  inputs: [
    {
      label: 'Data wymiany',
      name: 'exchangeDate',
      type: 'date',
      required: true,
    },
    { label: 'Inżynier', type: 'text', placeholder: 'Imię i nazwisko inżyniera', required: true },
    { label: 'Technik', type: 'text', placeholder: 'Imię i nazwisko technika', required: true },
    { label: 'Numer obiektu', type: 'number', required: true },
    { label: 'Gniazdo', type: 'number', placeholder: '', required: true },
    { label: 'Nr ewidencyjny uszkodzonego modułu', type: 'text', placeholder: '', required: true },
    { label: 'Nr ewidencyjny nowego modułu', type: 'text', placeholder: '', required: true },
  ],
};

export default exchangeReportConfig;
