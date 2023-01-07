import React from 'react'
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
import { useState } from 'react';

const Cart = () => {
  const notify = () => toast("Wow Data Added To Cart!✌✔🎁🎈❤🛒🛒");
  // const [count , setCount]=useState(1)
  var data = JSON.parse(localStorage.getItem("cartdata")) || [];
  console.log(count)

  return (
    <div>
      {
         data.map((item)=>{
          var count=0
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
              <Text color='dark' fontSize='2xl'>
                <strong>Total-Price</strong>:- {item.price*count}
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <ButtonGroup spacing={2} ml="30%">
            <Button >+</Button>
            <Button>{count}</Button>
            <Button >-</Button>
          </ButtonGroup>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing='2' ml="20%">
              
              <Button variant='solid' bg="teal" >
                Buy now
              </Button>
              
              <button onClick={notify}> <Button variant='ghost' colorScheme='dark' >
                Add to cart
              </Button></button>
              <ToastContainer />
            </ButtonGroup>
          </CardFooter>
        </Card>
        })
      }
    </div>
  )
}

export default Cart