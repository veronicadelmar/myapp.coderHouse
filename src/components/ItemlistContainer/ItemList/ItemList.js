import React, { useEffect, useState } from "react";
import { Item } from "../Item";
const promiseItems = () => {
  return new Promise((resolve, reject) => {
    //Aca deberia ir la consulta a la API
    setTimeout(
      () =>
        resolve([
          { id: 1, stock: 5, nombre: "Adidas" },
          { id: 2, stock: 10, nombre: "Nike" },
          { id: 3, stock: 5, nombre: "Puma" },
          { id: 4, stock: 0, nombre: "Reebook" },
          { id: 5, stock: 2, nombre: "DC Shoes" },
        ]),
      100
    );
  });
};
export const ItemList = () => {
  const [productos, setProductos] = useState([]);

  const consultarPromesa = () => {
    promiseItems().then((data) => {
      const dataFiltrada = data.filter((producto) => producto.stock > 0);
      setProductos(dataFiltrada);
    });
  };

  useEffect(() => {
    consultarPromesa();
  }, []);

  return (
    <>
      {productos.length === 0 ? (
        <h1>Cargando...</h1>
      ) : (
        <>
          <ul style={{display:'flex'}} >
            {productos.map((producto) => (
              <li style={{listStyle:'none'}} key={producto.id}><Item array={producto}/></li>
            ))}
          </ul>
          
        </>
      )}
    </>
  );
};
