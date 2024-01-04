export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  // getters
  get code() { return this._code; }

  get name() { return this._name; }

  // setters
  set code(newValue) { this._code = newValue; }

  set name(newValue) { this._name = newValue; }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
