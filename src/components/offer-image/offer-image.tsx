import React from 'react';

interface offerImageProps {
  imgSrc: string,
}

const OfferImage = ({imgSrc}: offerImageProps): JSX.Element => {
  return (
    <React.Fragment>
      <div className="property__image-wrapper">
        <img className="property__image" src={imgSrc} alt="Photo studio"/>
      </div>
    </React.Fragment>
  );
};

export default OfferImage;
