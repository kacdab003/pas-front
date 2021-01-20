import { ErrorMessage, FieldArray } from 'formik';
import React from 'react';
import AddRemoveButton from '../../AddRemoveButton/AddRemoveButton';
import FormikError from '../FormikError/FormikError';
import FormikInput from '../FormikInput/FormikInput';
import { StyledFormikLabel } from '../FormikLabel/StyledFormikLabel';
import {
  StyledDamagedModules,
  StyledFormikFieldArrayWrapper,
  StyledDamagedObjectsWrapper,
  StyledObject,
  StyledDamagedModule,
} from './StyledFormikFieldArray';

const FormikFieldArray = (props) => {
  const { label, name, ...otherProps } = props;

  return (
    <StyledFormikFieldArrayWrapper>
      <StyledFormikLabel htmlFor={name}>{label}</StyledFormikLabel>
      <FieldArray id={name} name={name} {...otherProps}>
        {(fieldArrayProps) => {
          const { push: objectPush, remove: objectRemove, form } = fieldArrayProps;
          const { values } = form;
          const { objects } = values;

          return (
            <StyledDamagedObjectsWrapper>
              {objects.map((object, index) => (
                <StyledObject key={index}>
                  <AddRemoveButton
                    onAdd={() => objectPush({ name: '', T1: 0, T2: 0, T3: 0, C1: 0, U: [{ moduleNumber: '' }] })}
                    onRemove={() => objectRemove(index)}
                  />{' '}
                  {/*Wyrzuć to poza instancję per obiekt i zrób jeden globalny komponent */}
                  <FormikInput
                    id={`objects[${index}].name`}
                    name={`objects[${index}].name`}
                    label="Nazwa obiektu"
                    type="text"
                  />
                  <FormikInput id={`objects[${index}].T1`} name={`objects[${index}].T1`} label="T1" type="number" />
                  <FormikInput id={`objects[${index}].T2`} name={`objects[${index}].T2`} label="T2" type="number" />
                  <FormikInput id={`objects[${index}].T3`} name={`objects[${index}].T3`} label="T3" type="number" />
                  <FormikInput id={`objects[${index}].C1`} name={`objects[${index}].C1`} label="C1" type="number" />
                  <FieldArray id={`objects[${index}].U`} name={`objects[${index}].U`}>
                    {(moduleFieldArrayProps) => {
                      console.log(moduleFieldArrayProps);
                      const { push: modulePush, remove: moduleRemove, form } = moduleFieldArrayProps;
                      const { values } = form;
                      const { objects: nestedObjects } = values;

                      return (
                        <StyledDamagedModules>
                          {nestedObjects.map((object, objIndex) =>
                            object.U.map((module, moduleIndex) => {
                              return (
                                <StyledDamagedModule key={moduleIndex}>
                                  <FormikInput
                                    id={`objects[${objIndex}].U[${moduleIndex}].moduleNumber`}
                                    name={`objects[${objIndex}].U[${moduleIndex}].moduleNumber`}
                                    label="Numer modułu"
                                    type="text"
                                  />
                                  <AddRemoveButton
                                    type="button"
                                    buttonType="+"
                                    onAdd={() => modulePush({ moduleNumber: '' })}
                                    onRemove={() => moduleRemove(moduleIndex)}
                                  />{' '}
                                  {/*Tak samo tutaj, powinno być jeden na - per moduł i globalny + */}
                                </StyledDamagedModule>
                              );
                            })
                          )}
                        </StyledDamagedModules>
                      );
                    }}
                  </FieldArray>
                </StyledObject>
              ))}
            </StyledDamagedObjectsWrapper>
          );
        }}
      </FieldArray>
      <ErrorMessage component={FormikError} name={name} />
    </StyledFormikFieldArrayWrapper>
  );
};

export default FormikFieldArray;
