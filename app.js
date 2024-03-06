// {1,2,3,4}

// 'ref'

// a value of true for the first key and false for the second

const hasDuplicate = (arr) => new Set(arr).size !== arr.length;

const vowelCount = (str) => {
  const vowels = "aeiou";
  const map = new Map();
  for (let char of str) {
    const lowerChar = char.toLowerCase();
    if (vowels.includes(lowerChar)) {
      if (map.has(lowerChar)) {
        map.set(lowerChar, map.get(lowerChar) + 1);
      } else {
        map.set(lowerChar, 1);
      }
    }
  }
  return map;
};
