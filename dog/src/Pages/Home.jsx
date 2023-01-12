import React from 'react'
import { Link} from 'react-router-dom'
import { Button, ButtonGroup } from '@chakra-ui/react'

const Home = () => {
  return (
    <div>
        <Link to={"/user"}><Button colorScheme='blue'>Go To UserSection</Button></Link>
        <Link to={"/admin"}><Button colorScheme='purple'>Go To Admin</Button></Link>
    </div>
  )
}

export default Home