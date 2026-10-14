import LZString from "lz-string";

// Code taken from the codesandbox NPM package
// https://www.npmjs.com/package/codesandbox
const compress: (input: string) => string = (input) => {
  return LZString.compressToBase64(input)
    .replace(/\+/g, "-") // Convert '+' to '-'
    .replace(/\//g, "_") // Convert '/' to '_'
    .replace(/=+$/, ""); // Remove ending '='
};

const encodeParams: (parameters: object) => string = (parameters) =>
  compress(JSON.stringify(parameters));

export default encodeParams;
