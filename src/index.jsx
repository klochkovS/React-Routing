import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Counter from './Counter';
import Map from './Map';
import Gallery from './Gallery';
import Calendar from './Calendar';


class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stars: 5,
    };
  }

  handleAddStar() {
    this.setState({
      stars: +this.state.stars < 10 ? +this.state.stars + 1 : 10,
    });
  }

  handleSubStar() {
    this.setState({
      stars: +this.state.stars > 1 ? +this.state.stars - 1 : 1,
    });
  }

  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={Map} />
          <Route path="/calendar" component={Calendar} />
          <Route path="/gallery" component={Gallery} />
          <Route
            path="/counter"
            render={() => (<Counter
              stars={this.state.stars}
              addStar={this.handleAddStar.bind(this)}
              subStar={this.handleSubStar.bind(this)}
            />)
            }
          />
        </Switch>
      </main>
    );
  }
}

const Menu = () => (
  <header>
    <nav>
      <ul>
        <li><Link to="/">Карта</Link></li>
        <li><Link to="/calendar">Календарь</Link></li>
        <li><Link to="/gallery">Галерея</Link></li>
        <li><Link to="/counter">Отзывы</Link></li>
      </ul>
    </nav>
  </header >
);

const App = () => (

  <div>
    <Menu />
    <Content />
  </div>
);

render(
  <BrowserRouter><MuiThemeProvider><App /></MuiThemeProvider></BrowserRouter>,
  document.querySelector('.root'),
);
