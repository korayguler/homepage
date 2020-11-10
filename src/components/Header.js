import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from './Home';
import Portfolio from './Portfolio';
import Gallery from './Gallery';
import { getData } from '../helper/getData';

export default function Header() {
  const [social, setSocial] = useState({});

  useEffect(() => {
    if (localStorage.getItem('theme') !== null) {
      document.body.classList.add(localStorage.getItem('theme'));
    }
    getData().then((items) => setSocial(items.social));
  }, []);

  function theme() {
    if (localStorage.getItem('theme') === null) {
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark');
      localStorage.removeItem('theme');
    }
  }

  return (
    <Router>
      <header className='header'>
        <div className='logo'>
          <Link to='/'>KORAY GÜLER</Link>
        </div>
        <nav className='nav'>
          <Link className='btn btn-hover' to='/'>
            Home
          </Link>
          <Link className='btn btn-hover' to='/portfolio'>
            Portfolio
          </Link>
          <Link className='btn btn-hover' to='/gallery'>
            Gallery
          </Link>
        </nav>
        <div className='helpers'>
          <span className='social'>
            <a href={social.github} target='_blank' rel='noreferrer'>
              <i className='fab fa-github-alt'></i>
            </a>

            <a href={social.medium} target='_blank' rel='noreferrer'>
              <i className='fab fa-medium-m'></i>
            </a>

            <a href={social.twitter} target='_blank' rel='noreferrer'>
              <i className='fas fa-hashtag'></i>
            </a>
            <a href={social.linkedin} target='_blank' rel='noreferrer'>
              <i className='fas fa-link'></i>
            </a>
            <a href={social.instagram} target='_blank' rel='noreferrer'>
              <i className='fas fa-camera-retro'></i>
            </a>
          </span>
          <span className='theme' onClick={(e) => theme()}>
            <i className='fas fa-sun'></i>
          </span>
        </div>
      </header>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/portfolio'>
          <Portfolio />
        </Route>

        <Route path='/gallery'>
          <Gallery />
        </Route>
      </Switch>
    </Router>
  );
}
