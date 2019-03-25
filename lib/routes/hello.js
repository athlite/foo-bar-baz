'use strict';

module.exports = {
  method: 'get',
  path: '/hello',
  options: {
    handler: (request, h) => {

      return {
        message: 'Hello World!'
      };
    }
  }
};
