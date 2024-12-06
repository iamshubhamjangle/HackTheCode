import { lazy, Suspense } from "react";

import LightComponent from "./LightComponent";
import IntersectionSuspense from "./IntersectionSuspense";
// import IntersectionSuspense from "./IntersectionSuspense";

/* Normal Imports */
// import HeavyComponent from "./HeavyComponent";
// import HeavyComponent2 from "./HeavyComponent2";
// import HeavyComponent3 from "./HeavyComponent3";

/** Lazy Imports */
const HeavyComponent = lazy(() => import("./HeavyComponent"));
const HeavyComponent2 = lazy(() => import("./HeavyComponent2"));
const HeavyComponent3 = lazy(() => import("./HeavyComponent3"));

// Main Dashboard Component
const App2 = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">React Lazy Loading</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <LightComponent />
        <LightComponent />
        <LightComponent />
        <LightComponent />
        <IntersectionSuspense
          fallback={
            <div className="h-64 bg-gray-200 animate-pulse p-2">
              Loading Heavy Component 1
            </div>
          }
        >
          <HeavyComponent />
        </IntersectionSuspense>
        <LightComponent />
        <LightComponent />
        <LightComponent />
        <IntersectionSuspense
          fallback={
            <div className="h-64 bg-gray-200 animate-pulse p-2">
              Loading Heavy Component 1
            </div>
          }
        >
          <HeavyComponent2 />
        </IntersectionSuspense>
        <LightComponent />
        <LightComponent />
        <LightComponent />
        <IntersectionSuspense
          fallback={
            <div className="h-64 bg-gray-200 animate-pulse p-2">
              Loading Heavy Component 1
            </div>
          }
        >
          <HeavyComponent3 />
        </IntersectionSuspense>
      </div>
    </div>
  );
};

export default App2;
