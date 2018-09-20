
var isNumber = require('../assets/isNumber.js');

//import isNumber from 'assets/isNumber';

var test     = require('unit.js');

describe("text isNumber",function(){
  it("the input is positive interger",function(){
    test.must(isNumber(4)).be.equal(4);
    test.must(isNumber(222)).be.equal(222);
  });

  it("the input is zero",function(){
    test.must(isNumber(0)).be.equal(0);
  });

  it("the input is negtive interger",function(){
    test.must(isNumber(-1)).be.equal(-1);
    test.must(isNumber(-444)).be.equal(-444);
  });

  it("the input is string",function(){
    test.must(isNumber("hello")).be.a.string();
    test.must(isNumber("hello")).be.equal("it is not number");
  });

})