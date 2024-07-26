export default class HolbertonCourse {
  constructor(name, length, student) {
    if (typeof name === 'string' && typeof length === 'number' && Array.isArray(student)) {
      this._name = name;
      this._length = length;
      this._student = student;
    } else {
      throw new TypeError('Invalid types: name must be a string, length must be a number, and student must be an array');
    }
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get student() {
    return this._student;
  }

  set name(name) {
    if (typeof name === 'string') {
      this._name = name;
    }
  }

  set length(length) {
    if (typeof length === 'number') {
      this._length = this.length;
    }
  }

  set student(student) {
    if (Array.isArray(student)) {
      this._student = student;
    }
  }
}
