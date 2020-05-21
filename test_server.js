const axios = require('axios')

let client = axios.create({
  baseURL: 'http://localhost:8000/',
  timeout: 1000,
})

client.post("/user", {id_usr:'1234', name: 'Ramon' , passwd: 'secret1'})
      .then(response => console.log(response.data))
      .catch(error => console.log(error))

client.post("/activities", {id_act:'4321', name: 'Motocross' , level: 'Low'})
      .then(response => console.log(response.data))
      .catch(error => console.log(error))
