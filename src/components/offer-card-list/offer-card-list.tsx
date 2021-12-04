import React, {useState} from 'react';
import {Offer} from '../../mocks/offers';
import OfferCard from '../offer-card/offer-card';

interface OfferCradList {
  offers: Offer[],
}

const OfferCradList = ({offers}: OfferCradList): JSX.Element => {
  const [currentCardOffer, setCurrentCardOffer] = useState({});

  const onCardOfferHover = (offer: Offer) => {
    setCurrentCardOffer(offer);
  };

  return (
    <React.Fragment>
      <div className="cities__places-list places__list tabs__content">
        {offers.map((item: Offer) => <OfferCard offer={item} key={item.id} onCardOfferHover={onCardOfferHover}/>)}
      </div>
    </React.Fragment>
  );
};

export default OfferCradList;
