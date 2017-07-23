var expect = require('chai').expect;

var inspect = require('../');

describe('Unknown', function() {
	it('Module exports a function', function() {
        expect(inspect).to.be.a('function');
	});
});