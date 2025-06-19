// Compares a person's age to yours and returns a string description
const myAge = 28;

function compareAge(name, age) {
  if (age > myAge) {
    return name + " is older than me.";
  } else if (age < myAge) {
    return name + " is younger than me.";
  } else {
    return name + " is the same age as me.";
  }
}

console.log(compareAge("Joel", 36));   // "Joel is older than me."
console.log(compareAge("Samuel", 24)); // "Samuel is younger than me."
console.log(compareAge("Lily", 28));   // "Lily is the same age as me."