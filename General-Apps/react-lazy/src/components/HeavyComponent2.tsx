const HeavyComponent2 = () => {
  return (
    <div className="p-6 bg-orange-100 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Heavy Component</h2>
      <p className="text-sm text-gray-600 my-2">
        This component took significant time to render due to heavy
        computational work.
      </p>
      <img className="rounded-md" src="her_2.png" alt="her_2" />
    </div>
  );
};
export default HeavyComponent2;
