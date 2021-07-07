import React, { useEffect, useState } from "react";
import ah1 from './Imagenes/ah1.png'
import ah2 from './Imagenes/ah2.jpg'
import am1 from './Imagenes/am1.jpg'
import am2 from './Imagenes/am2.jpg'
import dh1 from './Imagenes/dh1.jpg'
import dh2 from './Imagenes/dh2.jpg'
import dm1 from './Imagenes/dm1.jpg'
import dm2 from './Imagenes/dm2.jpg'
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router";
const promiseItems = () => {
    return new Promise((resolve, reject) => {
      setTimeout(
        () =>
          resolve([ 
            { id: 1, stock: 5, nombre: "Adidas P1", img: ah1, descr: "Zapatillas adidas talle 44.", precio: 7500, cat: 'Hombre' },
            { id: 2, stock: 5, nombre: "Adidas P2", img: ah2, descr: "Zapatillas adidas talle 44.", precio: 5500, cat: 'Hombre' },
            { id: 3, stock: 5, nombre: "Adidas P3", img: am1, descr: "Zapatillas adidas talle 44.", precio: 5700, cat: 'Mujer' },
            { id: 4, stock: 5, nombre: "Adidas P4", img: am2, descr: "Zapatillas adidas talle 44.", precio: 5600, cat: 'Mujer' },
            { id: 5, stock: 5, nombre: "DC Shoes V1", img: dh1, descr: "Zapatillas DC Shoes talle 44.", precio: 8400, cat: 'Hombre' },
            { id: 6, stock: 5, nombre: "DC Shoes V2", img: dh2, descr: "Zapatillas DC Shoes talle 44.", precio: 3500, cat: 'Hombre' },
            { id: 7, stock: 5, nombre: "DC Shoes V3", img: dm1, descr: "Zapatillas DC Shoes talle 44.", precio: 5500, cat: 'Mujer' },
            { id: 8, stock: 5, nombre: "DC Shoes V4", img: dm2, descr: "Zapatillas DC Shoes talle 44.", precio: 5700, cat: 'Mujer' },
          ]),
        2000
      );
    });
  };
 


export const ItemDetailContainer = props => {

    const [productos, setProducto] = useState([]);
    const consultarPromesa = () => {
        promiseItems().then((data) => {
          const dataFiltrada = data.filter((producto) => producto.id == id);
          setProducto(dataFiltrada);
        });
      };
      const { id } = useParams();
      useEffect(() => {
        consultarPromesa();
      }, []);


    return <>
    {productos.map((producto) => (
              <ul  style={{listStyle:'none', display:'inline-block'}}>
              <li key={producto.id}><ItemDetail product={producto}/></li>
              </ul>
            ))}
    
    </>
}
