import { Box, Button, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getData } from "../Redux/action";

 function Report(){
    const [count,setCount]=useState(0)
    const [data, setData] = useState([]);
    const [filterdata, setFilterdata] = useState([]);
    const dispatch =useDispatch();
    const product = useSelector((store) => store.Appreducer?.product?.data);
    console.log(product.length)

    useEffect(() => {
      if (product == undefined) {
          dispatch(getData())
      }
      setData(product)
      setFilterdata(product)
  }, [product])


  let dogbygenderdata = filterdata.filter((el) => {
    return el.gender == "men"
})
// console.log(dogbygenderdata.length)

let numberoffemale = filterdata.filter((el) => {
  return el.gender == "women"
})
// console.log(numberoffemale.length)
 

    return (
        <>
            <Text fontWeight={"bold"} fontSize={"25px"} padding={5}> Report Page </Text>
            <Button><Link to="/admin/data">Go Back</Link></Button> <br /> <br />
            <Box w={"30%"} margin="auto" border={"2px solid grey"} borderRadius="10px" paddingTop={4} paddingBottom={4}>
                <Text>Total number of dogs - {product.length}</Text>
                <Text>Total number of female dogs - {numberoffemale.length}</Text>
                <Text>Total number of male dogs - {dogbygenderdata.length}</Text>
                <Text>Average age group of dogs - {count}</Text>
            </Box>
        </>
    )
}
export default Report