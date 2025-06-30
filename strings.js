/**
 * @param {string} str
 * @param {number} k
 * @param {string} fill
 * @returns {string[]}
 */

const divideString = (str, k, fill) => {
  let result = [];
  for (let i = 0; i < str.length; i += k) {
    let chunk = str.slice(i, i + k);
    if (chunk.length < k) {
      chunk = chunk + fill.repeat(k - chunk.length);
    }
    result.push(chunk);
  }
  return result;
};
// console.log(divideString("abcdefg", 3, "x"));

/**
 * @param {number[]} arr
 * @param {number} target
 * @returns {number[]}
 */
const toSum = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] + arr[i + j + 1] === target) {
        return [i, i + j + 1];
      }
    }
  }
};
// console.log(toSum([2, 5, 5, 11], 10));

/**
 * @param {string} s
 * @returns {number}
 */
const romanToInteger = (s) => {
  const romans = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let totalSum = 0;
  for (let i = 0; i < s.length; i++) {
    const curr = romans[s[i]];
    const next = romans[s[i + 1]];
    if (next && curr < next) {
      totalSum += next - curr;
      i++; // skip next character
    } else {
      totalSum += curr;
    }
  }
  return totalSum;
};

// Example usage:
// console.log(romanToInteger("MCMXCIV")); // output = 1994

/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function (strs) {
  if (!strs.length) return "";
  if (strs.some((s) => s.length === 0)) return "";
  let prefix = "";
  for (let i = 0; i < strs[0].length; i++) {
    const char = strs[0][i];
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== char) {
        return prefix;
      }
    }
    prefix += char;
  }
  return prefix;
};

console.log(longestCommonPrefix(["flower", "flower", "flower", "flower"])); // expected = "", output = "undefined"
console.log(longestCommonPrefix(["flower", "flow", "flight"]));
