//tests/tests.js
var assert = require('assert')
	,foo = 'bar';

suite('Base', function() {

	test('with .evalSync()', function(done, server, client) {
  		var result = server.evalSync(function() {
    		setTimeout(function() {
      			emit('return', {a: 10});
    		}, 10);
  		});

  		var finalResult = client.evalSync(function(data) {
     		emit('return', data.a + 10);
  			}, result);

  		assert.equal(foo, 'bar');
  		done();
	});
});


