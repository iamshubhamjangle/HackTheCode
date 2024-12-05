import { lazy, Suspense } from "react";
import LightComponent from "./LightComponent";
// import HeavyComponent from "./HeavyComponent";
const HeavyComponent = lazy(() => import("./HeavyComponent"));

const App = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">React Lazy Loading</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <LightComponent /> {/* 0.4s */}
        <Suspense
          fallback={
            <div className="h-64 bg-gray-200 animate-pulse p-2">Loading...</div>
          }
        >
          <HeavyComponent /> {/* 4s */}
        </Suspense>
      </div>
    </div>
  );
};

export default App;
