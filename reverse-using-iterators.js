// The intent of this file is to reverse the string using iterators (for, foreach)
const reverse = (arr) => {
  let str = '';
  const len = arr.length;
  for (let i = len - 1; i >= 0; i -= 1) {
    str += arr[i];
  }
  return str;
};

module.exports = reverse;
