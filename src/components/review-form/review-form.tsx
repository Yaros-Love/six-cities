import React, {useRef, useState} from "react";
import {STARS_COUNT} from "../../const/const";
import StarInput from "./star-input";

const ReviewForm = (): JSX.Element => {
  const [rating, setRating] = useState<string | null>(null);
  const [userText, setUserText] = useState<string | null>(``);

  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const starClick = (currentNumber: string | null): void => {
    setRating(currentNumber);
  };

  return (
    <React.Fragment>
      <form className="reviews__form form" action="#" method="post">
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <div className="reviews__rating-form form__rating">
          {STARS_COUNT.map((item) => <StarInput key={item} count={item} onStarClick={starClick}/>)}
        </div>
        <textarea
          className="reviews__textarea form__textarea"
          id="review" name="review"
          placeholder="Tell how was your stay, what you like and what can be improved"
          ref={textAreaRef}
          onChange={() => {
            if (textAreaRef.current !== null) {
              setUserText(textAreaRef.current.value);
            }
          }}>
        </textarea>
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button className="reviews__submit form__submit button" type="submit" disabled={false}>Submit</button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default ReviewForm;
