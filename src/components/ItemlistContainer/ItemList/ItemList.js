import React from "react";
import { Item } from "../Item";

export const ItemList = props => { 

  return <>{
    props.item.map((sendItem) => {
      return <Item array={sendItem} />
    })
  }
  </>
}
