import React from 'react';
import {STYLES_OFFERS_CARDS} from '../../const/const';
import {Offer} from '../../mocks/offers';
import OfferCardList from '../offer-card-list/offer-card-list';
import Header from '../header/header';

interface favoritesProps {
  offers: Offer[]
}

const Favorites = ({offers}: favoritesProps): JSX.Element => {
  return (
    <React.Fragment>
      <div className="page">
        <Header/>
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                <li className="favorites__locations-items">
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <a className="locations__item-link" href="#">
                        <span>Amsterdam</span>
                      </a>
                    </div>
                  </div>
                  <div className="favorites__places">
                    <OfferCardList offers={offers.slice(0, 3)} style={STYLES_OFFERS_CARDS.small}/>
                  </div>
                </li>

                <li className="favorites__locations-items">
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <a className="locations__item-link" href="#">
                        <span>Cologne</span>
                      </a>
                    </div>
                  </div>
                  <div className="favorites__places">
                    <OfferCardList offers={offers.slice(3, 6)} style={STYLES_OFFERS_CARDS.small}/>
                  </div>
                </li>
              </ul>
            </section>
          </div>
        </main>
      </div>
    </React.Fragment>
  );
};

export default Favorites;
