import React, { useEffect, useState } from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import ItemCount from './ItemCount';
import { ItemList } from './ItemList/ItemList';
import { useParams } from "react-router-dom";
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

const promiseItems = () => {
  return new Promise((resolve, reject) => {
    //Aca deberia ir la consulta a la API
    const listado = [
      { id: 1, stock: 5, nombre: "Adidas P1", descr: "Zapatillas adidas talle 44.", precio: 7500, type: 'Hombre' },
      { id: 2, stock: 5, nombre: "Adidas P2", descr: "Zapatillas adidas talle 44.", precio: 5500, type: 'Hombre' },
      { id: 3, stock: 5, nombre: "Adidas P3",  descr: "Zapatillas adidas talle 44.", precio: 5700, type: 'Mujer' },
      { id: 4, stock: 5, nombre: "Adidas P4", descr: "Zapatillas adidas talle 44.", precio: 5600, type: 'Mujer' },
      { id: 5, stock: 5, nombre: "DC Shoes V1", descr: "Zapatillas DC Shoes talle 44.", precio: 8400, type: 'Hombre' },
      { id: 6, stock: 5, nombre: "DC Shoes V2", descr: "Zapatillas DC Shoes talle 44.", precio: 3500, type: 'Hombre' },
      { id: 7, stock: 5, nombre: "DC Shoes V3", descr: "Zapatillas DC Shoes talle 44.", precio: 5500, type: 'Mujer' },
      { id: 8, stock: 5, nombre: "DC Shoes V4", descr: "Zapatillas DC Shoes talle 44.", precio: 5700, type: 'Mujer' },
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
      
        const dataFiltrada = data.filter(element => element.type === categoryID);
        setDataToShow(dataFiltrada);
        const dataFiltradaStock = data.filter(element => element.stock > 0);
        setDataToShowStock(dataFiltradaStock);
    });
  };

  useEffect(() => {
    ejecutarEjercicio();
  }, [categoryID]);


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
