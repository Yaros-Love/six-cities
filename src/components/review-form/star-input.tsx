import React from "react";

interface starInputProps {
  count: number,
  onStarClick: (currentNumber: string | null) => void
}

const StarInput = ({count, onStarClick}: starInputProps): JSX.Element => {
  return (
    <React.Fragment>
      <input
        className="form__rating-input visually-hidden"
        name="rating" value={count} id={`${count}-stars`}
        type="radio"/>
      <label
        onClick={(event) => {
          onStarClick(event.currentTarget.getAttribute(`data-key`));
        }}
        data-key={count}
        htmlFor={`${count}-stars`}
        className="reviews__rating-label form__rating-label"
        title="perfect">
        <svg
          // onClick={(event) => {
          //   onStarClick(event.nativeEvent);
          // }}
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
