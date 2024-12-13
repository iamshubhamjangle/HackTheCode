/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";

const generateData = (start: number, end: number) => {
  return Array.from({ length: end - start }, (_, index) => ({
    id: start + index,
    title: `Card Title ${start + index}`,
    description: `This is a description for card ${start + index}`,
  }));
};

const Virtualisation = () => {
  const [items, setItems] = useState(() => generateData(0, 100000)); // Generate initial data for virtualization

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">
        Virtualized Infinite Scroll Demo
      </h1>
      <div style={{ height: 600, overflowY: "auto" }}>
        {items.map((item, index) => (
          <Row key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

const Row = ({ item }: { item: { title: string; description: string } }) => {
  return (
    <div className="p-4 bg-orange-100 rounded-lg shadow-md mb-2">
      <h2 className="text-lg font-bold">{item.title}</h2>
      <p className="text-sm text-gray-600">{item.description}</p>
    </div>
  );
};

export default Virtualisation;
