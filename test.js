import assert from 'power-assert';
import getHasTouch from '.';

describe('getHasTouch', () => {
  it('node env', () => {
    assert(!getHasTouch());
  });
});
