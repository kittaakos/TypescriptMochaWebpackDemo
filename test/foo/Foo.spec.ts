import { expect } from 'chai';

describe('foo', () => {

  describe('baz', function() {
    
    it('ad1', () => {
      expect(true).to.be.true;
    });

    it('ad2', () => {
      expect(true).to.be.true;
    });

    it('FIXME: fix the assertion', () => {
      // TODO change false to true or the oder way around.
      expect(true).to.be.false;
    });

  });
 
});