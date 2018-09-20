// add.test.js
var sum = require('../assets/sum');
var expect = require('chai').expect;

describe('加法函数的测试', function() {
  it('1 加 1 应该等于 2', function() {
    expect(sum(1, 1)).to.be.equal(2);
  });
  it('0 加 1 应该等于 1', function() {
    expect(sum(1, 0)).to.be.equal(1);
  });
  it('0 加 0 应该等于 0', function() {
    expect(sum(0, 0)).to.be.equal(0);
  });
  it('-1 加 1 应该等于 0', function() {
    expect(sum(-1, 1)).to.be.equal(0);
  });
});