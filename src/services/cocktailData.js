import axios from 'axios'

const getData = (baseURL) => {
    const request = axios.get(baseURL)
    return request.then(response => response.data)
}

const getDataObject = {
    getData
}

export default getDataObject