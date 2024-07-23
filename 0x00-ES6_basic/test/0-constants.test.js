import { taskFirst, taskNext } from '../0x00-ES6_basic/0-constants';

describe('constants', () => {
  it('checks strings from a constant', () => {
    expect.hasAssertions();
    expect(taskFirst()).toBe('I prefer const when I can.');
  });

  it('combined strings from a constant', () => {
    expect.hasAssertions();
    expect(taskNext()).toBe('But sometimes let is okay');
  });
});
