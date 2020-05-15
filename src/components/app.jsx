import React, { Component } from 'react';
import FlatList from './flat_list';
import flats from '../../data/flat';

class App extends Component {
  constructor(props) {
    super(props);
    // this.props.flats = flats;

    this.state = {
      selectedFlat: null,
      flats: flats
    };
  }

  render() {
    return (
      <div style={{ width: '100%' }}>
        <div className="flat-list">
          <FlatList flats={this.state.flats} selectedFlat={this.state.selectedFlat} />
        </div>
        <div className="map-container">

        </div>
      </div>
    );
  }
}

export default App;
