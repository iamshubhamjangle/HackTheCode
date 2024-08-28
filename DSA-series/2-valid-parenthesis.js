var isValid = function (s) {
  const n = s.length;
  const stack = [];

  for (let i = 0; i < n; i++) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      stack.push(s[i]);
    } else {
      if (
        !stack.length ||
        (s[i] === ")" && stack[stack.length - 1] !== "(") ||
        (s[i] === "}" && stack[stack.length - 1] !== "{") ||
        (s[i] === "]" && stack[stack.length - 1] !== "[")
      ) {
        return false;
      }
      stack.pop();
    }
  }

  return stack.length === 0;
};

console.log(isValid("(){[]}"));
console.log(isValid("["));
