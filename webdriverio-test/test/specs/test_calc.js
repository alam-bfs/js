let assert = require('chai').assert;

describe('testing basic calculator', ()=>{

  it('additon of 2 and 2', ()=> {
    const result = 2 + 2;
    assert.equal(result, 4, 'add test passed');
  })

  it('subtract of 2 and 2', () => {
    const result = 2 - 2;
    assert.equal(result, 0, 'subtract test passed');
  })

  it('multiply of 2 and 2', () => {
    const result = 2 * 2;
    assert.equal(result, 4, 'multiply test passed');
  })

  it('divide of 2 and 2', () => {
    const result = 2 / 2;
    assert.equal(result, 1, 'divide test passed');
  })

})