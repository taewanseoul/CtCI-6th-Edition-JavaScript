var strComp = function(string) {
  let result = "";
  let charCount = 0;

  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    const charNext = string[i + 1];

    if (!charNext) {
      charCount++;
    }

    if (char === charNext) {
      charCount++;
    }

    if (char !== charNext) {
      result += char;
      result += charCount.toString();
      charCount = 0;
    }
  }

  return result;
};

// Test
console.log('aaaaaa', strComp('aaaaaa'), 'a6');
console.log('aabcccccaaa', strComp('aabcccccaaa'), 'a2b1c5a3');