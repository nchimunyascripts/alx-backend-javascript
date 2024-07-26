export default class HolbertonCourse {
  constructor(name, length, student) {
    this._name = name;
    this._length = length;
    this._student = student;
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
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = name;
  }

  set length(length) {
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = this.length;
  }

  set student(student) {
    if (!Array.isArray(student)) {
      throw new TypeError('Student must be an array');
    }
    if (student.some((student) => typeof student !== 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._student = student;
  }
}
