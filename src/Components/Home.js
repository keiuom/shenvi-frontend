import { Button, Flex, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import productService from '../services/product.service';
import parseService from '../services/product.service';
import { convertEfScore } from "../helpers/util";

function Home() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const handleOnAddClicked = () => {
    navigate(`add-product`, {});
  }


  useEffect(() => {
    fetchData();
  }, [])


  const fetchData = async () => {
    var data = await productService.getAll();
    setProducts(data);
  }

  const singleItemClicked = async (item) => {
    navigate(`product-details`, { state: item });
  }
  

  return (

    <Flex flexDirection="column" layerStyle="pageStyle">
      <Flex flexDirection="column" mb = "40px">
        <Text layerStyle={"inputLabelStyle"}>
          Add new Product
        </Text>

        <Button maxW={'200px'} onClick={handleOnAddClicked}>
          Add
        </Button>
      </Flex>

      <Text layerStyle={"inputLabelStyle"}>
        All Products
      </Text>

      <Flex layerStyle={"onSurfaceBorderStyle"} flexDirection="column" marginBottom={'20px'}>
        <Flex layerStyle={"onSecondarySurfaceStyle"} style={{ paddingLeft: '16px', paddingRight: '16px', height: '40px', width: '100%', justifyContent: 'space-between', alignItems: 'center' }} flexDirection="row">
          <Text w="33%">Id</Text>
          <Text w="33%">Name</Text>
          <Text w="33%">Score</Text>
        </Flex>
        {
          products.map((x, i) => {
            return (

              <Flex onClick={() => singleItemClicked(x)} key={x.id} layerStyle={i % 2 !== 0 ? "onSecondarySurfaceStyle" : "onSurfaceStyle"} style={{ paddingLeft: '16px', paddingRight: '16px', height: '40px', width: '100%', justifyContent: 'space-between', alignItems: 'center' }} flexDirection="row">
                <Text w="33%" >{x.id}</Text>                
                <Text w="33%" >{x.name}</Text>
                <Text w="33%">{convertEfScore(x.sustainabilityMetrics.score) ?? x.sustainabilityMetrics.status}</Text>
                
                {/* <Text w="33%">{convertCarbon(x.sustainabilityMetrics.totalCarbon) ?? x.sustainabilityMetrics.status}</Text>
               */}
              
              </Flex>
            );
          })
        }
      </Flex>

    </Flex>
  )
}

export default Home