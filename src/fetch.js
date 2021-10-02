const axios = require('axios');

const test = async () => {
    const message = {
        name: 'message text'
      };
    axios.post(`http://localhost:3000/sendMessage`, { message })
    .then(res => {
      console.log(res);
    })
}
test();