let name = prompt('What\'s your name?');
if (name == 'Thomas' || name == 'Billie') {
  alert('That\'s a superpretty name!');
  alert('The best name in the world!');
} else if (name == 'Sofia') {
  alert('Sofia is a classic name!');
} else if (name == 'Kalle' || name == 'Kajsa') {
  alert('Som i Anka?');
} else {
  alert(name + ' is a nice name!');
}


// Body Mass Index Calculator

// Ask the user for weight and height
let weight = prompt('Vad är din vikt? (kg)');
let height = prompt('Vad är din längd? (cm)');

// Convert height from cm to meter
height = height / 100;

// Calculate bmi
let bmi = weight / (height * height);

alert('Din BMI är ' + bmi.toFixed(1));

let weightClass;
if (bmi < 18.5) {
  weightClass = 'Ät lite mer god mat!';
} else if (bmi < 25) {
  weightClass = 'Bra vikt där!';
} else if (bmi < 30) {
  weightClass = 'Du är snygg som du är!';
} else {
  weightClass = 'Det är kul med mat. Det är vackert i skogen också. Gå lite!';
}

alert('Du är ' + weightClass);