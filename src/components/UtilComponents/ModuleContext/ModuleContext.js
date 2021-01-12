import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import damagedModuleAdder from '../../../shared/config/forms/damagedModuleAdder';

const ModuleContext = ({ initialContext, children, value, setValue }) => {
  const context = useContext(initialContext);
  console.log('MODULE_CONTEXT', context);
  console.log('MODULE_CONTEXT', value);
  useEffect(() => {
    const fetchModules = async () => {
      try {
        const response = await axios.get(damagedModuleAdder.refEndpoint);
        if (response.data.length === 0) {
          return;
        }
        const moduleObjects = response.data.map((moduleObject) => moduleObject.module);
        setValue(moduleObjects);
      } catch (error) {}
    };
    fetchModules();
  }, [setValue]);

  return (
    <initialContext.Provider value={{ moduleArray: value, setModuleArray: setValue }}>
      {children}
    </initialContext.Provider>
  );
};

export default ModuleContext;
