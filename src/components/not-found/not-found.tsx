import React from 'react';

const NotFound = (): JSX.Element => {
  return (
    <React.Fragment>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <h2 style={{textAlign: `center`}}>404 Page not found</h2>
    </React.Fragment>
  );
};

export default NotFound;
