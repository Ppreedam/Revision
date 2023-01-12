import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { postData } from '../Redux/action';
import {
    FormControl,
    FormLabel,
    Input,
    Select,
    Button,
    Stack,
    
} from '@chakra-ui/react'

const initialdata = {
    name: "",
    age: "",
    place: "",
    gender: ""
}

const UserSection = () => {
    const [data, setData] = useState(initialdata);
    const dispatch = useDispatch();
    // const product = useSelector((state) => state?.product?.data);

    const handlechangevalue = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value })
    };
    const Registration = () => {
        dispatch(postData(data))
        const res = JSON.parse(localStorage.getItem("res"))
        if (res.status == "201") {
            alert("Successful Registered")
        }
    };

    return (
        <>
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

export default UserSection