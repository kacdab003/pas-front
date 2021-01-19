import FormikControl from '../../../components/FormikControl/FormikControl';

const generateFormikControlFromConfig = (inputArray) => {
  return inputArray.map((props) => {
    const { control, ...otherProps } = props;
    return <FormikControl control={control} {...otherProps} />;
  });
};

export default generateFormikControlFromConfig;
