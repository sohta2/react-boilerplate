'use strict';

import React        from 'react';
import Footer       from './Footer';
import {Link} from 'react-router';

export default React.createClass({
  displayName: 'Two',
  render() {
    let style = {
      title: {
        fontFamily: "'Poiret One', cursive"
      }
    };
    return (
      <div>
        <header className="page-header">
          <h1 style={style.title}>Two</h1>
        </header>
        <article className="main-content">
          Two
          <div>
            <Link to="top">prev</Link>&nbsp;|&nbsp;
            <Link to="three">next</Link>
          </div>
        </article>
        <Footer />
      </div>
    );
  }
});
