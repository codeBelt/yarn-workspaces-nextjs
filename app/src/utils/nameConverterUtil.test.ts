import {pascalCaseIt} from "./nameConverterUtil";

describe('pascalCaseIt', () => {
  test('should do it', () => {
    expect(pascalCaseIt('robert is cool')).toBe('RobertIsCool');
  });
});
