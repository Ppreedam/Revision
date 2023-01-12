import { Heading, Select } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Deletdata, getData } from '../Redux/action';
// import store from '../Redux/store';
import "./Data.css"
import { Card, Stack, Text, Divider, ButtonGroup, Button, CardBody, CardFooter, Image } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';




const Data = () => {
    const dispatch = useDispatch();
    const [data, setData] = useState([]);
    const [filterdata, setFilterdata] = useState([]);
    const navigate = useNavigate()

    const product = useSelector((store) => store.Appreducer?.product?.data);
    // setData(product);
    // console.log(product)
    useEffect(() => {
        if (product == undefined) {
            dispatch(getData())
        }
        setData(product)
        setFilterdata(product)
    }, [product])

    // useEffect(()=>{
    //     dispatch(getData())
    // },[])


    // console.log(data)
    const sortbyage = (e) => {
        const { value } = e.target
        if (value == "asc") {
            let sortdata = filterdata.sort((a,b) => {

                return a.age-b.age
            })
            // console.log(sortdata)
            setData(sortdata);
        }
       else if (value == "desc") {
            let sortdata = filterdata.sort((a,b) => {

                return b.age-a.age
            })
            // console.log(sortdata)
            setData(sortdata);
        }

    }
    console.log(data)
    const filterbygender = (e) => {
        const { value } = e.target
        let dogbygender = filterdata.filter((el) => {
            return el.gender == value
        })
        setData(dogbygender);
        // console.log(dogbygender)
    }

    function handledelet(id) {
        console.log(id)
        dispatch(Deletdata(id))
    }
    function editdata(id) {
        console.log(id)
        navigate(`/edit/${id}`)
    }
    return (
        <>
            <Heading>Data Page</Heading>


            <Select name="" id="" onChange={(e) => filterbygender(e)}>
                <option value="">-:Filter By Gender:-</option>
                <option value="men">Men</option>
                <option value="women">Women</option>
            </Select>

            <Select name="" id="" onChange={(e) => sortbyage(e)}>
                <option value="">-:Sort By age:-</option>
                <option value="asc">Low To High</option>
                <option value="desc">High to Low</option>
            </Select>
            <div className='dogbox'>
                {
                    data && data.map((el) => {

                        return (
                            <Card maxW='sm' templateColumns='repeat(5, 1fr)' gap={6}>
                                <CardBody>
                                    <Image
                                        src='data:image/jpeg;base64,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'
                                        alt='Dog'
                                        borderRadius='lg'
                                    />
                                    <Stack mt='6' spacing='3'>
                                        <Heading size='md'>Name:-{el.name}</Heading>
                                        <Text>Age:-{el.age}</Text>
                                        <Text >Gender:-{el.gender}</Text>
                                        <Text >Place:-{el.place}</Text>
                                    </Stack>
                                </CardBody>
                                <Divider />
                                <CardFooter>
                                    <ButtonGroup spacing='2'>
                                        <Button variant='solid' colorScheme='red' onClick={() => handledelet(el.id)}>
                                            Delet
                                        </Button>
                                        <Button variant='ghost' colorScheme='blue' onClick={() => editdata(el.id)}>
                                            EDit
                                        </Button>
                                    </ButtonGroup>
                                </CardFooter>
                            </Card>
                        )
                    })
                }

            </div>
        </>
    )
}

export default Data