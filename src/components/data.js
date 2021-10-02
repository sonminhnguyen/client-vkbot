const axios = require('axios');

const getGroups = async () => {
    const groups = await axios.get('/users/getGroups')
    return groups.data
}

export {
    getGroups
} 