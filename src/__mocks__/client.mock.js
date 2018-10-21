/**
 * Axios Mocks
 */

import {
    MADRID_JOSE,
  } from '.';
  
  const MockAdapter = require('axios-mock-adapter');
  
  function apply(axiosInstance) {
    const mock = new MockAdapter(axiosInstance, { delayResponse: 0 });
  
    // Get the data from user Jose 
    mock.onGet('marker?userId=Jose').reply(() => [200, { data: MADRID_JOSE }]);
  }
  
  export {
    apply,
  };