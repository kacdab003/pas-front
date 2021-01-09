import FormInput from '../../../components/FormInput/FormInput';

const generateInputsFromConfig = (inputArray) => {
  return inputArray.map(({ type, name, required, placeholder, label }) => {
    const inputProps = {
      type: type ? type : 'text',
      name: name,
      required: required,
      placeholder: placeholder && placeholder,
    };
    return <FormInput key={name} labelContent={label} inputProps={inputProps} />;
  });
};

export default generateInputsFromConfig;
