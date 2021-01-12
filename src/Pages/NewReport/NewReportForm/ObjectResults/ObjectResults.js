import React, { useState, useEffect } from 'react';
import ObjectResult from './ObjectResult/ObjectResult';
import { ObjectResultsWrapper } from './StyledObjectResults';
import { objectEndpoints } from '../../../../shared/config/endpoints';
import axios from '../../../../axios';
const ObjectResults = ({ passDetailedObjects, objectIDs }) => {
  //const [passedObjects] = useState([objects]);
  const [objects, setObjects] = useState([]);
  const [error, setError] = useState(false);

  const updateObjectValuesHandler = (changedValueName, changedValue, id) => {
    const updateCandidateIndex = objects.findIndex((obj) => {
      return obj._id === id;
    });
    setObjects((prevState) => {
      const stateToUpdate = [...prevState];
      let objectToUpdate = stateToUpdate[updateCandidateIndex];
      objectToUpdate = {
        ...objectToUpdate,
        [changedValueName]: Number(changedValue),
      };
      stateToUpdate[updateCandidateIndex] = objectToUpdate;
      return stateToUpdate;
    });

    passDetailedObjects(objects);
  };

  useEffect(() => {
    const fetchObjects = async () => {
      try {
        const response = await axios.get(objectEndpoints.get);

        const fetchedObjects = response.data.filter((ob) => objectIDs.includes(ob._id));
        setObjects(fetchedObjects);
      } catch (error) {
        setError(error?.response?.data || error.message);
      }
    };

    fetchObjects();
    passDetailedObjects(objects);
  }, [objectIDs, passDetailedObjects]);

  const mapObjects = () => {
    console.log('MapObjects', objects);
    const mappedResults = objects?.map(({ _id, name, T1, T2, T3, C1, U }) => (
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
    console.log(mappedResults);
    return mappedResults;
  };

  return (
    <>
      <ObjectResultsWrapper>{mapObjects()}</ObjectResultsWrapper>
    </>
  );
};

export default ObjectResults;
