function convertTextToUnicode(text: string): string {
  return text.split('').map(value => `\\u${value.charCodeAt(0).toString(16).padStart(4, '0')}`).join('');
}

function convertUnicodeToText(unicodeStr: string): string {
  return unicodeStr.replace(/\\u([\dA-Fa-f]{4})/g, (match, hex) => String.fromCharCode(Number.parseInt(hex, 16)));
}

export { convertTextToUnicode, convertUnicodeToText };
