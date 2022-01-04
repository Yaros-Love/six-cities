import React from "react";

interface starInputProps {
  count: number,
  onStarClick: (currentNumber: number | null) => void
}

const StarInput = ({count, onStarClick}: starInputProps): JSX.Element => {
  return (
    <React.Fragment>
      <input
        className="form__rating-input visually-hidden"
        name="rating" value={count} id={`${count}-stars`}
        type="radio"/>
      <label
        onClick={() => {
          onStarClick(count);
        }}
        htmlFor={`${count}-stars`}
        className="reviews__rating-label form__rating-label"
        title="perfect">
        <svg
          className="form__star-image"
          width="37"
          height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </React.Fragment>
  );
};

export default StarInput;
