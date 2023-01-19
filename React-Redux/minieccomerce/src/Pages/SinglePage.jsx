import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { Addtocart, deletitemaction, getData, getDataById, Remove } from '../Redux/Appreducer/action';
import Rating from '@mui/material/Rating';
import DeleteIcon from '@mui/icons-material/Delete';
import "./Singlepage.css"
import axios from 'axios';
import { purple } from '@mui/material/colors';

const SinglePage = () => {
    const [image,setImage] = useState()
    const [product, setProduct] = useState([]);
    const dispatch = useDispatch()
    const id = useParams()

    // console.log(id.id)
    const data = useSelector((state) => state.Appreducer?.cart);
    // const maindata = useSelector((store)=>store.Appreducer?.product?.products)



    // console.log("singledata",data)
    useEffect(() => {
        filtter(id)
    }, [id])

    useEffect(() => {
        dispatch(getData())
    }, [])

    function filtter(id) {
        const filterdata = data && data.filter((el) => {
            return el.id == id.id
        })
        // console.log("filterdata",filterdata)
        setProduct(filterdata)
    }

    const send = (e) => {
        dispatch(Addtocart(e));
    }
    const remove = (item) => {
        console.log("remove", item)
        dispatch(Remove(item))
    }
    const deleteitem = (id) => {
        dispatch(deletitemaction(id))
    }
    
    return (
        <>
            <div className='singlepagebox'>

                {
                    product && product.map((item) => {
                        return (
                            <div>
                                <table>
                                    <tbody>
                                        <tr className='singlepageboxrow'>
                                            <td className='singlepageimg'>

                                                <img src={!image? item.thumbnail :image}
                                                className="thumbnail"
                                                alt="" />


                                                <div className='smallimagebox'>
                                                    {
                                                        item.images.map((el) => {
                                                            
                                                            return (

                                                                <div>
                                                                    <img className='smallimage' src={el} alt="smallimage" 
                                                                    onClick={()=>setImage(el)}
                                                                    style={image==el?{border:"5px solid purple"}:{border:""}}
                                                                    />
                                                                </div>

                                                            )
                                                        })
                                                    }
                                                </div>

                                            </td>


                                            <td className='singlepageIncdec'>
                                                <h3>{item.title}</h3>

                                                <p> <b>Price:-</b>{item.price} </p>
                                                <p><b>{`Total:-${(item.price) * (item.quantity)}`}</b> </p>
                                                <div className="buttondiv">
                                                    <button onClick={() => send(item)}>+</button>
                                                    <button>{item.quantity}</button>
                                                    <button onClick={item.quantity <= 1 ? () => deleteitem(item.id) : () => remove(item)}>-</button>
                                                </div>
                                            </td>
                                            <td className='singlepagedescription'>
                                                <p> <b>Descripation</b>:- {item.description}</p>
                                                <p> <b>Brand</b>:- {item.brand}</p>
                                                <p> <b>Category</b>:- {item.category}</p>
                                                <Rating name="half-rating" defaultValue={item.rating} precision={0.5} />

                                            </td>
                                            <td>
                                                <DeleteIcon className='deleticon' />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        )
                    })
                }

            </div>
        </>

    )
}

export default SinglePage