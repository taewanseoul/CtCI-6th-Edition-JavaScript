var oneAway = function(string1, string2) {
  const freq = {};

  for (let i = 0; i < string1.length; i++) {
    const char = string1[i];

    if (freq[char]) {
      freq[char]++;
    }

    freq[char] = 1;
  }

  for (let i = 0; i < string2.length; i++) {
    const char = string2[i];

    if (freq[char]) {
      freq[char]--;
    } else {
      freq[char] = 1;
    }
  }

  let editCount = 0;

  for (const prop in freq) {
    if (freq[prop] > 1) {
      return false;
    }

    if (freq[prop] === 1) {
      editCount++;
    }
  }

  if (editCount <= 2) {
    return true;
  }

  return false;
};


// Test
console.log(oneAway('pale', 'ple'), true);
console.log(oneAway('pales', 'pale'), true);
console.log(oneAway('pale', 'bale'), true);
console.log(oneAway('pale', 'bake'), false);