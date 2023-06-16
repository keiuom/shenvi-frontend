import { Button } from "@chakra-ui/react";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import AddProduct from "./AddProduct";
import Settings from "./Settings";
import About from "./About";
import { ProductDetails } from "./ProductDetails";

function Main() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Home />} />
						<Route path="add-product" element={<AddProduct />} />
						<Route path="settings" element={<Settings />} />
						<Route path="about" element={<About />} />
						<Route path="product-details" element={<ProductDetails />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default Main;
