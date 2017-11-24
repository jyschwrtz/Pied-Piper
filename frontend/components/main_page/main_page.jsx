import React from 'react';
import {
  Link,
  Route,
  Switch
} from 'react-router-dom';

import NavBar from '../nav_bar/nav_bar';
import BrowseContainer from '../browse/browse_container';

const MainPage = () => (
  <div className="main-page">
    <NavBar />
    <BrowseContainer />
  </div>
);

export default MainPage;
