import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-379c9.cloudfunctions.net/api",
  // "http://localhost:5001/clone-379c9/us-central1/api"
});

export default instance;
