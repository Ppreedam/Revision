// import React from 'react'
// import { useParams } from 'react-router-dom'

// const Editdata = () => {
//     
//   return (
//     <div>Editdata</div>
//   )
// }

// export default Editdata

import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { EditDataaction } from '../Redux/action';
import {
    FormControl,
    FormLabel,
    Input,
    Select,
    Button,
    Stack,
    Heading,
    
} from '@chakra-ui/react'
import { useNavigate, useParams } from 'react-router-dom';

const initialdata = {
    name: "",
    age: "",
    place: "",
    gender: ""
}

const Editdata = () => {
    const [data, setData] = useState(initialdata);
    const dispatch = useDispatch();
    const id=useParams();
    const navigate = useNavigate()
//     console.log(id.id)
    // const product = useSelector((state) => state?.product?.data);

    const handlechangevalue = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value })
    };
    const Registration = () => {
        dispatch(EditDataaction(id,data))
        const res = JSON.parse(localStorage.getItem("res"))
        
            alert("Successful Edited")
            navigate("/data")
        
    };

    return (
        <>
        <Heading>EditData</Heading>
            <FormControl>
                <Stack width="50%" margin="auto">
                <FormLabel>Name of breed</FormLabel>
                <Input type='text' name='name' onChange={(e) => handlechangevalue(e)} />
                <FormLabel>Age of pet</FormLabel>
                <Input type='text' name='age' onChange={(e) => handlechangevalue(e)}/>
                <FormLabel>Gender</FormLabel>
                <Select placeholder='Select Gender' name="gender" onChange={(e) => handlechangevalue(e)}>
                    <option value="men">Male</option>
                    <option value="women">Female</option>
                </Select>
                <FormLabel>Place</FormLabel>
                <Input type='text' name="place" onChange={(e) => handlechangevalue(e)}/>
                <Button
                    mt={4}
                    colorScheme='teal'
                    onClick={Registration}
                    type='submit'
                >
                    Submit
                </Button>
                </Stack>

            </FormControl>
        </>
    )
}

export default Editdata