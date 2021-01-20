import * as Yup from 'yup';

const newReportValidationSchema = Yup.object({
  nr: Yup.number().nullable().required('Pole wymagane').min(1).max(50),
  workers: Yup.array().of(Yup.string().required('Pole wymagane')).length(2),
  configuration: Yup.string()
    .required('Pole wymagane')
    .matches(/\b(?:1\+2|2\+3|1\+3|1\+2\+3)\b/),
  pwr_set: Yup.number().nullable().nullable().required('Pole wymagane').min(0).max(100),
  mod_set: Yup.number().nullable().required('Pole wymagane'),
  module: Yup.string().required('Pole wymagane').min(1).max(4),
  rms: Yup.string()
    .required('Pole wymagane')
    .matches(/\b(?:ZAL|WYL)\b/),
  //objects: Yup.array(),
  pump: Yup.string()
    .required('Pole wymagane')
    .matches(/\b(?:P1|P2)\b/),
  pressure: Yup.number().nullable().required('Pole wymagane').min(0).max(999999),
  temperatureIn: Yup.number().nullable().required('Pole wymagane'),
  temperatureOut: Yup.number().nullable().required('Pole wymagane'),
  resistanceIn: Yup.number().nullable().required('Pole wymagane'),
  resistanceOut: Yup.number().nullable().required('Pole wymagane'),
  waterCounter: Yup.number().nullable().required('Pole wymagane'),
  openingLevelA: Yup.number().nullable().required('Pole wymagane').min(0).max(100),
  openingLevelB: Yup.number().nullable().required('Pole wymagane').min(0).max(100),
  supplyAmount: Yup.number().nullable().required('Pole wymagane').min(0).max(1000),
  lighting: Yup.boolean(),
  isCassetteOpened: Yup.boolean(),
  dabExciter: Yup.string()
    .required('Pole wymagane')
    .matches(/\b(?:A|B)\b/),
  dabPowerOut: Yup.number().nullable().required('Pole wymagane').min(0).max(10000),
  dabPowerReceived: Yup.number().nullable().required('Pole wymagane').min(0).max(10000),
  dabMer: Yup.number().nullable().required('Pole wymagane').min(0).max(10000),
  dabShoulderUp: Yup.number().nullable().required('Pole wymagane').min(0).max(10000),
  dabShoulderDown: Yup.number().nullable().required('Pole wymagane').min(0).max(10000),
  dabGeneral: Yup.number().nullable().required('Pole wymagane'),
  dabTMA: Yup.number().nullable().required('Pole wymagane'),
  dabTMB: Yup.number().nullable().required('Pole wymagane'),
  accidentDescription: Yup.string().required('Pole wymagane').min(0).max(300),
});

export default newReportValidationSchema;
