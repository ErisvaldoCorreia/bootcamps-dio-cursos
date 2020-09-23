// utilizando rest e spread operators

const sumArgs = (...args) => {
    return args.reduce((acc, val) => acc + val, 0);
}

console.log(sumArgs(5,2,1,8,3));

let arr1 = [2, 5, 6, 4]
let arr2 = [...arr1, 1, 3]

console.log([...arr1, 0, 0, 0, ...arr1]);
console.log(arr2.length);

// utilizando Destructuring
// Antes

var arr = ['valor1', 'valor2'];
var a = arr[0];
var b = arr[1];

console.log(a, b);

var obj = {
    name: 'Erisvaldo'
}

console.log(obj.name);

// Com o Destructuring

const [novoA, novoB] = [...arr]
const { name } = obj

console.log(novoA, novoB, name)