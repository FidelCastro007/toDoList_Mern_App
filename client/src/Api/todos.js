import axios from "axios";

export default axios.create({
    baseURL: REACT_APP_BACKEND_URL
})
