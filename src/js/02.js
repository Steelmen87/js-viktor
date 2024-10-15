const student = [
    {name: "Bob", age: 22, isMarried: true, scores: 85},
    {name: "Alex", age: 22, isMarried: true, scores: 89},
    {name: "Nick", age: 22, isMarried: false, scores: 120},
    {name: "John", age: 22, isMarried: false, scores: 100},
]

function getLength() {
    return ` length ${this.length}`
}

Array.prototype.getLength = getLength

function digitalRoot(n) {
    while (n >= 10) { // Продолжаем, пока n не станет однозначным
        n = n.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0); // Суммируем цифры
    }
    return n;
}
console.log(digitalRoot(1657))
