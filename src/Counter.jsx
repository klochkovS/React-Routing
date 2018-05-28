import React, { Component } from 'react';

class Counter extends Component {

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
