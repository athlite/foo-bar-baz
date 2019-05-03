'use strict';

module.exports = {
  method: 'GET',
  path: '/thomas',
  options: {
    handler: (request, h) => {

      return {
        name: 'Thomas Eng'
      };
    }
  }
};
