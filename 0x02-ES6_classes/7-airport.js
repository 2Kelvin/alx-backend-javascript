export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  get code() { return this._code; }

  get name() { return this._name; }

  set code(newValue) { this._code = newValue; }

  set name(newValue) { this._name = newValue; }

  toString() {
    return `[Object ${this._code}]`;
  }
}
