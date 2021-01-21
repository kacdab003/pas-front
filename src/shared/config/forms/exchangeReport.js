import { userEndpoints, moduleEndpoints } from '../endpoints';

const exchangeReportConfig = [
  {
    control: 'input',
    label: 'Data wymiany',
    name: 'exchangeDate',
    type: 'datetime-local',
  },
  { control: 'input', label: 'Numer obiektu', name: 'objectNumber', type: 'number', placeholder: '0' },
  { control: 'input', label: 'Gniazdo', name: 'socket', type: 'number', placeholder: '0' },

  {
    control: 'select',
    label: 'Pracownik dokonujący wymiany',
    name: 'exchangeWorker',
    shouldFetchOptions: true,
    options: [],
    refKey: 'fullName',
    refEndpoint: userEndpoints.get,
    defaultOptionLabel: 'Wybierz pracownika',
    placeholder: 'Imię i nazwisko pracownika',
  },
  {
    control: 'input',
    type: 'number',
    label: 'Nr ewidencyjny uszkodzonego modułu',
    name: 'damagedModuleNumber',
    placeholder: '1234',
  },
  {
    control: 'input',
    type: 'number',
    label: 'Nr ewidencyjny nowego modułu',
    name: 'newModuleNumber',
    placeholder: '1234',
  },
];

export default exchangeReportConfig;
