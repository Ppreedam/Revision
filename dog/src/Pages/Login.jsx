import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import {
    FormControl,
    FormLabel,
    Input,
    
    Button,
    Stack,
    
} from '@chakra-ui/react'
const initialData = {
    email: "",
    password: ""
}

const Login = () => {
    const [data, setData] = useState(initialData);
    const navigate = useNavigate()


    const handlechange = (e) => {
        const { name, value } = e.target
        setData({ ...data, [name]: value })
    }
    const Registration = () => {
        console.log(data)
        axios.post("https://reqres.in/api/register", data)
            .then((res) => {
                if (res.status == "200") {
                    alert("Login Successful")
                    navigate("/data")
                }
            })
    }

    return (
        <>
            
            <FormControl>
                <Stack width="50%" margin="auto">
                    <FormLabel>Enter Email</FormLabel>
                    <Input type='email' name='email'onChange={(e) => handlechange(e)} />
                    <FormLabel>Password</FormLabel>
                    <Input type='password' name='password' onChange={(e) => handlechange(e)} />
                    <Button
                        mt={4}
                        colorScheme='teal'
                        onClick={Registration}
                        type='submit'
                    >
                        Login
                    </Button>
                </Stack>

            </FormControl>
        </>
    )
}

export default Login