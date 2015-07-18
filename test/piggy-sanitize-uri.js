var should = require('chai').should();
var piggySanitizeUri = require('../lib/piggy-sanitize-uri');


describe('#sanitize', function() {
  it('does not change a clean uri', function() {
    var uri = '/some/path/here/?arg1=val1&arg2=val2';
    piggySanitizeUri(uri).should.equal(uri);
  });

  it('remove double slash', function() {
    var uri = '/some//path////here/';
    piggySanitizeUri(uri).should.equal('/some/path/here/');
  });

  it('add ending slash', function() {
    var uri = '/some/path/here';
    piggySanitizeUri(uri).should.equal('/some/path/here/');
  });

  it('make uri lowercase', function() {
    var uri = '/SomE/paTh/heRe';
    piggySanitizeUri(uri).should.equal('/some/path/here/');
  });

  it('remove unvalid chars', function() {
    var uri = '/soôôme/pa:th/he_°re';
    piggySanitizeUri(uri).should.equal('/so--me/pa-th/he--re/');
  });

  it('do everything', function() {
    var uri = '/Soöme///pa:tH/he_°re';
    piggySanitizeUri(uri).should.equal('/so-me/pa-th/he--re/');
  });
});
