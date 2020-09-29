import React from 'react';
import { connect } from 'react-redux';

class Count extends React.Component {
  state = { count: 0}

  increment = () => {
    this.props.dispatch({type: 'INCREMENT'})
  }

  decrment = () => {
    this.props.dispatch({type: 'DECREMENT'})
  }

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <button onClick={this.decrment}>Diminuir</button>
        <span>    {this.props.count}    </span>
        <button onClick={this.increment}>Aumentar</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    count: state.count
  }
}

export default connect(mapStateToProps)(Count);
