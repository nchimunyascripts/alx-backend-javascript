export default class Airport {
  constructor(name, code) {
    if (typeof name !== 'string' && typeof code !== 'string') {
      throw new Error('Name and Code must be strings');
    }

    this._name = name;
    this._code = code;
  }

  toString() {
    return `${this._code}`;
  }
}
