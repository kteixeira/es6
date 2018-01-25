const numbers = [1, 2, 3, 4, 5];

console.log(numbers.filter(n => n > 4));
console.log(numbers.reduce((acum, current) => acum + current, 10));

console.log(numbers.find(n => n === 3));

let [a, b, c, d, e, f = 0] = numbers;
console.log(a, b, c, d, e, f);

[a, b, ...c] = numbers;
console.log(a, b, c);

[a, , , d, e, f = 0] = numbers;
console.log(a, d, e, f);

[b, a] = [a, b];
console.log(a, b);

const otherNumbers = [10, 20, 30, numbers];
console.log(otherNumbers);

const otherNumbers2 = [10, 20, 30, ...numbers];
console.log(otherNumbers2);

const set = new Set();
set.add(1).add(2).add(3);
console.log(set.has(1), set.has(20)); //outros métodos, pesquisar dps

const map = new Map();
map.set('banana', 10);
console.log(map.has('banana'), map.has('test'));
