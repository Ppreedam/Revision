import React from 'react';
import axios from "axios";
import { useState } from 'react';
import "./Home.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Card,
  Image,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,

} from '@chakra-ui/react'
import { useNavigate, } from 'react-router-dom';
import SinglePage from './SinglePage';
import { useEffect } from 'react';

const Home = () => {
  const [data, setData] = useState();
  const navigate = useNavigate();
  const notify = () => toast("Wow Data Added To Cart!✌✔🎁🎈❤🛒🛒");


  var url = `https://dummyjson.com/products?limit=${16}&skip=${0}`

  useEffect(() => {
    axios(url)
      .then((res) => {
        // console.log(res)
        setData(res.data.products)
      })
      .catch((err) => console.log(err))
  }, [])

  var cart = JSON.parse(localStorage.getItem("cartdata")) || [];
  function handlecart(item) {
    cart.push(item);
    localStorage.setItem("cartdata", JSON.stringify(cart))

  }

  function Singlepage(item) {
    // console.log(item)
    <SinglePage data={item} />
    navigate(`./SinglePage/${item.id}`)
  }

  return (
    <>
      <div className='conatiner'>
        <div className='display-grid'>
          {
            data && data.map((item) => {
              // console.log(item)
              return <Card maxW='sm' boxShadow='md' className='box-shadow'>
                <CardBody>
                  <Image
                    src={item.thumbnail}
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                    className='cardimage'
                  />
                  <Stack mt='6' spacing='3'>

                    <Text color='dark' fontSize='2xl'>
                      <strong>Title</strong>:- {item.title}
                    </Text>
                    <Text color='dark' fontSize='2xl'>
                      <strong>Brand</strong>:- {item.brand}
                    </Text>
                    <Text color='dark' fontSize='2xl'>
                      <strong>Category</strong>:- {item.category}
                    </Text>
                    <Text color='dark' fontSize='2xl'>
                      <strong>Price</strong>:- {item.price}
                    </Text>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                  <ButtonGroup spacing='2'>
                    {/* <NavLink to={"./SinglePage"}>  */}
                    <Button variant='solid' bg="teal" onClick={() => Singlepage(item)}>
                      Buy now
                    </Button>
                    {/* </NavLink> */}
                    <button onClick={notify}> <Button variant='ghost' colorScheme='dark' onClick={() => handlecart(item)}>
                      Add to cart
                    </Button></button>
                    <ToastContainer />
                  </ButtonGroup>
                </CardFooter>
              </Card>
            })
          }
        </div>
      </div>
    </>
  )
}

export default Home