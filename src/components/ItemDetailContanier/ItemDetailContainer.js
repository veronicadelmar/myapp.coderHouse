import React, { useEffect, useState } from "react";

import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router";
import { getFireStore } from "../../Firebase/Firebase";
import {Link} from 'react-router-dom'


export const ItemDetailContainer = props => {
  const [itemDetail, setItemDetail] = useState([]);
  const [loader, setLoader]= useState(false);
  const [error, setError]=useState()
  const { pId } = useParams();
  
  useEffect(()=>{
    setLoader (true);
  const db= getFireStore();
  const itemCollection = db.collection("items");
  const productid = pId;
  const item = itemCollection.doc(productid);
  
    item.get().then((doc) =>{
     if (!doc.exists){
     console.log("no existe el item");
     setError(true)
     return;
     }
    setItemDetail([{id: doc.id, ...doc.data()}]);
     }).catch((error) =>{
       console.log("error", error);
     }).finally(()=>{
       setLoader(false)
     })
     
   },[pId]);
   
   
return(
  <div>

  
  {error === true && 
  <>
  <div >
  <h1>No existe el item</h1>
  <Link to="/">
  <button>volver al inicio</button>
  </Link>
  </div>
  </>
  }
 
  <div>
   {itemDetail?.map(it=>{
    return(
      <>
      <ItemDetail
      product={it}>
     </ItemDetail>
          </>
    )
   })}
   </div>
   
   </div>
  
)
}
//export default ItemDetailContainer;