function isAlnum(char) {
  const code = char.charCodeAt(0);
  return (
    (code >= 48 && code <= 57) || // 0-9
    (code >= 65 && code <= 90) || // A-Z
    (code >= 97 && code <= 122) // a-z
  );
}

var isPalindrome = function (s) {
  let start = 0;
  let end = s.length - 1;

  while (start <= end) {
    while (start < end && !isAlnum(s[start])) {
      start++;
    }

    while (end > start && !isAlnum(s[end])) {
      end--;
    }

    if (s[start].toLowerCase() !== s[end].toLowerCase()) {
      return false;
    }

    start++;
    end--;
  }

  return true;
};
