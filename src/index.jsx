import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Counter from './Counter';
import Map from './Map';
import Gallery from './Gallery';

const Content = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Map} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/counter" render={() => <Counter stars="5" />} />
    </Switch>
  </main>
);

const Menu = () => (
  <header>
    <nav>
      <ul>
        <li><Link to="/">Карта</Link></li>
        <li><Link to="/gallery">Галерея</Link></li>
        <li><Link to="/counter">Отзывы</Link></li>
      </ul>
    </nav>
  </header>
);

const App = () => (
  <div>
    <Menu />
    <Content />
  </div>
);

render(
  <BrowserRouter><App /></BrowserRouter>,
  document.querySelector('.root'),
);
