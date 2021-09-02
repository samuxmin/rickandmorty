import React from 'react';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import Characters from '../Components/Characters/Characters';
import EpisodeCharacters from '../Components/Episodes/EpisodeCharacters/EpisodeCharacters';
import Episodes from '../Components/Episodes/Episodes';
import Footer from '../Components/Footer/Footer';
import LocationCharacters from '../Components/Locations/LocationCharacters/LocationCharacters';
import Locations from '../Components/Locations/Locations';
import Navbar from '../Components/Navbar/Navbar';

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <div>
        <Switch>
          <Route exact path='/episodes/:page' component={Episodes} />
          <Route exact path='/locations/:page' component={Locations} />
          <Route exact path='/characters/:page' component={Characters} />
          <Route
            path='/location/:location/characters'
            component={LocationCharacters}
          />
          <Route
            path='/episode/:episode/characters'
            component={EpisodeCharacters}
          />
         <Redirect to='/characters/1' />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
};

export default AppRouter;
