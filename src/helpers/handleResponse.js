import { createStandaloneToast } from "@chakra-ui/react";
const { toast } = createStandaloneToast();

export function handleResponse(response) {
	return response.text().then((text) => {
		if (!response.ok) {
			var error = "";
			switch (response.status) {
				case 400:
					{
						error = response.statusText + " " + text;
						console.error("SYSTEM ERROR", {
							erroCode: response.status,
							message: error,
						});
					}
					break;
				case 401:
					{
					}
					break;
				case 500:
					{
						error = response.statusText + " " + text;
						console.error("SYSTEM ERROR", {
							erroCode: response.status,
							message: error,
						});
					}
					break;
				default:
					{
						error = response.statusText + " " + text;
						console.error("SYSTEM ERROR", {
							erroCode: response.status,
							message: error,
						});
					}
					break;
			}

			return Promise.reject(error);
		} else {
			let parsed = {};
			try {
				parsed = JSON.parse(text);
			} catch (e) {
				parsed = JSON.parse(JSON.stringify(text));
			}
			return parsed;
		}
	});
}

export function withToast(response) {
	if (response.ok) {
		toast({
			containerStyle: {
				fontSize: "14px",
				fontWeight: "normal",
			},
			title: "Success!",
			position: "bottom-right",
			variant: "subtle",
			status: "success",
			duration: 2000,
			isClosable: true,
		});
	} else {
		toast({
			containerStyle: {
				fontSize: "14px",
				fontWeight: "normal",
			},
			title: "Failed!",
			position: "bottom-right",
			variant: "subtle",
			status: "error",
			duration: 2000,
			isClosable: true,
		});
	}
	return response;
}
