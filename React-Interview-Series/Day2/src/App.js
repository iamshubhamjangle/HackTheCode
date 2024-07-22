function App() {
  return (
    <div className="App">
      <Navbar />
      <ProductList />
    </div>
  );
}

export default App;

function Navbar() {
  return <nav>Hello Coders!</nav>;
}

function ProductList() {
  return (
    <ul>
      <li style={{ backgroundColor: "orange" }}>Product 1</li>
      <li id="second">Product 2</li>
      <li className="bg">Product 3</li>
      <li>Product 4</li>
    </ul>
  );
}
