const HeavyComponent = () => {
  const expensiveCalculation = () => {
    let result = 0;
    // for loop: 100 million times
    for (let i = 0; i < 100000000; i++) {
      result += Math.sin(i) * Math.cos(i);
    }
    return result;
  };

  const computationResult = expensiveCalculation();

  return (
    <div className="p-6 bg-orange-100 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Heavy Component 1</h2>
      <p className="text-sm text-gray-600 my-2">
        This component took significant time to render due to heavy
        computational work {computationResult}
      </p>
      <img className="rounded-md" src="her_1.png" alt="her_1" />
    </div>
  );
};
export default HeavyComponent;
