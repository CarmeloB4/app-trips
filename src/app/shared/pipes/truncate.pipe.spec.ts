/* tslint:disable:no-unused-variable */
import { TruncatePipe } from './truncate.pipe';

describe('Pipe: Truncatee', () => {
  let pipe: TruncatePipe;

  beforeEach(() => {
    pipe = new TruncatePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should truncate a string longer than the limit', () => {
    const value = 'This is a long string that needs to be truncated';
    const limit = 20;
    const expectedResult = 'This is a long strin...';
    expect(pipe.transform(value, limit)).toBe(expectedResult);
  });

  it('should not truncate a string shorter than the limit', () => {
    const value = 'Short string';
    const limit = 20;
    expect(pipe.transform(value, limit)).toBe(value);
  });

  it('should use the default limit if no limit is provided', () => {
    const value = 'This is a long string that needs to be truncated';
    const expectedResult = 'This is a long strin...';
    expect(pipe.transform(value)).toBe(expectedResult);
  });

  it('should handle an empty string', () => {
    const value = '';
    const limit = 20;
    expect(pipe.transform(value, limit)).toBe(value);
  });

  it('should handle a negative limit by using the default limit', () => {
    const value = 'This is a long string that needs to be truncated';
    const limit = -10;
    const expectedResult = 'This is a long strin...';
    expect(pipe.transform(value, limit)).toBe(expectedResult);
  });
});
