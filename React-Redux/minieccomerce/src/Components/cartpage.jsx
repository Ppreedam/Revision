import React, { useState } from 'react'
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Menu from '@mui/material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import "./cartpage.css"
import { useDispatch, useSelector } from "react-redux";
import { Table } from '@mui/material';
import Divider from '@mui/material/Divider';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from "react-router-dom"
import { deletitemaction } from '../Redux/Appreducer/action';
import { useEffect } from 'react';

const Cartpage = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const dispatch = useDispatch();
  const [price, setPrice] = useState(0);

  const product = useSelector((state) => state.Appreducer?.cart);
  // console.log(product)
  const deletitem = (id) => {
    dispatch(deletitemaction(id))
    console.log(id)
  }
  const total = () => {
    let price = 0;
    product.map((ele) => {
      return price = ele.price * ele.quantity + price
    })
    setPrice(price)
  }

  useEffect(() => {
    total()
  }, [total])




  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <div>
      <Badge badgeContent={product.length} color="secondary">
        <ShoppingCartIcon color="purple"
          id="demo-positioned-button"
          aria-controls={open ? 'demo-positioned-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        />
      </Badge>
      <Menu className='menubox'
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        {
          product.length >= 1 ?
            <div className='card_details' style={{ width: "24rem", padding: 10 }}>
              <Table>
                <thead>
                  <tr>
                    <th>Photo</th>
                    <th>Restaurant Name</th>
                    <th>Delet</th>
                  </tr>
                </thead>
                <Divider />

                <tbody>
                  {
                    product && product.map((item) => {
                      return (
                        <>

                          <tr className='cartsingledata'>
                            <td>
                              <Link to={`/productDetails/${item.id}`} onClick={handleClose}>
                                <img src={item.thumbnail} alt="" style={{ width: "5rem", height: "5rem" }} />
                              </Link>
                            </td>
                            <td>
                              <p><b>{item.title}</b></p>
                              <p>Price:-{item.price}</p>
                              {/* <p>Category:-{item.category}</p> */}
                            </td>
                            <td>
                              <DeleteIcon onClick={handleClose} className='cartdeleticon' onClick={() => deletitem(item.id)} />
                            </td>
                          </tr>

                        </>
                      )
                    })
                  }
                  <hr />
                  <p className='text-center'>Total :₹ {price}</p>


                  <Link to="/information"><button className='checkout'>Checkout</button></Link>

                </tbody>
              </Table>
            </div>
            : <div className='cartbox'>
              <CloseIcon onClick={handleClose} className="closeicon" />
              <div className='display-flex'>
                <p >Cart Is Empty</p>
                <img src="https://media.giphy.com/media/WAQiH273h7nTChAbHu/giphy.gif" className='emptycartimage' alt="emptycart" style={{ width: "6rem", padding: 10 }} />
              </div>
            </div>
        }

      </Menu>

    </div>
  )
}

export default Cartpage