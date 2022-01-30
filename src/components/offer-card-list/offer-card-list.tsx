import React, {useState} from 'react';
import {Offer} from '../../mocks/offers';
import OfferCard from '../offer-card/offer-card';

interface OfferCardList {
  offers: Offer[],
  style: {
    article: string,
    imageWrapper: string,
    imageWidth: string,
    imageHeight: string
  },
}

const OfferCardList = ({offers, style}: OfferCardList): JSX.Element => {
  const [currentCardOffer, setCurrentCardOffer] = useState({});

  const onCardOfferHover = (offer: Offer) => {
    setCurrentCardOffer(offer);
  };

  return (
    <React.Fragment>
      {offers.map((item: Offer) => <OfferCard offer={item} key={item.id} onCardOfferHover={onCardOfferHover} style={style}/>)}
    </React.Fragment>
  );
};

export default OfferCardList;
