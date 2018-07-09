// The intent of this file is to reverse
// the string using built in functions.
const reverse = (arr) => {
  // splitting the string
  const spl = arr.split('');
  // reversing the string
  const rvr = spl.reverse('');
  // joining the string
  const str = rvr.join('');
  // returns the reversed string
  return str;
};

module.exports = reverse;
