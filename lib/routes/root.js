'use strict';

module.exports = {
  method: 'get',
  path: '/',
  options: {
    handler: (_, h) => {

      return h.response().code(204);
    }
  }
};
