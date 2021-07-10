import React, { useEffect, useState } from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import ItemCount from './ItemCount';
import { ItemList } from './ItemList/ItemList';
import { useParams } from "react-router-dom";
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import ah1 from '../ItemDetailContanier/Imagenes/ah1.png'
import ah2 from '../ItemDetailContanier/Imagenes/ah2.jpg'
import am1 from '../ItemDetailContanier/Imagenes/am1.jpg'
import am2 from '../ItemDetailContanier/Imagenes/am2.jpg'
import dh1 from '../ItemDetailContanier/Imagenes/dh1.jpg'
import dh2 from '../ItemDetailContanier/Imagenes/dh2.jpg'
import dm1 from '../ItemDetailContanier/Imagenes/dm1.jpg'
import dm2 from '../ItemDetailContanier/Imagenes/dm2.jpg'


const promiseItems = () => {
  return new Promise((resolve, reject) => {
    //Aca deberia ir la consulta a la API
    const listado = [
      { id: 1, stock: 5, nombre: "Adidas P1", img: ah1, descr: "Zapatillas adidas talle 44.", precio: 7500, cat: 'Hombre' },
      { id: 2, stock: 5, nombre: "Adidas P2", img: ah2, descr: "Zapatillas adidas talle 44.", precio: 5500, cat: 'Hombre' },
      { id: 3, stock: 5, nombre: "Adidas P3", img: am1, descr: "Zapatillas adidas talle 44.", precio: 5700, cat: 'Mujer' },
      { id: 4, stock: 5, nombre: "Adidas P4", img: am2, descr: "Zapatillas adidas talle 44.", precio: 5600, cat: 'Mujer' },
      { id: 5, stock: 5, nombre: "DC Shoes V1", img: dh1, descr: "Zapatillas DC Shoes talle 44.", precio: 8400, cat: 'Hombre' },
      { id: 6, stock: 5, nombre: "DC Shoes V2", img: dh2, descr: "Zapatillas DC Shoes talle 44.", precio: 3500, cat: 'Hombre' },
      { id: 7, stock: 5, nombre: "DC Shoes V3", img: dm1, descr: "Zapatillas DC Shoes talle 44.", precio: 5500, cat: 'Mujer' },
      { id: 8, stock: 5, nombre: "DC Shoes V4", img: dm2, descr: "Zapatillas DC Shoes talle 44.", precio: 5700, cat: 'Mujer' },
    ]
    setTimeout(
      () =>
        resolve(listado),
      2000
    );
  });
};
export const ItemListContainer = () => {
  const [dataToShow, setDataToShow] = useState([]);
  const [dataToShowStock, setDataToShowStock] = useState([]);
  const { categoryID } = useParams();

  const ejecutarEjercicio = () => {
    promiseItems().then((data) => {
      
        const dataFiltrada = data.filter(element => element.cat === categoryID);
        setDataToShow(dataFiltrada);
        const dataFiltradaStock = data.filter(element => element.stock > 0);
        setDataToShowStock(dataFiltradaStock);
    });
  };

  useEffect(() => {
    ejecutarEjercicio();
  }, [categoryID]);
console.log(categoryID);

  return (
    <React.Fragment>
        <CssBaseline /> 
        {categoryID == undefined ?

         <ItemList item={dataToShowStock}/>
        : <ItemList item={dataToShow}/>
      }    
        
    </React.Fragment>
  );
}
