import React, { useState, useEffect, useCallback } from 'react';
import ObjectResult from './ObjectResult/ObjectResult';
import { ObjectResultsWrapper } from './StyledObjectResults';
import { objectEndpoints } from '../../../../shared/config/endpoints';
import axios from '../../../../axios';

const ObjectResults = (props) => {
  //const [passedObjects] = useState([props.objects]);
  const [objects, setObjects] = useState([]);
  const [objectResults, setObjectResults] = useState([]);
  const [error, setError] = useState(false);

  const updateObjectValuesHandler = useCallback(
    (changedValueName, changedValue, id) => {
      const objectToUpdate = objects.filter((obj) => {
        return obj._id === id;
      });

      setObjects((prevState) => [
        { ...prevState, objectToUpdate: { ...prevState[objectToUpdate], [changedValueName]: changedValue } },
      ]);

      props.passDetailedObjects(objects);
    },
    [props, objects]
  );

  useEffect(() => {
    const fetchObjects = async () => {
      try {
        const response = await axios.get(objectEndpoints.get);
        const fetchedObjects = response.data.filter((ob) => props.objectIDs.includes(ob._id));
        setObjects(fetchedObjects);
      } catch (error) {
        setError(error?.response?.data || error.message);
      }
    };
    fetchObjects();
    props.passDetailedObjects(objects);
  }, [props, objects]);

  useEffect(() => {
    const mapObjects = () => {
      const mappedObjectResults = objects.map(({ _id, name, T1, T2, T3, C1, U }) => (
        <ObjectResult
          key={name}
          id={_id}
          name={name}
          t1Value={T1}
          t2Value={T2}
          t3Value={T3}
          c1Value={C1}
          damagedModules={U}
          updateObjectValuesHandler={updateObjectValuesHandler}
        />
      ));
      setObjectResults(mappedObjectResults);
    };
    mapObjects();
  }, [objects]);

  return (
    <>
      <ObjectResultsWrapper>{objectResults}</ObjectResultsWrapper>
    </>
  );
};

export default ObjectResults;
