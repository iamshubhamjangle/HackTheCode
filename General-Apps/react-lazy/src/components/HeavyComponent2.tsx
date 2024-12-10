import React, { useState, useEffect } from "react";

const HeavyComponent2 = () => {
  const [computationResult, setComputationResult] = useState<number | null>(
    null
  );

  useEffect(() => {
    const worker = new Worker(new URL("./worker.js", import.meta.url));

    worker.postMessage({ type: "expensiveCalculation" });

    worker.onmessage = (e) => {
      setComputationResult(e.data);
      worker.terminate();
    };

    return () => worker.terminate();
  }, []);

  return (
    <div className="p-6 bg-orange-100 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Heavy Component 2</h2>
      {computationResult === null ? (
        <p className="text-sm text-gray-600 my-2">Loading...</p>
      ) : (
        <>
          <p className="text-sm text-gray-600 my-2">
            This component took significant time to render due to heavy
            computational work. Computation Result: {computationResult}
          </p>
          <img className="rounded-md" src="her_1.png" alt="her_1" />
        </>
      )}
    </div>
  );
};

export default HeavyComponent2;
