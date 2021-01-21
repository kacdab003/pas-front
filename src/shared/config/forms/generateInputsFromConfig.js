import FormInput from '../../../components/FormInput/FormInput';

const generateInputsFromConfig = (inputArray) => {
  return inputArray.map(({ type, name, required, placeholder, label }) => {
    const inputProps = {
      type: type ? type : 'text',
      name: name,
      required: required,
      placeholder: placeholder && placeholder,
      disabled: false,
    };
    return <FormInput labelContent={label} inputProps={inputProps} />;
  });
};

export default generateInputsFromConfig;
