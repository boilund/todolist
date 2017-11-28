let dogs = [
  'Fido',
  'Bixon',
  'Roger',
  'Lady',
  'Babe'
];

// a for...of loops are an easy way to iterate through arrays
for (let dog of dogs) {
  console.log(dog);
}

// a for loop is more complicated but more versitale (can loop parts on array etc)
for (let i = 0; i < dogs.length; i++) {
  console.log(dogs[i]);
}

// for loop that just loops through aset of numbers (no array involved)
console.log("Odd numbers from 1 to 100");
for (let i = 1; i < 100; i += 2) {
  console.log(i);
}

// i = i + 1;
// i += 1;
// i++;

// i = i - 1;
// i -= 1;
// i--;

// i = i + 2;
// i += 2;
