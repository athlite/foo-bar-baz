'use strict';

// Load modules

const Code = require('code');
const Lab = require('lab');
const Server = require('../server');
const Package = require('../package.json');

// Test shortcuts

const { describe, it } = exports.lab = Lab.script();
const { expect } = Code;

describe('Deployment', () => {

  let server;

  it('registers the main plugin.', async () => {

    server = await Server.deployment();
    expect(server.registrations[Package.name]).to.exist();
  });

  it('resolves foobar route', async () => {

    const response = await server.inject({ method: 'get', url: '/foobar' });
    expect(response.result.foobar).to.equal('baz');
  });

  it('resolve hello route', async () => {

    const response = await server.inject({ method: 'get', url: '/hello' });
    expect(response.result.message).to.equal('Hello World! I am here');
  });

  it('succeeds intendedly', () => {

    expect(1).to.equal(1);
  });

  it('should work', () => {

    expect('Thomas').to.equal('Thomas');
  });
});
