import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Characters from '../Components/Characters/Characters';
import EpisodeCharacters from '../Components/Episodes/EpisodeCharacters/EpisodeCharacters';
import Episodes from '../Components/Episodes/Episodes';
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
          <Route exact path='/episodes' component={Episodes} />
          <Route exact path='/locations' component={Locations} />
          <Route
            path='/location:location/characters'
            component={LocationCharacters}
          />
           <Route
            path='/episode:episode/characters'
            component={EpisodeCharacters}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
