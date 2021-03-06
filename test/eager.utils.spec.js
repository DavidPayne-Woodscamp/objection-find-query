const eagerUtils = require('../lib/eager.utils');
const assert = require('chai').assert;

describe('eager.utils', () => {
	it('removes single argument', () => {
		const result = eagerUtils.removeFromEagerParam('[param1]', 'param1');
		assert.equal(result, '[]');
	});
	it('removes single argument, ignores whitespace', () => {
		const result = eagerUtils.removeFromEagerParam('[ param1 ]', 'param1');
		assert.equal(result, '[]');
	});
	it('removes from multiple arguments', () => {
		const result = eagerUtils.removeFromEagerParam('[param1,param2,param3]', 'param2');
		assert.equal(result, '[param1,param3]');
	});
	it('removes multiple arguments', () => {
		const result = eagerUtils.removeFromEagerParam('[param1,param2,param3,param4]', [
			'param2',
			'param1'
		]);
		assert.equal(result, '[param3,param4]');
	});
	it('removes from empty param', () => {
		const result = eagerUtils.removeFromEagerParam(undefined, 'param1');
		assert.equal(result, '[]');
	});

	it('gets elements', () => {
		const result = eagerUtils.getElements('[param1, param2]');
		assert.deepEqual(result, ['param1', 'param2']);
	});

	it('gets elements if undefined', () => {
		const result = eagerUtils.getElements(undefined);
		assert.deepEqual(result, []);
	});

	it('adds to empty argument', () => {
		const result = eagerUtils.appendToEagerParam(undefined, 'param2');
		assert.equal(result, '[param2]');
	});
	it('adds to single argument', () => {
		const result = eagerUtils.appendToEagerParam('[param1]', 'param2');
		assert.equal(result, '[param1,param2]');
	});
	it('adds to single argument, ignores whitespace', () => {
		const result = eagerUtils.appendToEagerParam('[ param1 ]', 'param2');
		assert.equal(result, '[param1,param2]');
	});
	it('adds to multiple arguments', () => {
		const result = eagerUtils.appendToEagerParam('[param1, param3]', 'param2');
		assert.equal(result, '[param1,param3,param2]');
	});
	it('adds multiple arguments', () => {
		const result = eagerUtils.appendToEagerParam('[param1, param2]', ['param3', 'param4']);
		assert.equal(result, '[param1,param2,param3,param4]');
	});
});
