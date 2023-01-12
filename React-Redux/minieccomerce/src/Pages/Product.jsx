import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { Addtocart, getData } from '../Redux/Appreducer/action'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Rating from '@mui/material/Rating';
import { ButtonGroup } from '@mui/material';
import "./Product.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';


const Product = () => {
  const dispatch = useDispatch()
  const [data, setData]=useState([])
  const [filterdata, setFilterData]=useState([]);
  
  const product = useSelector((state) => state.Appreducer?.product?.products);
  
  // console.log('product',product)
  const notify = () => toast("Wow Item Added🎈🛒🛒✔!");

  

  useEffect(() => {
    if(product==undefined){
      dispatch(getData())
    }
    setData(product)
    setFilterData(product)
  }, [product])

  function SendDatatocart(value){
    dispatch(Addtocart(value))
  }

  // Filter_sorting
  const handlecategory=(e)=>{
    const {value}=e.target;
    const productfilter=filterdata.filter((el)=>{
      return el.category==value
    })
    console.log(productfilter)
    setData(productfilter)
  }

  // useEffect(()=>{
    
  // },[filterdata])



  return (
    <>
    <div class="display-flex">
    <div >
        <select  name=""  class="category" onChange={(e)=>handlecategory(e)}>
            <option value="">-:Filter By Category:-</option>
            <option value="smartphones">smartphones</option>
            <option value="laptops">Laptops</option>
            <option value="fragrances">Fragrances</option>
            <option value="skincare">skincare</option>
            <option value="groceries">Groceries</option>
            <option value="home-decoration">home-decoration</option>
            <option value="skincare">skincare</option>
            <option value="groceries">groceries</option>
        </select>
    </div>
    <div >
        <select  name=""  class="category">
            <option value="">-:Filter By Brand:-</option>
            <option value="Apple">Apple</option>
            <option value="Samsung">Samsung</option>
            <option value="OPPO">OPPO</option>
            <option value="Microsoft Surface">Microsoft Surface</option>
            <option value="Infinix">Infinix</option>
            <option value="HP Pavilion">HP Pavilion</option>
            <option value="Fog Scent Xpressio">Fog Scent Xpressio</option>
            <option value="fauji">fauji</option>
        </select>
    </div>
    <div>
        <select name="" class="category" >
            <option value="">-:Sort By Price:-</option>
            <option value="desc">High To Low</option>
            <option value="asc">Low To High</option>
        </select>
    </div>
    <div>
           <select name="" class="category" >
            <option value="">-:Sort By Alphabetical:-</option>
            <option value="desc">High To Low</option>
            <option value="asc">Low To High</option>
        </select>
    </div>
</div>   


    <div className='product-container'>
      
      {
        data && data.map((el) => {
          return (

            <Card className='productcard'  >
              <Card.Img variant="top" className='card-image' src={el.thumbnail} />
              <Card.Body>
                <Card.Title>{el.title}</Card.Title>
                <Card.Text> <strong>Brand</strong>:- {el.brand}</Card.Text>
                <Card.Text> <strong>Category</strong>:- {el.category}</Card.Text>
                <Card.Text> <strong>Price</strong>:- {el.price}</Card.Text>

                <Card.Text>  <Rating name="half-rating" defaultValue={el.rating} precision={0.5} /></Card.Text>
                <ButtonGroup >

                  <button className='button' onClick={notify}>
                    <button className='button' onClick={() => SendDatatocart(el)}>Add Cart</button>
                  </button>
                  <ToastContainer />
                </ButtonGroup>
              </Card.Body>
            </Card>

          );
        })
      }
    </div>
</>

  )
}

export default Product