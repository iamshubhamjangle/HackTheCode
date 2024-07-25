The this keyword refers to the context where a piece of code, such as a function's body, is supposed to run. Most typically, it is used in object methods, where this refers to the object that the method is attached to, thus allowing the same method to be reused on different objects.

```js
function budget() {
  console.log(this.tax);
  console.log(this.debt);
  console.log(this.assets);
}
```

### Binding Objects to functions in Javascript

<!-- 1. Default binding -->

```js
function patao() {
  console.log(this.crush + " paat gyi haiiiii!!!!!");
}

var crush = "zoya";

patao(); // "zoya"    ---> Default binding
```

<!-- 2. Implicit binding -->

```js
function patao() {
  console.log(this.crush + " paat gyi haiiiii!!!!!");
}

var crush = "zoya";
var aditya = {
  crush: "geet",
  patao: patao,
};

patao(); // "zoya"    ---> Default binding
aditya.patao(); //"geet" ---> Implicit binding
```

<!-- 3. Explicit binding - call, bind, apply -->

These three functions help to explicitly set the value of “this” to the object we want.

```js
function news(bf) {
  console.log(`Bhai ${this.gf} aur ${bf} ka breakup hogaya`);
}

const hardik = {
  gf: "Natasa",
};

news.call(hardik, "hardik"); // call
news.apply(hardik, ["hardik"]); // apply
const bindedNews = news.bind(hardik); // bind
bindedNews("hardik");
```

<!-- 4. new binding -->

```js
function Name(first, last) {
  this.first = first;
  this.last = last;
}
var obj = new Name("please", "follow"); // new binding
console.log(obj.first + "  " + obj.last);
```
