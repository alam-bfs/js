let assert = require('chai').assert;
let Calc = require('./calc');

describe('testing basic calculator', () =>{

  it('additon of 2 and 2', () => {
    assert.equal(Calc.add(2, 2), 4, 'add test passed');
  })

  it('subtract of 2 and 2', () => {
    assert.equal(Calc.sub(2, 2), 0, 'subtract test passed');
  })

  it('multiply of 2 and 2', () => {
    assert.equal(Calc.multiply(2, 2), 4, 'multiply test passed');
  })

  it('divide of 2 and 2', () => {
    assert.equal(Calc.divide(2, 2), 1, 'divide test passed');
  })

})