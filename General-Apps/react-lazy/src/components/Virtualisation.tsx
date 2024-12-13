import React, { useState, useCallback } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const generateData = (start: number, end: number) => {
  return Array.from({ length: end - start }, (_, index) => ({
    id: start + index,
    title: `Card Title ${start + index}`,
    description: `This is a description for card ${start + index}`,
  }));
};

const Virtualisation = () => {
  const [items, setItems] = useState(() => generateData(0, 500));
  const totalItems = 10000;

  // Fetch more items when scrolling
  const fetchMoreData = useCallback(() => {
    const startIndex = items.length;
    const endIndex = Math.min(startIndex + 500, totalItems);
    const newItems = generateData(startIndex, endIndex);
    setItems((prevItems) => [...prevItems, ...newItems]);
  }, [items.length]);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">
        Virtualized Infinite Scroll Demo
      </h1>
      <InfiniteScroll
        dataLength={items.length}
        next={fetchMoreData}
        hasMore={items.length < totalItems}
        loader={<h4 className="text-center my-4">Loading more...</h4>}
        height={600}
        scrollableTarget="scrollableDiv"
      >
        <div id="scrollableDiv">
          {items.map((item) => (
            <Row key={item.id} item={item} />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

const Row = ({
  item,
}: {
  item: { id: number; title: string; description: string };
}) => {
  return (
    <div className="p-4 bg-orange-100 rounded-lg shadow-md mb-2">
      <h2 className="text-lg font-bold">{item.title}</h2>
      <p className="text-sm text-gray-600">{item.description}</p>
    </div>
  );
};

export default Virtualisation;
