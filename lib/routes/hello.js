'use strict';

module.exports = {
  method: 'get',
  path: '/hello',
  options: {
    handler: () => {

      return {
        message: 'Hello World! I am here'
      };
    }
  }
};
