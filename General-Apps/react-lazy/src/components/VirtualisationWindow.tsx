/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";

const generateData = (start: number, end: number) => {
  return Array.from({ length: end - start }, (_, index) => ({
    id: start + index,
    title: `Card Title ${start + index}`,
    description: `This is a description for card ${start + index}`,
  }));
};

const Row = ({
  index,
  style,
  data,
}: {
  index: number;
  style: React.CSSProperties;
  data: { items: Array<{ title: string; description: string }> };
}) => {
  const item = data.items[index];
  return (
    <div style={style} className="p-4 bg-orange-100 rounded-lg shadow-md mb-2">
      <h2 className="text-lg font-bold">{item.title}</h2>
      <p className="text-sm text-gray-600">{item.description}</p>
    </div>
  );
};

const VirtualisationWindow = () => {
  const [items, setItems] = useState(() => generateData(0, 100000));

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">
        Virtualized Infinite Scroll Demo
      </h1>
      <div style={{ height: 600, width: "100%" }}>
        <AutoSizer>
          {({ height, width }) => (
            <List
              height={height}
              width={width}
              itemCount={items.length}
              itemSize={84} // Approximate height of each row
              itemData={{ items }}
            >
              {Row}
            </List>
          )}
        </AutoSizer>
      </div>
    </div>
  );
};

export default VirtualisationWindow;
