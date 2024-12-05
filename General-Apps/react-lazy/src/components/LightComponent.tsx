import { useState } from "react";
import { Button } from "./ui/button";

const LightComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="p-6 bg-blue-100 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Light Component</h2>
      <p>Counter Value: {count}</p>
      <p className="text-sm text-gray-600 mt-2 space-x-2">
        <Button className="bg-blue-800" onClick={() => setCount((c) => c + 1)}>
          +
        </Button>
        <Button className="bg-blue-800" onClick={() => setCount((c) => c - 1)}>
          -
        </Button>
      </p>
    </div>
  );
};
export default LightComponent;
