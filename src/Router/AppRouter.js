import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Characters from '../Components/Characters/Characters';
import LocationCharacters from '../Components/Locations/LocationCharacters/LocationCharacters';
import Locations from '../Components/Locations/Locations';
import Navbar from '../Components/Navbar/Navbar';

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <div>
        <Switch>
          <Route exact path='/' component={Characters} />
          <Route exact path='/locations' component={Locations} />
          <Route
            path='/location:location/characters'
            component={LocationCharacters}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
