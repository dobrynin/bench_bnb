import React from 'react';
import { values } from 'lodash';
import BenchIndexItem from './bench_index_item';

class BenchIndex extends React.Component {

  componentDidMount() {
    this.props.fetchBenches();
  }

  render() {
    return (
      <ul>
        {values(this.props.benches)
        .map( bench => <BenchIndexItem bench={bench} key={bench.id} />)}
      </ul>
    );
  }
}

export default BenchIndex;
