import axios from "./customize-axios";

const fetchAllUsers = (page) => {
    return axios.get(`/api/users?page=${page}`);
}

export {fetchAllUsers};