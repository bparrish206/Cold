'use strict';

var chai = require('chai');
var chaihttp = require("chai-http");
var expect = chai.expect;
require('../index.js');
chai.use(chaihttp);

var url = 'http://localhost:3000/';
describe('checking the temperature in Seattle', function() {
  it('should return the temperature', function(done) {
      chai.request('https://currentweather.herokuapp.com/')
      .get('/')
      .end(function(err,res){
        expect(err).to.eql(null);
        expect(res.type).to.eql('text/html');
        done();
      });
    });
  });
