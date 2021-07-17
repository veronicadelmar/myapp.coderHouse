import React from 'react';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import { useCart } from '../../../CartContext/CartContext';

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(Badge);

export default function CustomizedBadges() {

  const cartInfo = useCart()
  const {totalQuantity}= useCart()


  const totalQuantitys= ()=>{
    return totalQuantity() 
    }

  if (cartInfo.cartInfo.items.length === 0) return <h1> </h1>
  return (
    <Link to= "/cart">
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={totalQuantitys()} color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
    </Link>
  );
}