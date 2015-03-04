'use strict';

import React        from 'react';
import Footer       from './Footer';
import {Link} from 'react-router';

export default React.createClass({
  displayName: 'Three',
  render() {
    let style = {
      title: {
        fontFamily: "'Poiret One', cursive"
      }
    };
    return (
      <div>
        <header className="page-header">
          <h1 style={style.title}>Three</h1>
        </header>
        <article className="main-content">
          Three
          <div>
            <Link to="two">prev</Link>
          </div>
        </article>
        <Footer />
      </div>
    );
  }
});
