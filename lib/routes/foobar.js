'use strict';

module.exports = {
  method: 'get',
  path: '/foobar',
  options: {
    handler: (request, h) => {

      return {
        foobar: 'baz'
      };
    }
  }
};
