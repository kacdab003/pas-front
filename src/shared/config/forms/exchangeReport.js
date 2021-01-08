import { userEndpoints, moduleEndpoints } from '../endpoints';

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
      required: true,
      refEndpoint: userEndpoints.get,
      refKey: 'surname',
    },
    {
      label: 'Nr ewidencyjny uszkodzonego modułu',
      name: 'damagedModule',
      required: true,
      refEndpoint: moduleEndpoints.get,
      refKey: 'moduleNumber',
    },
    {
      label: 'Nr ewidencyjny nowego modułu',
      name: 'newModule',
      required: true,
      refEndpoint: moduleEndpoints.get,
      refKey: 'moduleNumber',
    },
  ],
};

export default exchangeReportConfig;
