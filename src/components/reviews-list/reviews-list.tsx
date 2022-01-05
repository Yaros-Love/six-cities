import React from "react";
import {Offer} from "../../mocks/offers";
import Review from "../review-item/review-item";

interface ReviewsListProps {
  reviews: Offer[`reviews`]
}

const ReviewsList = ({reviews}: ReviewsListProps): JSX.Element => {
  return (
    <React.Fragment>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.amount}</span></h2>
      <ul className="reviews__list">
        {reviews.reviewsList.map((review) => <Review key={review.id} review={review}/>)}
      </ul>
    </React.Fragment>
  );
};

export default ReviewsList;
