import axios from "axios";
export const CommonService = {
    getGenres: async () => {
        let { data } = await axios.get(`${process.env.API}/genre`);
        if(!data) return error;
        return data;
    }
}