import { authHeader } from "../helpers/authHeader";
import { handleResponse, withToast } from "../helpers/handleResponse";
import { config} from "../helpers/environmentConfig"
  
async function add(product) {	
	return fetch(`${config.apiUrl}/score/calculate`, {
		method: "POST",
		headers: { ...authHeader(), "Content-Type": "application/json" },
		body: JSON.stringify(product),
	})
		.then(withToast)
		.then(handleResponse);
}

async function getAll() {	
	
	return fetch(`${config.apiUrl}/score/getall`, {
		method: "GET",
		headers: { ...authHeader(), "Content-Type": "application/json" },
	}).then(handleResponse);
}
let productService = {
    getAll,
    add
};

export default productService;