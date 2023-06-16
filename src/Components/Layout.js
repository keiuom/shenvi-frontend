import { Flex, Button, HStack } from "@chakra-ui/react";
import React from "react";
import { Outlet, Link } from "react-router-dom";

const NAV_ITEMS = [
	{
		label: "SHENVi",
		link: "",
	},
];

const SECONDARY_NAV_ITEMS = [
	{
		label: "Settings",
		link: "/settings",
	},
	{
		label: "About",
		link: "/about",
	},
];

export default function Layout() {
	return (
		<div
			style={{
				height: "100vh",
				overflow: "hidden",
			}}
		>
			<Flex
				layerStyle="navbarStyle"
				align="center"
				justify="space-between"
			>
				<HStack spacing="10">
					{NAV_ITEMS.map((item, i) => (
						<Link key={i} to={item.link}>
							<Button variant="nav">{item.label}</Button>
						</Link>
					))}
				</HStack>

				<HStack>
					{SECONDARY_NAV_ITEMS.map((item, i) => (
						<Link key={i} to={item.link}>
							<Button variant="nav">{item.label}</Button>
						</Link>
					))}
				</HStack>
			</Flex>

			<Outlet />
		</div>
	);
}
