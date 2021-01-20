import React, { useState } from 'react';
import AddRemoveButton from '../../AddRemoveButton/AddRemoveButton';
import FormInput from '../../FormInput/FormInput';
import { StyledModule, StyledModuleGroup } from './StyledModuleGroup';

const ModuleGroup = (props) => {
  const [modules, setModules] = useState([...props.object.U]);

  const updateModuleValues = (event, moduleIndex) => {
    const updatedModules = [...modules];
    const moduleToUpdate = updatedModules[moduleIndex];
    moduleToUpdate[event.target.name] = event.target.value;

    setModules([...updatedModules]);
  };

  const addNewModule = () => {
    const updatedModules = [...modules];
    updatedModules.push({ moduleNumber: 0, socket: 0, type: '' });
    setModules([...updatedModules]);
  };

  const removeModule = (moduleIndex) => {
    console.log(moduleIndex);
    const updatedModules = modules.filter((module, index) => index !== moduleIndex);
    console.log(updatedModules);
    setModules([...updatedModules]);
    console.log(modules);
  };

  return (
    <StyledModuleGroup>
      {modules.map((module, moduleIndex) => {
        return (
          <StyledModule key={moduleIndex}>
            <FormInput
              labelContent="Numer modułu"
              inputProps={{
                type: 'number',
                id: 'moduleNumber',
                name: 'moduleNumber',
                onChange: (event) => updateModuleValues(event, moduleIndex),
                value: modules[moduleIndex].moduleNumber,
              }}
            />
            <FormInput
              labelContent="Gniazdo"
              inputProps={{
                type: 'number',
                id: 'socket',
                name: 'socket',
                onChange: (event) => updateModuleValues(event, moduleIndex),
                value: modules[moduleIndex].socket,
              }}
            />
            <select
              id={'type'}
              name={'type'}
              label="Typ"
              onChange={(event) => updateModuleValues(event, moduleIndex)}
              value={modules[moduleIndex].type}
            >
              <option value="" default selected disabled>
                Wybierz typ
              </option>
              <option value="A">A</option>
              <option value="B">B</option>
            </select>
            <AddRemoveButton
              type="button"
              buttonType="+"
              onAdd={() => addNewModule()}
              onRemove={() => removeModule(moduleIndex)}
            />{' '}
          </StyledModule>
        );
      })}
    </StyledModuleGroup>
  );
};

export default ModuleGroup;
