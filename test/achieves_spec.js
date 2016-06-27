import {expect} from 'chai';
import {createAchieves} from '../src/static/js/createAchieves';

describe('Achievement module', () => {
  it('shoud throw an error if achieves count exceed 100', () => {
    const containerMock = {};
    let achievesForAdding = [0,0,0];
    achievesForAdding.length = 101;

    let calling = (func) => {
      return {
        withArgs: (cont, achieves) => {
          return () => {
            func.call(null, cont, achieves);
          };
        }
      };
    };

    expect(calling(createAchieves)
      .withArgs(containerMock, achievesForAdding))
      .to.throw(/\bSorry, count of achieves exceed available value\b/);
  });
});
