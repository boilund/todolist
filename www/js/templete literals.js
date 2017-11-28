// Classic strings
let x = 'This is a string';
let y = "This is another string";

// Templete literals
let greeting = 'Hello!';
let bye = 'See ya\' soon!';

function even(x) {
  return x % 2 == 0;
}

let z = `
  ${greeting}
  Let's write something cool here!
  We can write several lines in a template literal!
  ${bye}
  p.s. I forgot to tell you that 2 + 2 is ${2 + 2}.
  Is that number even? ${even(2 + 2)} that!
`;

console.log(x);
console.log(y);
console.log(z);
