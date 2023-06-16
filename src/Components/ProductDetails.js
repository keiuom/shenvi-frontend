import React from "react";
import { useLocation } from "react-router-dom";
import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import { convertCarbon, convertEfScore } from "../helpers/util";
import  RatingStars  from "./Sub/RatingStars";
export const ProductDetails = ({ item }) => {
	const { state } = useLocation();
	const { name, ingredients, sustainabilityMetrics } = state;
	return (
		<Box layerStyle="pageStyle">
			<Box maxW={"90%"} >
				<Text>{name}</Text>
				<Text>Food</Text>

				<Stack mt="20px" direction={"row"}>
					<Flex
						direction={"column"}
						borderRadius={"4px"}
						padding={"8px"}
						w="50%"
						layerStyle={"onSurfaceStyle"}
					>
						<Text layerStyle={"inputLabelStyle"}>Ingredients</Text>
						<Text>
							{ingredients
								.map((ingredient) => ingredient.name)
								.join(", ")}
						</Text>
					</Flex>

					<Flex
						direction={"column"}
						borderRadius={"4px"}
						padding={"8px"}
						w="50%"
						layerStyle={"onSurfaceStyle"}
					>
						<Text layerStyle={"inputLabelStyle"}>
							Packaging materials
						</Text>
						{/* <Text>
						{ingredients
							.map((ingredient) => ingredient.name)
							.join(", ")}
					</Text> */}
					</Flex>
				</Stack>

				{/* Rank */}

				<Box pt="40px">
					<Text>SHENVi Rank</Text>

					<Stack                        
						p="16px"
						direction={"row"}
						borderRadius={"8px"}
						layerStyle={"onSurfaceStyle"}
					>
						<Box w="50%">
							<Text>Health : N/A</Text>

							<Text mt = '16px'>
								Environment :{" "}
								{convertEfScore(sustainabilityMetrics.score)}
                                
							</Text>
                            <RatingStars value ={sustainabilityMetrics.score}></RatingStars>


							<Text mt = '16px'>
								Total Carbon :{" "}
								{convertCarbon(
									sustainabilityMetrics.totalCarbon
								)}
							</Text>
						</Box>

						<Box w="50%">
							<Text
								style={{ width: "100%" }}
								layerStyle={"inputLabelStyle"}
							>
								SHENVI Auto Generated Review
							</Text>

							<Box rounded={"8px"} p = "12px" layerStyle={"onSecondarySurfaceStyle"}>
								<Text fontSize={'14px'}>
									Lorem Ipsum is simply dummy text of the
									printing and typesetting industry. Lorem
									Ipsum has been the industry's standard dummy
									text ever since the 1500s, when an unknown
									printer took a galley of type and scrambled
									it to make a type specimen book. It has
									survived not only five centuries, but also
									the leap into electronic typesetting,
									remaining essentially unchanged. It was
									popularised in the 1960s with the release of
									Letraset sheets containing Lorem Ipsum
									passages, and more recently with desktop
									publishing software like Aldus PageMaker
									including versions of Lorem Ipsum.
								</Text>
							</Box>
						</Box>
					</Stack>
				</Box>
			</Box>
		</Box>
	);
};
