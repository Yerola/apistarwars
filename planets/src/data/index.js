const axios = require("axios");

module.exports = {
    list: async () => {
        const { data } = await axios.get("http://database:8004/Planet");
        return data;
    },
    create: async (body)=>{
        const { data } = await axios.post(`http://database:8004/Planet`, body );
        return data;
    },
    byId: async (id) => {
        const { data } = await axios.get(`http://database:8004/Planet/${id}`);
        return data;
    },
    delete: async (_id) => {
        const { data } = await axios.delete(`http://database:8004/Planet?id=${_id}`)
        return data;
    }
}