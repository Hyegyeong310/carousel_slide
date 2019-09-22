import React, { Component } from 'react';
import data from './data.json';
import GlobalStyles from './GlobalStyles';
import UseCarousel from './useCarousel';

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyles />
        <UseCarousel initialImages={data} />
      </>
    );
  }
}

export default App;
