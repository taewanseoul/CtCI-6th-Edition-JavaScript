var stringRotation = function(string1, string2) {
  if (s.length !== goal.length) {
    return false;
  }

  const doubleS = s + s;

  if (doubleS.includes(goal)) {
    return true;
  }

  return false;
};

var stringRotation = function(string1, string2) {
  if (s.length !== goal.length) {
    return false;
  }

  return string1.repeat(2).includes(string2);
};

// Approaches:
// a) sorting chars before comparing -> know if it is permutation but not know if it is in the right order
// b) look for starting character before moving around and rotating -> starting characters might repeat
// c) break string 2 into a front and back, and ensure that front tallies with isSubstring before doing isSubstring

// Test
console.log(stringRotation('waterbottle', 'erbottlewat'), true);
console.log(stringRotation('waterbottle', 'erbotlewatt'), false);
console.log(stringRotation('aaata', 'aataa'), true);






