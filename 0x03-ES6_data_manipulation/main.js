function getListStudents() {
    return [
        {id: 1, firstName: 'Guillaume', location: 'San Francisco'},
        {id: 2, firstName: 'James', location: 'Columbia'},
        {id: 5, firstName: 'Serena', location: 'San Francisco'},
    ];
}

function getListStudentIds(params) {
    return (!Array.isArray(params)) ? [] : params.map(key => key.id);
}

function getStudentsByLocation(students, city) {
    return students.filter((location) => location.location === city)
}

function getStudentIdsSum(args) {
    return args.reduce((current, next) => current + next.id, 0);
}

function updateStudentGradeByCity(args, city, newGrades) {
    return args.filter((el) => el.location == city)
    .map((person) => {
        const grades = newGrades.filter(el => el.studentId === person.id);
        const grade = grades.length ? grades[0].grade : 'N/A';
        return {
            ...person,
            grade
        };
    })
}

function createInt8TypedArray(length, position, value) {
    if (position >= length) throw Error('Position')
    const buffer = new ArrayBuffer(length);
    let x = new DataView(buffer, 0, length);
    let y = new Int8Array(buffer);
    y[position] = value;
    return x;
}

function setFromArray(args) {
    return new Set(args);
}

function hasValuesFromArray(set, array) {
    for (const iterator of array) {
        if (!set.has(iterator)) return false;
    }
    return true
}

function cleanSet(set, startString) {
    let x = '';
    if (!startString || !startString.length) return x;
    for (const iterator of set) {
        if (iterator && iterator.startsWith(startString)) {
            x += `${iterator.slice(startString.length)}-`
        }
    }
    return x.slice(0, x.length - 1)
}

console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), 'bon'));
console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), ''));

function groceriesList(){
    const array = [
        ['Apples', 10],
        ['Tomatoes', 10],
        ['Pasta', 1],
        ['Rice', 1],
        ['Banana', 5]
    ];

    const map = new Map();
    for (const i of array) {
        map.set(i[0], i[1])
    }
    return map;
}

const updateUniqueItems = (map) => {
    if (!(map instanceof Map)) throw new Error('Cannot process')
    map.forEach((value, key) => {
        if (value === 1) map.set(key, 100)
    });
}

const weakMap = new WeakMap();

const queryAPI = (params) => {
    let count = weakMap.get(params) || 0;
    weakMap.set(params, count -= -1)
    if (params >= 5) throw new Error('Endpoint load is high');
    return count;
}

const endpoint = { protocol: 'http', name: 'getUsers' };
// weakMap.get(endpoint);

// queryAPI(endpoint);
// console.log(weakMap.get(endpoint));

// queryAPI(endpoint);
// console.log(weakMap.get(endpoint));

// queryAPI(endpoint);
// queryAPI(endpoint);
// queryAPI(endpoint);
// queryAPI(endpoint);