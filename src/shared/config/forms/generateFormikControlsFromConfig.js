import FormikControl from '../../../components/FormikControl/FormikControl';

const generateFormikControlFromConfig = (inputArray) => {
  return inputArray.map((props) => {
    const { control, ...otherProps } = props;
    return <FormikControl key={props.name} control={control} {...otherProps} />;
  });
};

export default generateFormikControlFromConfig;
