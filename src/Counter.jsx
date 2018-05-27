import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stars: props.stars,
    };
  }

  plus() {
    const stars = +this.state.stars < 10 ? +this.state.stars + 1 : 10;
    this.setState({ stars });
  }

  minus() {
    const stars = +this.state.stars > 1 ? +this.state.stars - 1 : 1;
    this.setState({ stars });
  }

  render() {
    return (
      <div> Лайкер <hr />
        <button onClick={() => this.plus()}><span>+</span></button>
        <button onClick={() => this.minus()}><span>-</span></button>
        <Stars length={this.state.stars} />
      </div>
    );
  }
}
const Stars = ({ length }) =>
  <span>{Array.from({ length }, (v, k) => k).map(() => '⭐️').join('')}</span>;

export default Counter;
