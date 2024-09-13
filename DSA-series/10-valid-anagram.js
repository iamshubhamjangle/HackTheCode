// TC: O(N+M) Sc: O(N)
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const charCount = {};

  for (let i = 0; i < s.length; i++) {
    charCount[s[i]] = (charCount[s[i]] || 0) + 1;
  }

  for (let i = 0; i < t.length; i++) {
    if (!charCount[t[i]]) {
      return false;
    }
    charCount[t[i]]--;
  }

  return true;
};
