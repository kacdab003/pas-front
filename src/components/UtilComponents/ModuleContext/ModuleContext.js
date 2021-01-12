import React from 'react';

const ModuleContext = ({ contextObject, children, value, setValue }) => {
  return (
    <contextObject.Provider value={{ moduleArray: value, setModuleArray: setValue }}>{children}</contextObject.Provider>
  );
};

export default ModuleContext;
