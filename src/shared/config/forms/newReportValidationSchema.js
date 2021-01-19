import * as Yup from 'yup';

const newReportValidationSchema = Yup.object({
  nr: Yup.string().required('Pole wymagane').min(1).max(50),
  workers: Yup.array().required('Pole wymagane'),
  //  TODO: ADD REMAINING
});

export default newReportValidationSchema;
