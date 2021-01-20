import { ErrorMessage, Field, FieldArray } from 'formik';
import React from 'react';
import FormikError from '../FormikError/FormikError';
import FormikInput from '../FormikInput/FormikInput';
import { StyledFormikLabel } from '../FormikLabel/StyledFormikLabel';
import { StyledDamagedButton, StyledDamagedModules, StyledFormikFieldArrayWrapper } from './StyledFormikFieldArray';

const FormikFieldArray = (props) => {
  const { label, name, ...otherProps } = props;

  return (
    <StyledFormikFieldArrayWrapper>
      <StyledFormikLabel htmlFor={name}>{label}</StyledFormikLabel>
      <FieldArray id={name} name={name} {...otherProps}>
        {(fieldArrayProps) => {
          console.log('fieldArrayProps', fieldArrayProps);
          const { push, remove, form } = fieldArrayProps;
          const { values } = form;
          const { objects } = values;

          return (
            <div>
              {objects.map((object, index) => (
                <div key={index}>
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
                    {(nestedFieldArrayProps) => {
                      const { push: nestedPush, remove: nestedRemove, form } = nestedFieldArrayProps;
                      const { values } = form;
                      const { objects } = values;
                      console.log('NESTED OBJECTS', objects);

                      return (
                        <div>
                          {objects.map((object, nestedIndex) => (
                            <StyledDamagedModules key={nestedIndex}>
                              <FormikInput
                                id={`objects[${index}].U[${nestedIndex}].moduleNumber`}
                                name={`objects[${index}].U[${nestedIndex}].moduleNumber`}
                                label="Numer modułu"
                                type="text"
                              />

                              <StyledDamagedButton type="button" onClick={() => nestedRemove(nestedIndex)}>
                                {' '}
                                -{' '}
                              </StyledDamagedButton>

                              <StyledDamagedButton type="button" onClick={() => nestedPush({ moduleNumber: '' })}>
                                {' '}
                                +{' '}
                              </StyledDamagedButton>
                            </StyledDamagedModules>
                          ))}
                        </div>
                      );
                    }}
                  </FieldArray>
                  <button type="button" onClick={() => remove(index)}>
                    {' '}
                    -{' '}
                  </button>
                  <button type="button" onClick={() => push({ name: '', T1: 0, T2: 0, T3: 0, C1: 0, U: [''] })}>
                    {' '}
                    +{' '}
                  </button>
                </div>
              ))}
            </div>
          );
        }}
      </FieldArray>
      <ErrorMessage component={FormikError} name={name} />
    </StyledFormikFieldArrayWrapper>
  );
};

export default FormikFieldArray;
