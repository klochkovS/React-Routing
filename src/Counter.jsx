import React, { Component } from 'react';

class Counter extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     stars: props.stars,
  //   };
  // }

  plus() {
    const stars = +this.state.stars < 10 ? +this.state.stars + 1 : 10;
    this.setState({ stars });
  }

  minus() {
    const stars = +this.state.stars > 1 ? +this.state.stars - 1 : 1;
    this.setState({ stars });
  }

  render() {
    const { stars, addStar, subStar } = this.props;
    return (
      <div> <h1>Лайкер</h1>
        <button onClick={subStar}><span>-</span></button>
        <button onClick={addStar}><span>+</span></button>
        <Stars length={stars} />
      </div>
    );
  }
}
const Stars = ({ length }) =>
  <span>{Array.from({ length }, (v, k) => k).map(() => '⭐️').join('')}</span>;

export default Counter;
