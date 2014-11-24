'use strict';

var chai = require('chai');
var chaihttp = require("chai-http");
var expect = chai.expect;
require('../index');
chai.use(chaihttp);


var url = 'https://currentweather.herokuapp.com/';
describe('checking the temperature in Seattle', function() {
  it('should return the temperature', function(done) {
      chai.request(url)
      .get('/')
      .end(function(err,res){
        expect(res.status).to.eql(200);
        done();
      });
    });
  });
