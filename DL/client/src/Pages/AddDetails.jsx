import react, { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
// import { addDlDetails } from '../Service/api';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const initialValue = {
  dob: '',
  dl: '',
  // email: '',
  // phone: ''
}

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px;
`;


const AddDetails = () => {
  const navigate=useNavigate()

  const [user, setUser] = useState(initialValue);
  const { dob, dl } = user;
  // let navigate = useNavigate();

 const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value }) 
  }

  const addUserDetails =async () => {  
  const [yyyy,mm,dd]=dob.trim().split("-")
  const newdob=dd+"-"+mm+"-"+yyyy

  function stringToBase64(string) {
          return btoa(string);
        }
        
      const dln=stringToBase64(dl);
      const dobn=stringToBase64(newdob);

      const encryptobj ={
        dobn,
        dln
      }
      // addDlDetails(encryptobj)
    // console.log(dlnew)
    // try {
      var arr=[];
      return await axios.post("http://localhost:5000/scrub",encryptobj)
      .then((res)=>{
        arr.push(res.data)
      localStorage.setItem("dldetails",JSON.stringify(arr))
        navigate("/print")
      })
      
      .catch((err)=>alert(err.response.data.message))
    
      // console.log(res.response.data)
      
    // } catch (err) {
      
        // console.log(err.response.data)
      
    // }
    
    
    
  }

  return (
    <Container>
      <Typography variant="h4">Add DL Details</Typography>
      <FormControl>
        <InputLabel htmlFor="my-input">DOB</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name='dob' value={dob} id="my-input" type='date' />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">DL-No</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name='dl' value={dl} id="my-input" />
      </FormControl>
      {/* <FormControl>
        <InputLabel htmlFor="my-input">Email</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name='email' value={email} id="my-input" />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Phone</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name='phone' value={phone} id="my-input" />
      </FormControl> */}
      <FormControl>
        <Button variant="contained" color="primary" onClick={() => addUserDetails()}>Add User</Button>
      </FormControl>
    </Container>
  )
}

export default AddDetails