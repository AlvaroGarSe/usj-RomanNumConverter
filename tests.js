// tests.js

// Use Chai's expect for assertions
const expect = chai.expect;

describe('integerToRoman', function() {
  it('should convert 1 to "I"', function() {
    expect(integerToRoman(1)).to.equal('I');
  });

  it('should convert 4 to "IV"', function() {
    expect(integerToRoman(4)).to.equal('IV');
  });

  it('should convert 8 to "VIII"', function() {
    expect(integerToRoman(8)).to.equal('VIII');
  });

  it('should convert 9 to "IX"', function() {
    expect(integerToRoman(9)).to.equal('IX');
  });

  it('should convert 44 to "XLIV"', function() {
    expect(integerToRoman(44)).to.equal('XLIV');
  });

  it('should convert 3999 to "MMMCMXCIX"', function() {
    expect(integerToRoman(3999)).to.equal('MMMCMXCIX');
  });
  
});

describe('romanToInteger', function() {
  it('should convert "V" to 5', function() {
    expect(romanToInteger('V')).to.equal(5);
  });

  it('should convert "XC" to 90', function() {
    expect(romanToInteger('XC')).to.equal(90);
  });

  it('should convert "DC" to 900', function() {
    expect(romanToInteger('DCC')).to.equal(700);
  });

  it('should convert "MMMCMXCIX" to 3999', function() {
    expect(romanToInteger('MMMCMXCIX')).to.equal(3999);
  });

  it('should convert "mcmxc" to 1990', function() {
    expect(romanToInteger('mcmxc')).to.equal(1990);
  });

});

describe('Out of Bounds & Constraint testing', function() {
  it('should throw an error for numbers less than 1', function() {
    expect(() => integerToRoman(0)).to.throw("The number must be between 1 and 3999.");
  });

  it('should throw an error for numbers more than 39999', function() {
    expect(() => integerToRoman(4000)).to.throw("The number must be between 1 and 3999.");
  });

  it('should throw an error for negative numbers', function() {
    expect(() => integerToRoman(-5)).to.throw("The number must be between 1 and 3999.");
  });

  // it('should throw an error for float numbers', function() {
  //  expect(() => integerToRoman(10.5)).to.throw("Please enter a valid integer number.");
  // });
});

describe('Validation & Edge Cases', function() {
  it('should throw an error for roman numbers with a repetition of more that 3 like "XXXX"', function() {
    expect(() => romanToInteger('XXXX')).to.throw("The Roman numeral is not in canonical form.");
  });

  it('should throw an error for invalid subtractions like "IIV"', function() {
    expect(() => romanToInteger('IIV')).to.throw("The Roman numeral is not in canonical form.");
  });

  it('should throw an error for invalid characters', function() {
    expect(() => romanToInteger('X12')).to.throw("The Roman numeral contains invalid characters.");
  });

  it('should throw an error for an empty input', function() {
     expect(() => romanToInteger('')).to.throw("Input must be a valid Roman numeral.");
  });
});
