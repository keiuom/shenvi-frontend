import { Button, Flex, HStack, Text, Input, IconButton } from "@chakra-ui/react";
import React, { useState } from "react";
import IngredientInput from "./Sub/IngredientInput";
import { generateUID } from "../helpers/util";
import  productService  from "../services/product.service"
import { AddIcon } from "@chakra-ui/icons";
import parseService from "../services/parse.service";
function AddProduct() {
	const [formData, setFormData] = useState({});
	const [ingredients, setIngredients] = useState([{ name: "", amount: "", uid : generateUID() }]);

	const onAddClick = () => {

		var product = {
			...formData,
			ingredients : [
				...ingredients
			]
		}

		console.log(product);
		productService.add(product);	
	};
	const onMoreClick = () => {
		let uid = generateUID();
		let copy = [...ingredients, { name: "", amount: "", uid }];
		setIngredients(copy);
	};

	const onFormChanged = (e) => {
		let { name, value } = e.target;
		let obj = { ...formData, [name]: value };	
		setFormData(obj);
	}

	const handleGetIngredients = async () => {		
		var name  = formData.name;		
		console.log('Trying to get ingredients for', name);		
		var data = await parseService.byName(name);
		console.log(data);		

		var mapped =  data.map((d) => {
			var item = { name: d, amount: "", uid : generateUID() }
			return item;
		});
		debugger
		setIngredients(mapped);
	} 

	return (
		<Flex flexDirection="column" spacing={2} layerStyle="pageStyle">
			<Flex flexDirection="column" spacing={"12px"} maxW={"60%"}>
				
			<Text layerStyle={"inputLabelStyle"}>Name</Text>
				<Flex>
					<Input
						layerStyle={"inputStackStyle"}
						w="full"
						variant="unstyled"
						name="name"
						placeholder="Product name"
						onChange={onFormChanged}
					></Input>
					{formData.name && <Button variant='outline' ml = '8px' width={'30%'} onClick={handleGetIngredients}>Get Ingredients</Button>}
				</Flex>				

				<Text mt = '20px' layerStyle={"inputLabelStyle"}>Ingredients</Text>

				{ingredients.map((ingredient) => (
					<IngredientInput
						key={ingredient.uid}
						{...{setIngredients, ingredients, ingredient}}
					/>
				))}


				<HStack>
					<Button mt="16px" maxW={"300px"} onClick={onMoreClick}>

						<AddIcon mr= '8px' />Ingredient
					</Button>

					<Button mt="16px" maxW={"300px"} onClick={onAddClick}>
						Submit
					</Button>
				</HStack>
			</Flex>
		</Flex>
	);
}

export default AddProduct;
