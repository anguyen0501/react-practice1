import axios from "./customize-axios";

const fetchAllUsers = () => {
    return axios.get("/api/users?page=1");
}

export {fetchAllUsers};