import { objectEndpoints } from '../endpoints';

const newReportForms = {
  firstSection: [
    {
      label: 'nr',
      name: 'reportNumber',
      type: 'text',
      placeholder: '',
      required: true,
    },
    {
      label: 'inżynier',
      name: 'engineer',
      type: 'text',
      placeholder: 'Imię i nazwisko inżyniera',
      required: true,
    },
    {
      label: 'technik',
      name: 'technician',
      type: 'text',
      placeholder: 'Imię i nazwisko technika',
      required: true,
    },
  ],
  secondSection: [
    {
      label: 'konfiguracja',
      name: 'configuration',
      type: 'text',
      placeholder: '',
      required: true,
    },
    {
      label: 'pwr_set',
      name: 'pwr_set',
      type: 'number',
      placeholder: '',
      required: true,
    },
    {
      label: 'mod_set',
      name: 'mod_set',
      type: 'number',
      placeholder: '',
      required: true,
    },
    {
      label: 'moduł',
      name: 'module',
      type: 'text',
      placeholder: '',
      required: true,
    },
    {
      label: 'rms',
      name: 'rms',
      type: 'text',
      placeholder: '',
      required: true,
    },
  ],
  objectForm: [
    {
      label: '',
      name: 'objectName',
      type: 'text',
      placeholder: 'Nazwa obiektu',
      required: false,
    },
    {
      label: '',
      name: 'value',
      type: 'number',
      placeholder: 'Wartość',
      required: false,
    },
    {
      label: 'Zawiera uszkodzony moduł',
      name: 'hasBrokenModule',
      type: 'checkbox',
      placeholder: 'Wartość',
      required: false,
    },
  ],
  objectFormSelector: {
    label: '',
    name: 'name',
    defaultOptionLabel: 'Wybierz obiekt',
    refEndpoint: objectEndpoints.get,
    refKey: 'name',
    required: false,
  },
};

export default newReportForms;
