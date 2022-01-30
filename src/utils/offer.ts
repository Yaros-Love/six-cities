import {FakeOffers, Offer} from "../mocks/offers";

export const getOfferById = (id: number): Offer | undefined => {
  return FakeOffers.find((offer) => offer.id === id);
};
