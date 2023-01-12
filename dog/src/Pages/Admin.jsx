import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Button, Heading } from '@chakra-ui/react'
const Admin = () => {
  return (
    <div>
      {/* <Heading>Admin</Heading> */}
      <Link to={"/login"}><Heading>Login</Heading></Link>
      <Link to={"/data"}><Heading>Data page</Heading></Link>
      <Link to={"/report"}><Heading>Report</Heading></Link>
    </div>
    
  )
}

export default Admin