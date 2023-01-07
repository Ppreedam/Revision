import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom';
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Text,
  Button,
  Heading,
  ButtonGroup,
  Divider
} from '@chakra-ui/react'

const SinglePage = () => {
  
  const [data, setData] = useState();
  const id = useParams();

  useEffect(() => {
    fetch(`https://dummyjson.com/products?limit=${16}&skip=${0}`)
    .then((res) => res.json())
    .then((res) => setData(res.products))
    .catch((err) => console.log(err))
    
  }, [])
  

  

  // console.log(data);

  const filterdata = data && data.filter((item) => {
    return item.id == id.id
  })
  console.log(filterdata)



  return (
    <div>
      {
        filterdata && filterdata.map((item) => {
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
              <Button variant='solid' bg="teal">
                Buy now
              </Button>
              {/* </NavLink> */}
              <Button variant='ghost' colorScheme='dark'>
                Add to cart
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
        })
      }
    </div>
  )
}

export default SinglePage