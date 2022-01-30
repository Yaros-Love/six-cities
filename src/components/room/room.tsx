import React, {useEffect, useState} from 'react';
import {Offer} from '../../mocks/offers';
import {FAKE_COUNT_IMAGES} from '../../const/const';
import Header from '../header/header';
import OfferImage from '../offer-image/offer-image';
import OfferCardList from '../offer-card-list/offer-card-list';
import ReviewForm from '../review-form/review-form';
import ReviewsList from '../reviews-list/reviews-list';
import Map from '../map/map';
import {useParams} from 'react-router-dom';
import {getOfferById} from '../../utils/offer';
import {STYLES_OFFERS_CARDS} from '../../const/const';

interface OfferPageProps {
  offers: Offer[],
}

interface OfferPageParams {
  id: string,
}

const getNearbyOffers = (offers: Offer[], id: number) => {
  return offers.filter((offer) => offer.id !== id).slice(0, 3);
};

const OfferPage = ({offers}: OfferPageProps): JSX.Element => {
  const {id} = useParams<OfferPageParams>();
  const [offer, setOffer] = useState<Offer | undefined>(undefined);
  const [nearbyOffers, _] = useState<Offer[]>(getNearbyOffers(offers, Number(id)));

  useEffect(() => {
    setOffer(getOfferById(Number(id)));
  }, [id]);

  if (!offer) {
    return (
      <div></div>
    );
  }

  return (
    <React.Fragment>
      <div className="page">
        <Header/>

        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">
                {Array(FAKE_COUNT_IMAGES).fill(1).map((item, index) => <OfferImage key={item + index} imgSrc={offer.offerCardImg}/>)}
              </div>
            </div>
            <div className="property__container container">
              <div className="property__wrapper">
                {offer.isPremium
                  ? <div className="property__mark">
                    <span>Premium</span>
                  </div>
                  : ``}
                <div className="property__name-wrapper">
                  <h1 className="property__name">
                    {offer.name}
                  </h1>
                  <button className="property__bookmark-button button" type="button">
                    <svg className="property__bookmark-icon" width="31" height="33">
                      <use xlinkHref="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span style={{width: offer.ratinStarsWidth + `%`}}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value">{offer.rating}</span>
                </div>
                <ul className="property__features">
                  <li className="property__feature property__feature--entire">
                    {offer.type}
                  </li>
                  <li className="property__feature property__feature--bedrooms">
                    {offer.feature.bedrooms} Bedrooms
                  </li>
                  <li className="property__feature property__feature--adults">
                    Max {offer.feature.adults} adults
                  </li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">&euro;{offer.price}</b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                <div className="property__inside">
                  <h2 className="property__inside-title">What&apos;s inside</h2>
                  <ul className="property__inside-list">
                    {offer.insideList.map((item) => <li key={item} className="property__inside-item">{item}</li>)}
                  </ul>
                </div>
                <div className="property__host">
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                      <img className="property__avatar user__avatar" src={offer.host.avatarUrl} width="74" height="74" alt="Host avatar"/>
                    </div>
                    <span className="property__user-name">
                      {offer.host.name}
                    </span>
                  </div>
                  <div className="property__description">
                    <p className="property__text">
                      {offer.host.description}
                    </p>
                    <p className="property__text">
                      An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.
                    </p>
                  </div>
                </div>
                <section className="property__reviews reviews">
                  <ReviewsList reviews={offer.reviews}/>
                  <ReviewForm/>
                </section>
              </div>
            </div>
            <section className="property__map map">
              <Map
                offers={nearbyOffers}
                className={`property__map map`}
                mainMarker={[offers[Number(id)].coords.latitude, offers[Number(id)].coords.longitude]}/>
            </section>
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <div className="near-places__list places__list">
                <OfferCardList offers={nearbyOffers} style={STYLES_OFFERS_CARDS.large}/>
              </div>
            </section>
          </div>
        </main>
      </div>
    </React.Fragment>
  );
};

export default OfferPage;
