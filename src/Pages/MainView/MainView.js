import React from 'react';

import { StyledMainView } from './StyledMainView';
import backgroundImage from '../../assets/images/Login/background.png';
import headerImage from '../../assets/images/Login/logo.png';
const MainView = () => {
  return (
    <StyledMainView>
      <img src={headerImage} alt={''} />
      <img src={backgroundImage} alt={''} />
    </StyledMainView>
  );
};

export default MainView;
