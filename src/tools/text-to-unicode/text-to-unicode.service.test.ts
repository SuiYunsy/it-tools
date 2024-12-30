import { describe, expect, it } from 'vitest';
import { convertTextToUnicode, convertUnicodeToText } from './text-to-unicode.service';

describe('text-to-unicode', () => {
  describe('convertTextToUnicode', () => {
    it('a text string is converted to unicode representation', () => {
      expect(convertTextToUnicode('A')).toBe('\\u0041');
      expect(convertTextToUnicode('linke the string convert to unicode')).toBe('\\u006c\\u0069\\u006e\\u006b\\u0065\\u0020\\u0074\\u0068\\u0065\\u0020\\u0073\\u0074\\u0072\\u0069\\u006e\\u0067\\u0020\\u0063\\u006f\\u006e\\u0076\\u0065\\u0072\\u0074\\u0020\\u0074\\u006f\\u0020\\u0075\\u006e\\u0069\\u0063\\u006f\\u0064\\u0065');
      expect(convertTextToUnicode('')).toBe('');
    });
  });

  describe('convertUnicodeToText', () => {
    it('an unicode string is converted to its text representation', () => {
      expect(convertUnicodeToText('\\u0041')).toBe('A');
      expect(convertUnicodeToText('\\u006c\\u0069\\u006e\\u006b\\u0065\\u0020\\u0074\\u0068\\u0065\\u0020\\u0073\\u0074\\u0072\\u0069\\u006e\\u0067\\u0020\\u0063\\u006f\\u006e\\u0076\\u0065\\u0072\\u0074\\u0020\\u0074\\u006f\\u0020\\u0075\\u006e\\u0069\\u0063\\u006f\\u0064\\u0065')).toBe('linke the string convert to unicode');
      expect(convertUnicodeToText('')).toBe('');
    });
  });
});
