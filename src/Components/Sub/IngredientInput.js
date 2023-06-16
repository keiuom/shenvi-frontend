import { HStack, Input } from "@chakra-ui/react";
import React from "react";

const IngredientInput = ({ setIngredients, ingredients, ingredient,...rest }) => {
	

	const onValueChange = (e) => {
		let { name, value } = e.target;
		
		let obj = { ...ingredient, [name]: value };
	
		let ingredientsCopy = ingredients.map((i) => 
		{
			if (i.uid === ingredient.uid) {
				return obj;
			}
			return i;
		});
		setIngredients(ingredientsCopy);
	};
	

	const getAmount = (amount) => {		
		return amount;
	}

	return (
		<HStack mb = '16px'>
			<Input
				layerStyle={"inputStackStyle"}
				w="full"
				variant="unstyled"
				name = "name"
				placeholder="Ingredient name"
				defaultValue={ingredient.name}
				onChange={onValueChange}
			></Input>

			<Input
				layerStyle={"inputStackStyle"}
				w="30%"
				variant="unstyled"
				name ="amount"
				placeholder="Amount"
				defaultValue={getAmount(ingredient.amount)}
				onChange={onValueChange}
			></Input>
		</HStack>
	);
};

export default IngredientInput;
