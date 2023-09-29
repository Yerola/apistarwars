const axios = require("axios");

module.exports = {
  list: async () => {
    const { data } = await axios.get("http://database:8004/Character");
    return data
  },
  create: async (body)=>{
    const { data } = await axios.post(`http://database:8004/Character`, body );
    return data;
  },
  byId: async (id) => {
    const { data } = await axios.get(`http://database:8004/Character/${id}`);
    return data;
  },
  delete: async (_id) => {
    const { data } = await axios.delete(`http://database:8004/Character?id=${_id}`)
    return data;
  }
}