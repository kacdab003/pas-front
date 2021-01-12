import React, { useEffect, useState } from 'react';
import { IconButton } from '../../../../../components/IconButton/IconButton';
import { StyledObjectOptions, StyledObjectProperty, StyledObjectResult } from './StyledObjectResult';
import deleteIcon from '../../../../../assets/icons/delete.png';
import settingsIcon from '../../../../../assets/icons/settings.png';
import FormInput from '../../../../../components/FormInput/FormInput';
import Modal from '../../../../../components/UI/Modal/Modal';
import ModuleSelect from '../../../../../components/ModuleSelect/ModuleSelect';
import ModuleContext from '../../../../../components/UtilComponents/ModuleContext/ModuleContext';
import damagedModuleAdder from '../../../../../shared/config/forms/damagedModuleAdder';
import axios from 'axios';

export const moduleAContext = React.createContext([]);
export const moduleBContext = React.createContext([]);

const ObjectResult = ({ id, name, t1Value, t2Value, t3Value, c1Value, damagedModules, updateObjectValuesHandler }) => {
  const [showModal, setShowModal] = useState(false);
  const [moduleAs, setModuleAs] = useState([]);

  const updateObjectValues = (event) => {
    updateObjectValuesHandler(event.target.name, event.target.value, id);
  };

  useEffect(() => {
    const fetchModules = async () => {
      try {
        const response = await axios.get(damagedModuleAdder.refEndpoint);
        if (response.data.length === 0) {
          return;
        }
        const moduleObjects = response.data.map((moduleObject) => moduleObject.module);
        setModuleAs(moduleObjects);
      } catch (error) {}
    };
    fetchModules();
  });

  const selectChangedHandler = (event) => {};

  const buttonClickedHandler = (event) => {
    setShowModal(true);
  };

  return (
    <>
      <Modal show={showModal} modalClosed={() => setShowModal(false)}>
        <ModuleContext initialContext={moduleAContext} value={moduleAs} setValue={setModuleAs}>
          <ModuleSelect />
        </ModuleContext>
      </Modal>

      <StyledObjectResult>
        <StyledObjectProperty>{name}</StyledObjectProperty>
        <FormInput
          key={id + 't1'}
          labelContent="T1"
          inputProps={{
            type: 'number',
            name: 'T1',
            required: true,
            placeholder: 'T1',
            defaultValue: t1Value,
            onChange: updateObjectValues,
          }}
        />
        <FormInput
          key={id + 't2'}
          labelContent="T2"
          inputProps={{
            type: 'number',
            name: 'T2',
            required: true,
            placeholder: 'T2',
            defaultValue: t2Value,
            onChange: updateObjectValues,
          }}
        />
        <FormInput
          key={id + 't3'}
          labelContent="T3"
          inputProps={{
            type: 'number',
            name: 'T3',
            required: true,
            placeholder: 'T3',
            defaultValue: t3Value,
            onChange: updateObjectValues,
          }}
        />
        <FormInput
          key={id + 'c1'}
          labelContent="C1"
          inputProps={{
            type: 'number',
            name: 'C1',
            required: true,
            placeholder: 'C1',
            defaultValue: c1Value,
            onChange: updateObjectValues,
          }}
        />

        <StyledObjectOptions>
          <IconButton src={deleteIcon} />
          <IconButton src={settingsIcon} onClick={buttonClickedHandler} />
        </StyledObjectOptions>
      </StyledObjectResult>
    </>
  );
};

export default ObjectResult;
