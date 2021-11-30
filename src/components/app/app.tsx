import React from 'react';
import Main from '../main/main';
import Favorites from '../favorites/favorites';
import SingIn from '../sing-in/sing-in';
import Room from '../room/room';
import NotFound from '../not-found/not-found';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Offer} from '../../mocks/offers';

interface AppProps {
  offers: Offer[],
}

const App = ({offers}: AppProps): React.ReactElement => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact>
          <Main offers={offers}/>
        </Route>
        <Route path='/login' exact>
          <SingIn/>
        </Route>
        <Route path='/favorites' exact>
          <Favorites/>
        </Route>
        <Route path='/offer/:id' exact>
          <Room/>
        </Route>
        <Route>
          <NotFound/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
