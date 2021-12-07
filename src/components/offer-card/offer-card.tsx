import React from 'react';
import {Link} from 'react-router-dom';
import {Offer} from '../../mocks/offers';
import {AppRoutes} from '../../const/const';

interface OfferCardProps {
  offer: Offer,
  onCardOfferHover: (param: Offer) => void,
  style: {
    article: string,
    imageWrapper: string,
    imageWidth: string,
    imageHeight: string
  }
}

const OfferCard = ({offer, onCardOfferHover, style}: OfferCardProps): JSX.Element => {
  return (
    <React.Fragment>
      <article
        onMouseMove={() => onCardOfferHover(offer)}
        className={`${style.article}card place-card`}>
        <div className={`${style.imageWrapper}__image-wrapper place-card__image-wrapper`}>
          <a href="#">
            <img className="place-card__image" src={offer.offerCardImg} width={style.imageWidth} height={style.imageHeight} alt="Place image"/>
          </a>
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{offer.price}</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>
            <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">In bookmarks</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{width: offer.ratinStarsWidth + `%`}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            <Link to={`${AppRoutes.ROOM}${offer.id}`}>{offer.name}</Link>
          </h2>
          <p className="place-card__type">{offer.type}</p>
        </div>
      </article>
    </React.Fragment>
  );
};

export default OfferCard;
