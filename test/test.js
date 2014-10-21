var request = require('supertest');
var app = require('../app.js');
 
describe('GET /', function() {
  it('respond with my name', function(done) {
    request(app).get('/').expect('Franco Rivera Carranza :)', done);
  });
});
