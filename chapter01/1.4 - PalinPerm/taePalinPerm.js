function checkPalindromePermutation(string) {
  const trimmedStr = string.replace(' ', '').toLowerCase();

  const hashed = {};
  console.log(trimmedStr);
  for (let i = 0; i < trimmedStr.length; i++) {
    const alphabet = trimmedStr[i];

    if (hashed[alphabet]) {
      hashed[alphabet] += 1;
    } else {
      hashed[alphabet] = 1;
    }
  }

  console.log(hashed);

  let oddCount = 0;

  for (const prop in hashed) {
    if (hashed[prop] % 2 === 1) {
      oddCount++;
    }
  }

  // if (oddCount === 0 || oddCount === 1) {
  //   return true;
  // }

  // 명령형보다 선언형이 상대방의 가독성을 좀 더 배려한 솔루션이 될 수 있지 않을까
  // 가독성 리팩터링 체크!
  const isPalin = oddCount < 2

  return isPalin;
}

checkPalindromePermutation('tact coa');
console.log(checkPalindromePermutation('tact coa'));