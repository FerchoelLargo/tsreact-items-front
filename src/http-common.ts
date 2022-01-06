import axios from "axios";

const root_rest = "http://localhost:8000/rest/";

export default axios.create({
  baseURL: root_rest,
  headers: {
    "Content-type": "application/json",
    "Authorization":"Token 314f4edb2bd4ca2f8ce8af2d94fff5cc692b833d"
  }
});