import axios from 'axios'



export const getList = () => {
  return axios
    .get('/search', {
      headers: { 'Content-Type': 'application/json' }
    })
    .then(res => { 
      return res.data
    })
}

