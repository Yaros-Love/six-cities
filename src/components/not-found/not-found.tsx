import React from 'react';
import Header from '../header/header';

const NotFound = (): JSX.Element => {
  return (
    <React.Fragment>
      <div className="page page--gray page--main">
        <Header/>
        <h2 style={{textAlign: `center`}}>404 Page not found</h2>
      </div>
    </React.Fragment>
  );
};

export default NotFound;
