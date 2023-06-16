import { authHeader } from "../helpers/authHeader";
import { handleResponse, withToast } from "../helpers/handleResponse";
import { config} from "../helpers/environmentConfig"
 
async function byName(name) {	
	
	return fetch(`${config.apiUrl}/parse/byName?name=${name}`, {
		method: "GET",
		headers: { ...authHeader(), "Content-Type": "application/json" },
	}).then(handleResponse);
}
let parseService = {
    byName    
};

export default parseService;