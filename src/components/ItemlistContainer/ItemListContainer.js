import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import ItemCount from './ItemCount';
import { ItemList } from './ItemList/ItemList';

export default function SimpleContainer() {


  

  return (
    <React.Fragment>
    

      <CssBaseline />
      
      <h1>HOLA, NO TOMES EN CUENTA MIS ESTILOS JAJA SON UN ASCO!! </h1>
       
        <ItemList />


      
     

    </React.Fragment>
  );
}
