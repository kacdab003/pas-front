/* eslint-disable no-template-curly-in-string */
import * as Yup from 'yup';

Yup.setLocale({
  number: {
    min: 'Wartość nie może być mniejsza niż ${min}',
    max: 'Wartość nie może przekroczyć ${max}',
  },
  string: {
    min: 'Wartość nie może być krótsza niż ${min} znaki',
    max: 'Wartość nie może przekroczyć ${max} znaków',
  },
});

const exchangeReportValidationSchema = Yup.object({
  exchangeDate: Yup.date().required('Pole wymagane'),
  objectNumber: Yup.number().required('Pole wymagane').min(0).max(999999),
  socket: Yup.number().required('Pole wymagane').min(0).max(999999),
  exchangeWorker: Yup.string().required('Pole wymagane'),
  damagedModuleNumber: Yup.number().required('Pole wymagane').min(0).max(999999),
  newModuleNumber: Yup.number().required('Pole wymagane').min(0).max(999999),
});

export default exchangeReportValidationSchema;
