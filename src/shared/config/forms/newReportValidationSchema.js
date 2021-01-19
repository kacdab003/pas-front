import * as Yup from 'yup';

const newReportValidationSchema = Yup.object({
  nr: Yup.string().required('Pole wymagane').min(1).max(50),
  workers: Yup.array().of(Yup.string().required('Pole wymagane')).length(2),
  configuration: Yup.string()
    .required('Pole wymagane')
    .matches(/\b(?:1\+2|2\+3|1\+3|1\+2\+3)\b/),
  pwr_set: Yup.number().required('Pole wymagane').min(0).max(100),
  mod_set: Yup.number().required('Pole wymagane'),
  module: Yup.string().required('Pole wymagane').min(1).max(4),
  rms: Yup.string()
    .required('Pole wymagane')
    .matches(/\b(?:ZAL|WYL)\b/),
  objects: Yup.array(),
  pump: Yup.string()
    .required('Pole wymagane')
    .matches(/\b(?:P1|P2)\b/),
  pressure: Yup.number().required('Pole wymagane').min(0).max(999999),
  temperatureIn: Yup.number().required('Pole wymagane'),
  temperatureOut: Yup.number().required('Pole wymagane'),
  resistanceIn: Yup.number().required('Pole wymagane'),
  resistanceOut: Yup.number().required('Pole wymagane'),
  waterCounter: Yup.number().required('Pole wymagane'),
  openingLevelA: Yup.number().required('Pole wymagane').min(0).max(100),
  openingLevelB: Yup.number().required('Pole wymagane').min(0).max(100),
  supplyAmount: Yup.number().required('Pole wymagane').min(0).max(1000),
  lighting: Yup.boolean(),
  isCassetteOpened: Yup.boolean(),
  dabExciter: Yup.string()
    .required('Pole wymagane')
    .matches(/\b(?:A|B)\b/),
  dabPowerOut: Yup.number().required('Pole wymagane').min(0).max(10000),
  dabPowerReceived: Yup.number().required('Pole wymagane').min(0).max(10000),
  dabMer: Yup.number().required('Pole wymagane').min(0).max(10000),
  dabShoulderUp: Yup.number().required('Pole wymagane').min(0).max(10000),
  dabShoulderDown: Yup.number().required('Pole wymagane').min(0).max(10000),
  dabGeneral: Yup.number().required('Pole wymagane'),
  dabTMA: Yup.number().required('Pole wymagane'),
  dabTMB: Yup.number().required('Pole wymagane'),
  accidentDescription: Yup.string().required('Pole wymagane').min(0).max(300),
});

export default newReportValidationSchema;
