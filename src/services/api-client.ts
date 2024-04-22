import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "849c9a0e4845405a968f073e9aa62f1b",
    },
});
