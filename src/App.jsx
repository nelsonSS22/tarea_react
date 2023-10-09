import { useEffect, useState } from "react";
import "./App.css";
import Card from "./Componentes/Card";
import Nav from "./Componentes/Nav";

function App() {
  // La variable data es la que va a almacenar los datos de "stays.json" y setData nos ayudará a guardar esos datos en esa variable. Es necesario que inicialicemos esa variable como un array vacío para evitar errores.
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  // Función para traer los datos de "stays.json".
  const getData = async () => {
    // Esta sentencia try-catch sirve para manejar los errores que se podrían generar al importar los datos de "stays.json".
    try {
      const res = await fetch("stays.json");
      const resJson = await res.json();
      // Aquí guardamos los datos de "stays.json" en la variable data.
      setData(resJson);
      setFilteredData(resJson);
    } catch (error) {
      console.log(error);
    }
  };
  const filterData = (city, guests) => {
    const filtered = data.filter((stay) => {
      return (
        stay.city.toLowerCase().includes(city.toLowerCase()) &&
        stay.maxGuests >= parseInt(guests, 10)
      );
    });
    setFilteredData(filtered);
  };
  // Este Hook te va a ejecutar la función getData cada vez que la página se renderice.
  useEffect(() => {
     getData();
  }, []);

 return (
    <div className="App">
      <Nav filterData={filterData} />
      <div><h1>Stays in Finland</h1></div>
      <div className="stays"><h2>12+ stays</h2></div>
      
      <div className="row">
      {filteredData.map((stay, index) => (
          <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <Card
              superHost={stay.superHost}
              title={stay.title}
              description={`${stay.city}, ${stay.country}`}
              rating={stay.rating}
              maxGuests={stay.maxGuests}
              type={`${stay.type},${stay.beds}`}
              imageUrl={stay.photo}
              className="Card"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;