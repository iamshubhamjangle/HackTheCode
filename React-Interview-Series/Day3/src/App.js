function App() {
  const streetFoodList = [
    { name: "Aloo_Tikki_Chaat", src: "images/Aloo_Tikki_Chaat.png" },
    { name: "Chole_Bhaturey", src: "images/Chole_Bhaturey.png" },
    { name: "Dosa", src: "images/Dosa.png" },
    { name: "Kebab", src: "images/Kebab.png" },
    { name: "Momos", src: "images/Momos.png" },
    { name: "Pakoda", src: "images/Pakoda.png" },
    { name: "Pani_Puri", src: "images/Pani_Puri.png" },
    { name: "Pav_Bhaji", src: "images/Pav_Bhaji.png" },
    { name: "Samosa", src: "images/Samosa.png" },
    { name: "Vada_Pav", src: "images/Vada_Pav.png" },
  ];

  return (
    <div className="App">
      <h1>You would love ❤</h1>
      {streetFoodList.map((element, index) => {
        return (
          <div key={index}>
            <p>{element.name}</p>
            <img src={element.src} alt={element.name} />
          </div>
        );
      })}
    </div>
  );
}

export default App;
