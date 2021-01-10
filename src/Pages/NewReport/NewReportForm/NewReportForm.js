import React, { useCallback, useState } from 'react';
import { FormSectionWrapper } from './StyledNewReportForm';
import newReportForms from '../../../shared/config/forms/newReport';
import SeparateLine from '../../../components/UI/SeparateLine/SeparateLine';
import generateInputsFromConfig from '../../../shared/config/forms/generateInputsFromConfig';
import ObjectForm from './ObjectForm/ObjectForm';
import ObjectResults from './ObjectResults/ObjectResults';
const NewReportForm = () => {
  const [objectIDs, changeObjectIDs] = useState([]);
  const [detailedObjects, changeDetailedObjects] = useState([]);

  const objectsChangedHanlder = (object) => {
    changeObjectIDs((prevState) => [...prevState, object]);
  };

  const passDetailedObjectsHandler = useCallback((passedObjects) => {
    changeDetailedObjects((prevState) => [...prevState, passedObjects]);
  }, []);

  return (
    <form>
      <FormSectionWrapper rows={1} columns={2}>
        {generateInputsFromConfig(newReportForms.firstSection)}
      </FormSectionWrapper>
      <SeparateLine />
      <FormSectionWrapper rows={2} columns={3}>
        {generateInputsFromConfig(newReportForms.secondSection)}
      </FormSectionWrapper>
      <SeparateLine />
      <ObjectForm changeObjects={objectsChangedHanlder} />
      <ObjectResults objectIDs={objectIDs} passDetailedObjects={passDetailedObjectsHandler} />
    </form>
  );
};

export default NewReportForm;
