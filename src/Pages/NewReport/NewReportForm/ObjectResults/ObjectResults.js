import React, { useState, useEffect } from 'react';
import ObjectResult from './ObjectResult/ObjectResult';
import { ObjectResultsWrapper } from './StyledObjectResults';
import { objectEndpoints } from '../../../../shared/config/endpoints';
import Axios from 'axios';

const ObjectResults = (props) => {
  //const [passedObjects] = useState([props.objects]);
  const [objects, setObjects] = useState([]);
  const [objectResults, setObjectResults] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchObjects = async () => {
      try {
        const response = await Axios.get(objectEndpoints.get);

        const fetchedObjects = response.data.filter((ob) => props.objects.includes(ob._id));

        setObjects(fetchedObjects);
      } catch (error) {
        setError(error.response.data);
      }
    };
    fetchObjects();
  }, [props.objects]);

  useEffect(() => {
    const mapObjects = () => {
      const mappedObjectResults = objects.map(({ _id, name, T1, T2, T3, C1, U }) => (
        <ObjectResult name={name} t1Value={T1} t2Value={T2} t3Value={T3} c1Value={C1} damagedModules={U} />
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
