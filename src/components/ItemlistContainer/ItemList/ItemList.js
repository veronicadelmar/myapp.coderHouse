import React, { useEffect, useState } from "react";
import { Item } from "../Item";

//          <ul style={{display:'flex'}} >
//<li style={{listStyle:'none'}} key={i}><Item array={productos}/></li>
export const ItemList = props => { 

  return <>{
    props.item.map((sendItem) => {
      return <Item array={sendItem} />
    })
  }
  </>
}
