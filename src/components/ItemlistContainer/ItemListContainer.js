import React, { useEffect, useState } from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import ItemCount from './ItemCount';
import { ItemList } from './ItemList/ItemList';
import { useParams } from "react-router-dom";
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import { getFireStore } from "../../Firebase/Firebase";

export const ItemListContainer = () => {

  const [itemContent, setItemContent] = useState([]);
  const { categoryID } = useParams();
  useEffect(()=> {

    const db= getFireStore();
   const itemCollection = db.collection("items");
   const filteredItems = categoryID ? itemCollection.where('cat','==',categoryID) : itemCollection
   filteredItems.get().then((querySnapshot)=>{
      if (querySnapshot.size === 0){
       console.log("no result");
      }
     setItemContent(querySnapshot.docs.map(doc=> {return {"id": doc.id, ...doc.data()}}));
   }).finally(()=>{

   })
  },[categoryID]);
  


  return (
    <React.Fragment>
        <CssBaseline /> 
        <ItemList item={itemContent}/>
          
        
    </React.Fragment>
  );
}
