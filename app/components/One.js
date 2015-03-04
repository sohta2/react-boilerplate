'use strict';

import React        from 'react';
import Footer       from './Footer';
import {Link} from 'react-router';

export default React.createClass({
  displayName: 'One',
  render() {
    let style = {
      title: {
        fontFamily: "'Poiret One', cursive"
      }
    };
    return (
      <div>
        <header className="page-header">
          <h1 style={style.title}>One</h1>
        </header>
        <article className="main-content">
          One
          <div>
            <Link to="two">next</Link>
          </div>
        </article>
        <Footer />
      </div>
    );
  }
});
