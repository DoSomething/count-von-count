var assert = require('assert')
  , CountVonCount = require('../')
  ;

describe('it handles cases with pure digits', function() {
  describe('CountVonCount("100")', function() {
    var string = '100';
    it('should return 100', function() {
      CountVonCount(string);
      assert(CountVonCount(string) === 100);
    })
  })

  describe('CountVonCount("Itook 100 photos!!!")', function() {
    var string = "Itook 100 photos!!!";
    it('should return 100', function() {
      assert(CountVonCount(string) === 100);
    })
  })
})

describe('it handles cases with spelled digits', function() {
  describe('CountVonCount("one hundred")', function() {
    var string = 'one hundred';
    it('should return 100', function() {
      CountVonCount(string);
      assert(CountVonCount(string) === 100);
    })
  })

  describe('CountVonCount("1 hundred thousand")', function() {
    var string = "1 hundred thousand";
    it('should return 100000', function() {
      CountVonCount(string);
      assert(CountVonCount(string) === 100000);
    })
  })

  describe('CountVonCount("I only have one dad")', function() {
    var string = "I only have one dad";
    it('should return 1', function() {
      CountVonCount(string);
      assert(CountVonCount(string) === 1);
    })
  })

  describe('CountVonCount("3 hundred thousand five hundred and thirty-6")', function() {
    var string = "3 hundred 26 thousand five hundred and thirty-6";
    it('should return 326536', function() {
      CountVonCount(string);
      assert(CountVonCount(string) === 326536);
    })
  })
})

describe('it handles cases up to 999 decillion', function() {
  describe('CountVonCount("nine hundred and ninety-nine decillion and nine hundred and ninety-nine nonillion")', function() {
    var string = "nine hundred and ninety-nine decillion and nine hundred and ninety-nine nonillion";
    it('should return 9.999989999999999e+35', function() {
      CountVonCount(string);
      assert(CountVonCount(string) === 9.999989999999999e+35);
    })
  })
})

describe('CountVonCount("one hundred")', function() {
  var string = 'one hundred';
  it('should return 100', function() {
    CountVonCount(string);
    assert(CountVonCount(string) === 100);
  })
})

describe('edge cases', function() {
  describe('Fail case: CountVonCount("one milliona)"', function() {
    var string = "one milliona";
    it('should return false', function() {
      CountVonCount(string);
      assert(CountVonCount(string) === false);
    })
  })

  describe('Fail case with no space: CountVonCount("I took 100photos")', function() {
    var string = "I took 100photos";
    it('should return false', function() {
      CountVonCount(string);
      assert(CountVonCount(string) === false);
    })
  })
})