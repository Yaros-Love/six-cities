import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {FakeOffers} from './mocks/offers';

ReactDOM.render(
    <App offers={FakeOffers}/>,
    document.querySelector(`#root`)
);
